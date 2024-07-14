"use client"

import React, { useState } from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  className?: string;
}

const PrintButtonRu: React.FC<PrintButtonProps> = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700 focus:outline-none"
        onClick={handlePrint}
      >
        <Printer className="text-white w-5 h-5" />
      </button>
      {showTooltip && (
        <div
          className="absolute top-[-53px] left-[100%] transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded-md transition-opacity duration-300"
        >
          Печать резюме
        </div>
      )}
    </div>
  );
};

export default PrintButtonRu;