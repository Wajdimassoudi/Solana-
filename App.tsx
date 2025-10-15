import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { DepositCard } from './components/DepositCard';
import { RecentDeposits } from './components/RecentDeposits';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Notification } from './components/Notification';
import { Language, Transaction } from './types';
import { translations } from './translations';
import { DEPOSIT_ADDRESS } from './constants';

const generateRandomAddress = () => `${Math.random().toString(36).substring(2, 6)}...${Math.random().toString(36).substring(2, 6)}`;

function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isDeposit = Math.random() > 0.3; // 70% chance of deposit
      const amount = parseFloat((Math.random() * (5 - 0.5) + 0.5).toFixed(2));
      
      let newTransaction: Transaction;

      if (isDeposit) {
        newTransaction = {
          id: Date.now().toString() + Math.random(),
          type: 'deposit',
          amount: amount,
          timestamp: new Date(),
          from: generateRandomAddress(),
          to: DEPOSIT_ADDRESS,
        };
      } else {
        // Find a recent deposit to "payout"
        const recentDeposit = transactions.find(t => t.type === 'deposit');
        newTransaction = {
          id: Date.now().toString() + Math.random(),
          type: 'payout',
          amount: (recentDeposit ? recentDeposit.amount : amount) * 2,
          timestamp: new Date(),
          from: DEPOSIT_ADDRESS,
          to: recentDeposit ? recentDeposit.from : generateRandomAddress(),
        };
      }

      setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]);
    }, 4000); // Add a new transaction every 4 seconds

    return () => clearInterval(interval);
  }, [transactions]);


  const t = useCallback((key: string, replacements?: { [key: string]: string | number }) => {
    let translation = translations[language][key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(rKey => {
        translation = translation.replace(`{{${rKey}}}`, String(replacements[rKey]));
      });
    }
    return translation;
  }, [language]);

  const showNotification = useCallback((message: string, type: 'success' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }, []);

  return (
    <div className={`bg-gray-900 min-h-screen text-gray-200 font-sans ${language === 'ar' ? 'font-tajawal' : ''}`}>
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main className="container mx-auto p-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <DepositCard t={t} showNotification={showNotification} />
          </div>
          <div className="lg:col-span-3">
            <RecentDeposits t={t} transactions={transactions} />
          </div>
        </div>
        <Testimonials t={t} language={language} />
      </main>
      <Footer t={t} />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
          isRTL={language === 'ar'}
        />
      )}
    </div>
  );
}

export default App;
