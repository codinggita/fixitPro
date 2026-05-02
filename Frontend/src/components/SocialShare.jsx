import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

const SocialShare = ({ url, title, description }) => {
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-600">Share:</span>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.email}
        className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Share via Email"
      >
        <Mail className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SocialShare;
