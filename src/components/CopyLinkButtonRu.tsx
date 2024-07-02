"use client"

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CopyLinkButtonProps {
  className?: string;
}

const CopyLinkButtonRu: React.FC<CopyLinkButtonProps> = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Поделиться резюме');

  const handleCopyLink = () => {
    let link = window.location.href;
    // Проверяем, наличие якоря и удаляем
    if (link.includes('#')) {
      link = link.split('#')[0];
    }

    // Проверяем, наличие слеш и удаляем
    if (link.endsWith('/')) {
      link = link.slice(0, -1);
    }

    navigator.clipboard.writeText(link);
    setTooltipText('Ссылка скопирована');
    setShowTooltip(true);

    // Сбрасываем состояние через 2 секунды
    const timer = setTimeout(() => {
      setShowTooltip(false);
      setTooltipText('Поделиться резюме');
    }, 1100);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700 focus:outline-none"
        onClick={handleCopyLink}
      >
        <ExternalLink className="text-white w-5 h-5" />
      </button>
      {showTooltip && (
        <div
          className={`absolute top-[-53px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300 ${tooltipText === 'Ссылка скопирована'
            ? 'opacity-100'
            : 'opacity-50 hover:opacity-100'
            }`}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default CopyLinkButtonRu;