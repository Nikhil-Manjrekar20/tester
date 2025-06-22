import React from 'react';
import { X } from 'lucide-react';

interface TermsConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsConditionsModal = ({ isOpen, onClose }: TermsConditionsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-gray-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-gray-300">
          <div className="space-y-4">
            <p>
              1. We do NOT provide any movie/OTT accounts. We will do the setups
              using your OTT accounts/downloaded content.
            </p>
            <p>2. Smoking/Drinking is NOT allowed inside the theater.</p>
            <p>
              3. Any DAMAGE caused to theater, including decorative materials like
              balloons, lights etc. will have to be reimbursed.
            </p>
            <p>
              4. Guests are requested to maintain CLEANLINESS inside the theater.
            </p>
            <p>
              5. Party poppers/Snow sprays/Cold Fire, and any other similar items
              are strictly prohibited inside the theater.
            </p>
            <p>
              6. Carrying AADHAAR CARD is mandatory. It will be scanned during
              entry.
            </p>
            <p>
              7. Couples under 18 years of age are not allowed to book the theatre.
            </p>
            <p>8. Pets are strictly not allowed inside the theatre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsModal;