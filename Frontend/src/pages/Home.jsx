import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Wrench, BadgePercent } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
            Expert Appliance Repairs, <br className="hidden sm:block" />
            <span className="text-blue-200">Guaranteed Warranty.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Say goodbye to unreliable repairs. FixItPro connects you with verified technicians 
            offering genuine parts and accountability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a Repair
            </Link>
            <Link to="/services" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all border border-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose FixItPro?</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="w-12 h-12 text-blue-600" />, title: "Verified Technicians", desc: "Background-checked and certified professionals." },
            { icon: <CheckCircle className="w-12 h-12 text-blue-600" />, title: "Warranty on Repairs", desc: "Up to 90 days warranty on service and parts." },
            { icon: <Wrench className="w-12 h-12 text-blue-600" />, title: "Genuine Parts", desc: "Only original replacement parts used." },
            { icon: <BadgePercent className="w-12 h-12 text-blue-600" />, title: "Transparent Pricing", desc: "No hidden costs. Pay exactly what you're quoted." }
          ].map((point, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
