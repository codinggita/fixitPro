import React, { useState, useCallback } from 'react';
import { Upload, X, FileImage, FileText, AlertCircle, Loader2 } from 'lucide-react';
import { uploadToCloudinary } from '../services/cloudinaryService';

const FileUpload = ({
  onFileSelect,
  maxFiles = 5,
  maxSize = 5,
  acceptedTypes = ['image/*', 'application/pdf'],
  uploadToCloud = false,
  className = '',
}) => {
  const [files, setFiles] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const validateFile = (file) => {
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`);
      return false;
    }

    const isValidType = acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -1));
      }
      return file.type === type;
    });

    if (!isValidType) {
      setError('Invalid file type');
      return false;
    }

    return true;
  };

  const handleFiles = useCallback(async (newFiles) => {
    setError('');
    
    if (files.length + newFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const validFiles = newFiles.filter(validateFile);
    
    if (validFiles.length === 0) return;

    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);

    if (uploadToCloud) {
      setUploading(true);
      try {
        const uploadPromises = validFiles.map(file => uploadToCloudinary(file));
        const uploadedData = await Promise.all(uploadPromises);
        const newUrls = uploadedData.map(data => data.url);
        setUploadedUrls(prev => [...prev, ...newUrls]);
        onFileSelect([...uploadedUrls, ...newUrls]);
      } catch (err) {
        setError('Failed to upload files to Cloudinary');
        console.error(err);
      } finally {
        setUploading(false);
      }
    } else {
      onFileSelect(updatedFiles);
    }
  }, [files, maxFiles, maxSize, acceptedTypes, onFileSelect, uploadToCloud]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedUrls = uploadedUrls.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setUploadedUrls(updatedUrls);
    onFileSelect(uploadToCloud ? updatedUrls : updatedFiles);
    setError('');
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) {
      return <FileImage className="w-5 h-5" />;
    }
    return <FileText className="w-5 h-5" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
          dragActive
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-300 hover:border-blue-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleInputChange}
          className="hidden"
          id="file-upload"
          disabled={uploading}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            {uploading ? (
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            ) : (
              <Upload className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <p className="text-gray-700 font-semibold mb-2">
            {uploading ? 'Uploading...' : 'Drag & drop files here or click to browse'}
          </p>
          <p className="text-gray-500 text-sm">
            Maximum {maxFiles} files, {maxSize}MB each
          </p>
        </label>
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-3">
                {getFileIcon(file)}
                <div>
                  <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Remove file"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}

      {files.some(f => f.type.startsWith('image/')) && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {files
            .filter(f => f.type.startsWith('image/'))
            .map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <button
                  onClick={() => removeFile(files.indexOf(file))}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
