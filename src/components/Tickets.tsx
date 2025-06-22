import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Tickets = () => {
  const [quantity, setQuantity] = useState(1);
  
  const ticketOptions = [
    {
      type: 'General Admission',
      price: 129,
      description: 'Access to all 3 days of the festival',
      features: [
        'Access to all stages',
        'General festival areas',
        'Food & beverage vendors',
        'Art installations',
      ],
      notIncluded: [
        'VIP areas',
        'Fast entry lane',
        'Official festival merchandise',
        'Premium viewing areas'
      ]
    },
    {
      type: 'VIP Experience',
      price: 299,
      featured: true,
      description: 'Enhanced festival experience with premium benefits',
      features: [
        'Access to all stages',
        'Exclusive VIP areas',
        'Fast entry lane',
        'Premium viewing areas',
        'Complimentary festival t-shirt',
        'Dedicated VIP bars with exclusive drinks',
        'Air-conditioned restroom facilities',
      ],
      notIncluded: [
        'Backstage access',
        'Meet & greet with artists',
      ]
    },
    {
      type: 'Ultimate Package',
      price: 499,
      description: 'The ultimate festival experience for true music lovers',
      features: [
        'All VIP benefits',
        'Backstage tours',
        'Selected artist meet & greets',
        'Exclusive backstage lounge access',
        'Complimentary food & drinks',
        'Premium festival merchandise pack',
        'Festival afterparty access',
        'Free festival poster signed by headliners',
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Get Your Tickets
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect ticket option for your festival experience.
            Early bird tickets available while supplies last!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketOptions.map((ticket, index) => (
            <div 
              key={index}
              className={`
                relative rounded-xl overflow-hidden border transition-all duration-500
                ${ticket.featured 
                  ? 'bg-gradient-to-b from-gray-800 to-indigo-900/60 border-pink-500/50 shadow-xl shadow-pink-500/10 transform hover:-translate-y-2'
                  : 'bg-gray-800/40 border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transform hover:-translate-y-1'
                }
              `}
            >
              {ticket.featured && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-pink-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-b-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold text-white mb-2">{ticket.type}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">${ticket.price}</span>
                  <span className="text-gray-400"> / person</span>
                </div>
                <p className="text-gray-400 mb-6">{ticket.description}</p>
                
                <div className="mb-8 space-y-3">
                  <p className="text-sm font-medium text-gray-300">Includes:</p>
                  {ticket.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {ticket.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm font-medium text-gray-300 mt-4">Not included:</p>
                      {ticket.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{item}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                
                <div>
                  <button 
                    className={`
                      w-full py-3 rounded-lg font-bold transition-all duration-300
                      ${ticket.featured
                        ? 'bg-pink-600 hover:bg-pink-700 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }
                    `}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-3">
            Need group tickets? Contact us for special rates for groups of 10+
          </p>
          <a 
            href="mailto:tickets@rhythmfest.com" 
            className="text-pink-500 hover:text-pink-400 font-medium transition-colors duration-300"
          >
            tickets@rhythmfest.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tickets;