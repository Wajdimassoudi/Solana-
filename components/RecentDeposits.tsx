import React from 'react';
import { Transaction } from '../types';
import { SolanaCoinIcon, ArrowDownLeftIcon, ArrowUpRightIcon } from './icons';

interface RecentDepositsProps {
  t: (key: string) => string;
  transactions: Transaction[];
  timeAgo: (date: Date) => string;
}

const getStatusClass = (status: Transaction['status']) => {
  switch (status) {
    case 'Completed':
      return 'text-green-400';
    case 'Pending':
      return 'text-yellow-400';
    case 'Failed':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
};

export const RecentDeposits: React.FC<RecentDepositsProps> = ({ t, transactions, timeAgo }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl w-full max-w-md mx-auto border border-gray-700 mt-10 lg:mt-0">
      <h3 className="text-xl font-bold text-white mb-6 text-center">{t('liveTransactionsTitle')}</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-gray-900 p-3 rounded-md flex justify-between items-center transition-shadow hover:shadow-lg animate-fade-in-down">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${tx.type === 'deposit' ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                {tx.type === 'deposit' ? 
                  <ArrowDownLeftIcon className="w-5 h-5 text-green-400" /> :
                  <ArrowUpRightIcon className="w-5 h-5 text-blue-400" />
                }
              </div>
              <div>
                <p className="text-white font-semibold">{tx.type === 'deposit' ? t('depositReceived') : t('payoutSent')}</p>
                <p className="text-xs text-gray-400">
                  {tx.type === 'deposit' ? `${t('from')}: ${tx.from}` : `${t('to')}: ${tx.to}`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold flex items-center justify-end gap-1.5 ${tx.type === 'payout' ? 'text-blue-400' : 'text-green-400'}`}>
                {tx.type === 'deposit' ? '+' : '-'}{tx.amount.toFixed(2)} SOL <SolanaCoinIcon className="w-4 h-4" />
              </p>
              <p className={`text-xs font-medium text-gray-500`}>{timeAgo(tx.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
       <style>{`
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default RecentDeposits;
