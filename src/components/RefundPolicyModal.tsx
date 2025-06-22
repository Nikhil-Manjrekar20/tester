import React from 'react';
import { X } from 'lucide-react';

interface RefundPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RefundPolicyModal = ({ isOpen, onClose }: RefundPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-gray-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
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
              Advance amount is fully refundable if slot is cancelled at least 72
              hrs before the slot time.
            </p>
            <p>
              If your slot is less than 72 hrs away from time of payment, then
              advance is non-refundable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyModal;