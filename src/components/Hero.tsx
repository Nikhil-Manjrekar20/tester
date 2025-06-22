import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-purple-900/80 to-gray-900"></div>

      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg')] bg-cover bg-center opacity-20"
        style={{ transform: `translateY(${offset}px)` }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="flex flex-col items-center space-y-6">
          <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs uppercase tracking-widest rounded-full">
            Premium Celebration Venue
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            <span className="block">CELEBRATE</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              IN STYLE
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-300 animate-fade-in-up">
            Create unforgettable memories in our stunning venues. Perfect for
            private parties, anniversaries, and special screenings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-pink-500" />
              <span>Available Year-Round</span>
            </div>
            <a
              href="https://www.google.com/maps/place/Vijay+Sri+Complex,+%236%2FP,+3rd+Floor,+Kalimandir,+Bandlaguda+Jagir,+Gandipet+Mandal,+Ranga+Reddy+District,+Telangana+500086"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <MapPin className="h-5 w-5 text-pink-500" />
              <span>Bandlaguda Jagir</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-pink-500" />
              <span>Flexible Hours</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#venues"
              className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full transition-all duration-300 font-bold text-lg hover:shadow-lg hover:shadow-pink-500/20 transform hover:-translate-y-1"
            >
              Explore Venues
            </a>
            <button
              onClick={() => setShowContact(!showContact)}
              className="bg-transparent border-2 border-white/30 hover:border-white text-white py-3 px-8 rounded-full transition-all duration-300 font-bold text-lg hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {showContact && (
            <div className="mt-8 bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl animate-fade-in-up">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +91 99590 59632</p>
                <p>Email: bingencelebrations@gmail.com</p>
                <p>Location: Vijay Sri Complex, #6/P, 3rd Floor, Kalimandir</p>
                <p>Bandlaguda Jagir, Gandipet Mandal</p>
                <p>Ranga Reddy District, Telangana 500086</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
