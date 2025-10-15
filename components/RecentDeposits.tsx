import React from 'react';
import { Transaction } from '../types';
import { SolanaCoinIcon, ArrowDownLeftIcon, ArrowUpRightIcon } from './icons';

interface RecentDepositsProps {
  t: (key: string) => string;
  transactions: Transaction[];
}

const TransactionRow: React.FC<{ tx: Transaction, t: (key: string) => string }> = ({ tx, t }) => {
  const isDeposit = tx.type === 'deposit';
  const Icon = isDeposit ? ArrowDownLeftIcon : ArrowUpRightIcon;
  const iconColor = isDeposit ? 'text-green-400' : 'text-blue-400';
  const title = isDeposit ? t('deposit') : t('payout');
  
  const shortAddress = (addr: string) => `${addr.substring(0, 4)}...${addr.substring(addr.length - 4)}`;

  return (
    <div className="bg-gray-900/50 p-3 rounded-md flex justify-between items-center transition-all duration-500 animate-slide-down">
      <div className="flex items-center gap-4">
        <div className={`p-2 bg-gray-800 rounded-full`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-white font-semibold">{title}</p>
          <p className="text-xs text-gray-400 font-mono">
            {isDeposit ? `From: ${tx.from}` : `To: ${shortAddress(tx.to)}`}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white font-semibold flex items-center justify-end gap-1.5">
          {tx.amount.toFixed(2)} SOL <SolanaCoinIcon className="w-4 h-4" />
        </p>
        <p className="text-xs text-gray-500">
          {new Date(tx.timestamp).toLocaleTimeString()}
        </p>
      </div>
      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export const RecentDeposits: React.FC<RecentDepositsProps> = ({ t, transactions }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl w-full border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">{t('liveTransactionsTitle')}</h3>
      <div className="space-y-3 h-[400px] overflow-y-auto pr-2">
        {transactions.length > 0 ? (
          transactions.map((tx) => <TransactionRow key={tx.id} tx={tx} t={t} />)
        ) : (
          <p className="text-gray-500 text-center py-10">{t('waitingForTransactions')}</p>
        )}
      </div>
    </div>
  );
};
