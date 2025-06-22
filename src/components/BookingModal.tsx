import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { venuesData } from '../data/artistsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleVenueSelect = (venueId: string) => {
    navigate(`/payment?venue=${venueId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-gray-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Select a Venue</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {venuesData.map((venue) => (
            <div
              key={venue.id}
              className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => handleVenueSelect(venue.id)}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {venue.name}
              </h3>
              <p className="text-gray-300 mb-2">{venue.screenSize}</p>
              <p className="text-pink-500 font-bold">₹{venue.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;