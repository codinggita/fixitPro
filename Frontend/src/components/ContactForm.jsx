import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-green-50 rounded-3xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-center">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold"
          placeholder="How can we help?"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-semibold resize-none"
          placeholder="Tell us more..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 rounded-2xl font-black text-lg text-white shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 bg-blue-600 shadow-blue-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
