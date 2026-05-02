import React from 'react';
import { Link } from 'react-router-dom';
import { WashingMachine, Refrigerator, Microwave, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Washing Machine Repair',
    description: 'Complete diagnostics and repair for all top-load and front-load models. Issue from drum issues to electronic failures.',
    warranty: '90 Days Service Warranty',
    icon: <WashingMachine className="w-8 h-8" />
  },
  {
    id: 2,
    name: 'Refrigerator Repair',
    description: 'Expert repair for single door, double door, and side-by-side refrigerators. Cooling issues, gas refilling, and compressor repair.',
    warranty: '180 Days Compressor Warranty',
    icon: <Refrigerator className="w-8 h-8" />
  },
  {
    id: 3,
    name: 'Microwave Repair',
    description: 'Repairs for convection, grill, and solo microwave ovens. Sparking issues, heating problems, and control panel repairs.',
    warranty: '30 Days Parts Warranty',
    icon: <Microwave className="w-8 h-8" />
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Select your appliance type to book a specialized technician.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="h-48 bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                <div className="p-6 bg-white/20 rounded-full scale-150">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-8 bg-blue-50 px-4 py-2 rounded-full w-fit">
                  <ChevronRight className="w-4 h-4" />
                  {service.warranty}
                </div>
                <Link 
                  to={`/booking?type=${service.name}`} 
                  className="block text-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
