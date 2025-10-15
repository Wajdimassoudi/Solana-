import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { DEPOSIT_ADDRESS } from '../constants';
import { CopyIcon, CheckIcon, QRIcon, ClockIcon } from './icons';

interface DepositCardProps {
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
  showNotification: (message: string, type: 'success' | 'info') => void;
}

export const DepositCard: React.FC<DepositCardProps> = ({ t, showNotification }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DEPOSIT_ADDRESS);
      setIsCopied(true);
      showNotification(t('copySuccess'), 'success');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      showNotification(t('copyError'), 'info');
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 sm:p-8 shadow-xl w-full max-w-md mx-auto border border-purple-600/50 sticky top-24">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">{t('depositCardTitle')}</h2>
        <p className="text-purple-400 font-semibold mt-1">{t('depositCardSubtitle')}</p>
      </div>
      
      <div className="bg-yellow-400/10 border border-yellow-500 text-yellow-300 text-center p-3 rounded-lg mb-6">
        <p className="font-bold text-sm">{t('specialEvent')}</p>
        <div className="flex items-center justify-center gap-2 mt-2 font-mono text-lg">
          <ClockIcon className="w-5 h-5" />
          <span>{t('endsIn')}: {formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="bg-gray-900 p-4 rounded-md">
        <label htmlFor="deposit-address" className="text-sm text-gray-400">{t('depositAddressLabel')}</label>
        <div className="flex items-center justify-between mt-1">
          <p id="deposit-address" className="text-white font-mono break-all text-sm ltr:pr-2 rtl:pl-2">{DEPOSIT_ADDRESS}</p>
          <button 
            onClick={handleCopy} 
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700 flex-shrink-0"
            aria-label="Copy deposit address"
          >
            {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
       <p className="text-center text-xs text-gray-400 mt-4">{t('minDeposit', { amount: 0.5 })}</p>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <QRIcon className="w-5 h-5" />
          {showQR ? t('hideQRCode') : t('showQRCode')}
        </button>
      </div>
      {showQR && (
        <div className="mt-6 p-4 bg-white rounded-lg flex justify-center transition-all duration-300 ease-in-out animate-fade-in">
          <QRCode value={DEPOSIT_ADDRESS} size={160} bgColor="#FFFFFF" fgColor="#000000" />
        </div>
      )}
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};
