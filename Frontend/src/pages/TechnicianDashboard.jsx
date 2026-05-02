import React from 'react';
import { ClipboardList, CheckCircle2, Clock, Settings } from 'lucide-react';

const TechnicianDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">FixItPro</h2>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Technician Port</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-600 font-bold">
            <ClipboardList className="w-5 h-5" />
            Assigned Jobs
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <Clock className="w-5 h-5" />
            Pending Repairs
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <CheckCircle2 className="w-5 h-5" />
            Completed Jobs
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Assigned Repairs</h1>
          <p className="text-gray-600">You have 3 jobs scheduled for today.</p>
        </header>

        <div className="space-y-6">
          {[1, 2].map((job) => (
            <div key={job} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">Pending</span>
                  <span className="text-gray-400 text-sm">Ref #FIX-990{job}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Microwave Heating Issue</h3>
                <p className="text-gray-600 mb-4">Customer: Sarah Wilson • Location: 123 Maple St, Springfield</p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Accept Job</button>
                  <button className="border border-gray-200 px-6 py-2 rounded-xl font-bold text-sm">View Details</button>
                </div>
              </div>
              <div className="lg:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Quick Actions</h4>
                <div className="space-y-3">
                  <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm">
                    <option>Update Status</option>
                    <option>Accepted</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                  <button className="w-full text-left p-2 text-sm hover:bg-white rounded-lg transition-all flex items-center justify-between">
                    Add Parts
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TechnicianDashboard;
