"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Copy, Share2 } from 'lucide-react';
import ScrollLock from 'react-scrolllock';
import { RESUME_DATA_RU } from "@/data/resume-data-ru";
import type { SVGProps } from 'react';

export function EmailIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} color="currentColor"><path d="M22 12.5c0-.491-.005-1.483-.016-1.976c-.065-3.065-.098-4.598-1.229-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733c1.131 1.136 2.705 1.175 5.854 1.254q1.204.03 2.401.036"></path><path d="m2 6l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 6m0 11.5h-8m8 0c0-.7-1.994-2.008-2.5-2.5m2.5 2.5c0 .7-1.994 2.009-2.5 2.5"></path></g></svg>);
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724" color="currentColor"></path></svg>);
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232"></path></svg>);
}

export function ViberIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" {...props}><path fill="currentColor" d="M20.19 2.337c-.595-.545-3.005-2.297-8.372-2.32c0 0-6.333-.379-9.418 2.452C.684 4.185.083 6.698.014 9.815s-.146 8.959 5.485 10.547h.005l-.005 2.419s-.037.98.607 1.177c.778.244 1.238-.502 1.983-1.304c.408-.441.97-1.087 1.397-1.58a21.822 21.822 0 0 0 7.299-.557l-.15.032c.778-.253 5.18-.816 5.892-6.657c.744-6.03-.354-9.834-2.337-11.555m.652 11.115c-.607 4.875-4.173 5.185-4.829 5.395c-1.432.364-3.076.572-4.769.572c-.486 0-.968-.017-1.445-.051l.064.004s-2.438 2.939-3.197 3.703c-.248.248-.521.228-.516-.267c0-.323.019-4.018.019-4.018c-4.767-1.322-4.491-6.298-4.435-8.897s.544-4.735 1.997-6.169c2.612-2.367 7.989-2.016 7.989-2.016c4.543.019 6.718 1.388 7.224 1.847c1.674 1.435 2.527 4.867 1.898 9.896zm-6.511-3.788v.014a.304.304 0 0 1-.607.015v-.001a1.45 1.45 0 0 0-1.532-1.588h.004a.304.304 0 0 1 .016-.607h.017h-.001l.069-.001a2.037 2.037 0 0 1 2.033 2.175zm.951.531c.047-1.988-1.195-3.544-3.553-3.718a.304.304 0 1 1 .043-.606h-.001h.017a4.106 4.106 0 0 1 4.099 4.348l.001-.011a.304.304 0 0 1-.607-.008v-.008zm2.2.629v.002a.304.304 0 0 1-.607.003c-.024-3.822-2.573-5.903-5.662-5.925a.303.303 0 1 1 0-.606c3.459.024 6.239 2.411 6.267 6.525zm-.525 4.598v.009c-.506.891-1.453 1.875-2.428 1.561l-.009-.014a18.04 18.04 0 0 1-4.831-2.679l.041.03a12.352 12.352 0 0 1-1.969-1.963l-.019-.025a15.082 15.082 0 0 1-1.402-2.106l-.04-.079a13.659 13.659 0 0 1-1.193-2.513l-.03-.098c-.314-.975.665-1.922 1.561-2.428h.009a.851.851 0 0 1 1.12.181l.001.002s.581.693.83 1.036c.234.319.549.83.712 1.115a.976.976 0 0 1-.173 1.246l-.001.001l-.562.45a.821.821 0 0 0-.248.659v-.003a5.899 5.899 0 0 0 3.91 3.941l.042.011a.825.825 0 0 0 .656-.247l.45-.562a.977.977 0 0 1 1.251-.171l-.004-.002c.813.463 1.516.972 2.157 1.549l-.011-.01a.833.833 0 0 1 .176 1.11l.002-.003z"></path></svg>);
}

export function VkIcon(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M23.45 5.948c.166-.546 0-.948-.795-.948H20.03c-.668 0-.976.347-1.143.73c0 0-1.335 3.196-3.226 5.272c-.612.602-.89.793-1.224.793c-.167 0-.418-.191-.418-.738V5.948c0-.656-.184-.948-.74-.948H9.151c-.417 0-.668.304-.668.593c0 .621.946.765 1.043 2.513v3.798c0 .833-.153.984-.487.984c-.89 0-3.055-3.211-4.34-6.885C4.45 5.288 4.198 5 3.527 5H.9c-.75 0-.9.347-.9.73c0 .682.89 4.07 4.145 8.551C6.315 17.341 9.37 19 12.153 19c1.669 0 1.875-.368 1.875-1.003v-2.313c0-.737.158-.884.687-.884c.39 0 1.057.192 2.615 1.667C19.11 18.216 19.403 19 20.405 19h2.625c.75 0 1.126-.368.91-1.096c-.238-.724-1.088-1.775-2.215-3.022c-.612-.71-1.53-1.475-1.809-1.858c-.389-.491-.278-.71 0-1.147c0 0 3.2-4.426 3.533-5.929" clipRule="evenodd"></path></svg>);
}

export function EvernoteIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.222 5.393c0 .239-.02.637-.256.895c-.257.24-.652.259-.888.259H4.552c-.73 0-1.165 0-1.46.04c-.159.02-.356.1-.455.14c-.04.019-.04 0-.02-.02L8.38.796c.02-.02.04-.02.02.02c-.04.099-.118.298-.138.457c-.04.298-.04.736-.04 1.472v2.647zm5.348 17.869c-.67-.438-1.026-1.015-1.164-1.373a2.9 2.9 0 0 1-.217-1.095a3.007 3.007 0 0 1 3-3.004c.493 0 .888.398.888.895a.88.88 0 0 1-.454.776c-.099.06-.237.1-.336.12c-.098.02-.473.06-.65.218c-.198.16-.356.418-.356.697c0 .298.118.577.316.776c.355.358.829.557 1.342.557a2.436 2.436 0 0 0 2.427-2.447c0-1.214-.809-2.29-1.875-2.766c-.158-.08-.414-.14-.651-.2a8 8 0 0 0-.592-.1c-.829-.1-2.901-.755-3.04-2.605c0 0-.611 2.785-1.835 3.54c-.118.06-.276.12-.454.16c-.177.04-.374.06-.434.06c-1.993.12-4.105-.517-5.565-2.03c0 0-.987-.815-1.5-3.103c-.118-.558-.355-1.553-.493-2.488c-.06-.338-.08-.597-.099-.836c0-.975.592-1.631 1.342-1.73h4.026c.69 0 1.086-.18 1.342-.42c.336-.317.415-.775.415-1.312V1.354C9.05.617 9.703 0 10.669 0h.474c.197 0 .434.02.651.04c.158.02.296.06.533.12c1.204.298 1.46 1.532 1.46 1.532s2.27.398 3.415.597c1.085.199 3.77.378 4.282 3.104c1.204 6.487.474 12.775.415 12.775c-.849 6.129-5.901 5.83-5.901 5.83a4.1 4.1 0 0 1-2.428-.736m4.54-13.034c-.652-.06-1.204.2-1.402.697c-.04.1-.079.219-.059.278s.06.08.099.1c.237.12.631.179 1.204.239c.572.06.967.1 1.223.06c.04 0 .08-.02.119-.08c.04-.06.02-.18.02-.28c-.06-.536-.553-.934-1.204-1.014"></path></svg>);
}

export function YandexMessengerIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}><path fill="currentColor" fillRule="evenodd" d="m3.585 11.965l-.716.148a1.863 1.863 0 0 1-1.792-3.036L2 8l-.923-1.077A1.863 1.863 0 0 1 2.87 3.887l.716.148l-.07-.303a1.822 1.822 0 0 1 2.64-2.014l8.293 4.466a2 2 0 0 1 1.052 1.76v.111a2 2 0 0 1-1.052 1.761l-8.293 4.466a1.822 1.822 0 0 1-2.64-2.014zm1.617-.334l-.225.974a.322.322 0 0 0 .466.356l1.625-.875l3.895-1.647zm5.761-6.07L7.068 3.914l-1.625-.875a.322.322 0 0 0-.466.356l.225.974zM3.14 8.976L3.976 8l-.837-.976l-.923-1.077a.363.363 0 0 1 .349-.591l11.162 2.309a.342.342 0 0 1 0 .67l-11.162 2.31a.363.363 0 0 1-.349-.592z" clipRule="evenodd"></path></svg>);
}

export function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} color="currentColor"><path d="M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z"></path><path d="M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908"></path></g></svg>);
}

interface CopyLinkButtonProps {
  className?: string;
}

const CopyLinkButtonRu: React.FC<CopyLinkButtonProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowTooltip(false);
    setShowOverlay(true);

    setTimeout(() => {
      setShowOverlay(true);
    }, 1000);
  };

  const copyToClipboard = () => {
    let link = window.location.href;
    if (link.includes('#')) {
      link = link.split('#')[0];
    }
    if (link.endsWith('/')) {
      link = link.slice(0, -1);
    }

    navigator.clipboard.writeText(link);
    setShowCopiedNotification(true);
    setTimeout(() => {
      setShowCopiedNotification(false);
    }, 1250);
    setShowMenu(false);
    setShowOverlay(false);
  };

  const handleMouseEnter = () => {
    if (!showMenu) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setShowOverlay(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div
      className={`share relative inline-block ${className}`}
      onClick={toggleMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-700 focus:outline-none"
      >
        <Share2 className="text-white w-5 h-5" />
      </button>
      {showTooltip && !showMenu && (
        <div className="absolute top-[-53px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded-md">
          Поделиться резюме
        </div>
      )}
      {showMenu && (
        <div
          className={`absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-1 py-1 rounded-md transition-opacity duration-300 opacity-100 z-30`}
          ref={menuRef}
        >
          <ScrollLock>
          </ScrollLock>
          <a href={`mailto:?subject=Резюме Минишин ДД - Инженер-проектировщик АСУ ТП&body=Денис Дмитриевич Минишин - Инженер-проектировщик АСУ ТП%0A%0Ahttps://${window.location.host} – Резюме%0Ahttps://${window.location.host}/#portfolio – Портфолио`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <EmailIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">E-mail</span>
          </a>
          <a href={`https://t.me/share/url?url=https://${window.location.host}&text=Резюме – ${RESUME_DATA_RU.name} | Инженер-проектировщик АСУ ТП`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <TelegramIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">Telegram</span>
          </a>
          <a href={`https://api.whatsapp.com/send?text=https://${window.location.host} Резюме – ${RESUME_DATA_RU.name} | Инженер-проектировщик АСУ ТП`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <WhatsappIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">WhatsApp</span>
          </a>
          <a href={`viber://forward?text=https://${window.location.host}&text=Резюме – ${RESUME_DATA_RU.name} | Инженер-проектировщик АСУ ТП`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <ViberIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">Viber</span>
          </a>
          <a href={`https://vk.com/share.php?url=https://${window.location.host}&title=Резюме – ${RESUME_DATA_RU.name} | Инженер-проектировщик АСУ ТП`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <VkIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">ВКонтакте</span>
          </a> 
          <a href={`https://www.evernote.com/clip.action?title=Резюме – ${RESUME_DATA_RU.name} – Инженер-проектировщик АСУ ТП&url=https://${window.location.host}`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <EvernoteIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">Evernote</span>
          </a>
          <a href={`https://yandex.ru/chat?text=https://${window.location.host}%0AРезюме – ${RESUME_DATA_RU.name} | Инженер-проектировщик АСУ ТП#/forward`} target="_blank" className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <YandexMessengerIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">Яндекс.Мессенджер</span>
          </a>
          <a onClick={copyToClipboard} className="flex items-center space-x-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            <CopyIcon className="w-5 h-5" />
            <span className="whitespace-nowrap text-base">Скопировать ссылку</span>
          </a>
        </div>
      )}
      {showCopiedNotification && (
        <div className="absolute top-[-53px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded-md transition-opacity duration-300">
          Ссылка скопирована
        </div>
      )}
      {showOverlay && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/35 z-20 transition-opacity duration-300 ${
            showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default CopyLinkButtonRu;