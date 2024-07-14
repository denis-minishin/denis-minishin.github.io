"use client"

import React, { useState } from 'react';
import type { SVGProps } from 'react';

export function GTranslateIcon(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78c-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16m6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47c-.31-.35-.6-.72-.86-1.1zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5l-1.04-3.1l3.1 3.1l.92-.92l-3.3-3.25l.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1z"></path></svg>);
}

interface TranslateEnButtonRuProps {
  className?: string;
}

const TranslateEnButtonRu: React.FC<TranslateEnButtonRuProps> = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.location.href = './en';
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700 focus:outline-none"
        onClick={handleClick}
      >
        <GTranslateIcon className="text-white w-5 h-5" />
      </button>
      {showTooltip && (
        <div
          className="absolute top-[-33px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded-md whitespace-nowrap"
        >
          In English
        </div>
      )}
    </div>
  );
};

export default TranslateEnButtonRu;