import React from 'react';
import { CheckCircleIcon, InfoCircleIcon } from './icons';

interface NotificationProps {
  message: string;
  type: 'success' | 'info';
  onClose: () => void;
  isRTL: boolean;
}

const notificationStyles = {
  success: {
    bg: 'bg-green-500/90',
    icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
  },
  info: {
    bg: 'bg-blue-500/90',
    icon: <InfoCircleIcon className="w-6 h-6 text-white" />,
  },
};

export const Notification: React.FC<NotificationProps> = ({ message, type, onClose, isRTL }) => {
  const styles = notificationStyles[type];
  const positionClass = isRTL ? 'left-5' : 'right-5';
  const animationClass = isRTL ? 'animate-slide-in-rtl' : 'animate-slide-in-ltr';

  return (
    <div
      className={`fixed top-5 ${positionClass} z-50 flex items-center gap-4 p-4 rounded-lg text-white shadow-lg ${styles.bg} backdrop-blur-sm ${animationClass}`}
    >
      {styles.icon}
      <p className="font-semibold">{message}</p>
      <button onClick={onClose} className="ltr:ml-4 rtl:mr-4 text-white hover:opacity-75">&times;</button>
      <style>{`
        @keyframes slide-in-ltr {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-rtl {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-ltr { animation: slide-in-ltr 0.3s ease-out forwards; }
        .animate-slide-in-rtl { animation: slide-in-rtl 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};
