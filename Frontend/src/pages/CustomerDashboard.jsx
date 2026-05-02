import React from 'react';
import { History, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Manage your appliance repairs and warranties here.</p>
          </div>
          <Link to="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
            New Booking
          </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Bookings */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-blue-600" />
              Active Bookings
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">In Progress</span>
                <span className="text-gray-400 text-sm">Ref #12345</span>
              </div>
              <h3 className="text-lg font-bold">Refrigerator Repair</h3>
              <p className="text-gray-600 text-sm mb-4">Technician: Mike Ross (Coming at 2:00 PM)</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Warranties & Complaints */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Active Warranties
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Washing Machine</h3>
                <span className="text-green-600 text-sm font-bold">45 Days Left</span>
              </div>
              <p className="text-gray-500 text-xs mb-4">Expires on: June 15, 2026</p>
              <Link to="/complaint" className="flex items-center gap-2 text-sm text-red-600 font-bold hover:underline">
                <AlertTriangle className="w-4 h-4" />
                Raise Complaint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
