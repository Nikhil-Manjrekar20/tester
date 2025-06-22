import React from 'react';
import { sponsorsData } from '../data/sponsorsData';

const Sponsors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
              Our Sponsors
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            RHYTHM FEST 2025 is made possible thanks to our amazing sponsors.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-center text-xl font-bold text-white mb-8">Platinum Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
            {sponsorsData.platinum.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl h-40 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/10"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-center text-xl font-bold text-white mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center">
            {sponsorsData.gold.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl h-24 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Interested in becoming a sponsor for RHYTHM FEST 2025? 
            Get your brand in front of thousands of festival attendees.
          </p>
          <a 
            href="mailto:sponsors@rhythmfest.com" 
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full transition-all duration-300 font-medium"
          >
            Contact Our Sponsorship Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;