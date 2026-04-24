import React, { useState } from 'react';
import { Calendar, User, Phone, MapPin, Tool, AlertCircle, ShieldCheck } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    applianceType: '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Info */}
        <div className="md:w-1/3 bg-blue-600 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Book Your Repair</h2>
            <p className="text-blue-100 mb-8">Fill out the form and we'll assign a certified technician to your doorstep.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" />
              <span>Verified Techs</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-2/3 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-sm font-semibold text-gray-600 ml-1">Phone Number</label>
                <div className="relative mt-1">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="tel" 
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 9876543210"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-gray-600 ml-1">Address</label>
              <div className="relative mt-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Street, City, State"
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-sm font-semibold text-gray-600 ml-1">Appliance Type</label>
                <select 
                  required
                  className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setFormData({...formData, applianceType: e.target.value})}
                >
                  <option value="">Select Appliance</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Microwave">Microwave</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-sm font-semibold text-gray-600 ml-1">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-gray-600 ml-1">Problem Description</label>
              <div className="relative mt-1">
                <AlertCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea 
                  required
                  rows="3"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Explain what's wrong..."
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
