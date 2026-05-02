import React from 'react';
import { AlertCircle, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Complaint = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/customer-dashboard" className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-red-600 p-8 text-white">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <AlertCircle className="w-8 h-8" />
              Report an Issue
            </h1>
            <p className="mt-2 text-red-100">Recurring problem? We'll fix it for free under warranty.</p>
          </div>

          <form className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Select Previous Service</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all">
                <option>Washing Machine Repair - May 12, 2026</option>
                <option>Refrigerator Repair - April 05, 2026</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">What's the issue now?</label>
              <textarea 
                rows="4" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="Describe the recurring problem in detail..."
              ></textarea>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0" />
              <p className="text-sm text-yellow-800">
                Your previous repair for this appliance is still under warranty. A technician will be assigned for a follow-up visit at no extra cost.
              </p>
            </div>

            <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
