import React, { useState } from 'react';
import { addOns, eventTypes, cakes } from '../data/addOnsData';
import Header from './Header';
import Footer from './Footer';

const AddOns = () => {
  const [cakeType, setCakeType] = useState<'egg' | 'eggless'>('egg');
  const [cakeWeight, setCakeWeight] = useState<'halfKg' | 'oneKg'>('halfKg');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-20">
        {/* Add-ons Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Add-ons
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {addOns.map((addon) => (
                <div
                  key={addon.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={addon.image}
                      alt={addon.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-pink-500 font-bold">₹{addon.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Event Types
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {eventTypes.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 text-center p-4"
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={event.icon}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-medium">{event.name}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              We accept all kinds of events.
            </p>
          </div>
        </section>

        {/* Cakes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Cakes
              </span>
            </h2>

            <div className="flex justify-center gap-4 mb-8">
              <div className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Type
                  </label>
                  <select
                    value={cakeType}
                    onChange={(e) =>
                      setCakeType(e.target.value as 'egg' | 'eggless')
                    }
                    className="bg-gray-700 text-white rounded-lg px-4 py-2"
                  >
                    <option value="egg">Egg</option>
                    <option value="eggless">Eggless</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weight
                  </label>
                  <select
                    value={cakeWeight}
                    onChange={(e) =>
                      setCakeWeight(e.target.value as 'halfKg' | 'oneKg')
                    }
                    className="bg-gray-700 text-white rounded-lg px-4 py-2"
                  >
                    <option value="halfKg">½ kg</option>
                    <option value="oneKg">1 kg</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cakes.map((cake) => (
                <div
                  key={cake.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cake.name}
                    </h3>
                    <p className="text-pink-500 font-bold">
                      ₹{cake.prices[cakeType][cakeWeight]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AddOns;