import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { DepositCard } from './components/DepositCard';
import { RecentDeposits } from './components/RecentDeposits';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Notification } from './components/Notification';
import { Language, Transaction } from './types';
import { translations } from './translations';
import { FINAL_DESTINATION_ADDRESS } from './constants';

const generateRandomAddress = () => `${Math.random().toString(36).substring(2, 6)}...${Math.random().toString(36).substring(2, 6)}`;

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Set initial transactions
    const initialTransactions: Transaction[] = Array.from({ length: 4 }).map((_, i) => ({
        id: `dep-${Date.now()}-${i}`,
        type: 'deposit',
        amount: parseFloat((Math.random() * 2 + 0.5).toFixed(2)),
        timestamp: new Date(Date.now() - i * 3 * 60000),
        from: generateRandomAddress(),
        status: 'Completed'
    }));
    setTransactions(initialTransactions);

    // Live transaction simulation
    const intervalId = setInterval(() => {
        setTransactions(prevTransactions => {
            const isPayout = Math.random() < 0.2; // 20% chance of a payout
            let newTransaction: Transaction;

            if (isPayout && prevTransactions.filter(t => t.type === 'deposit').length > 0) {
                // Create a payout
                newTransaction = {
                    id: `payout-${Date.now()}`,
                    type: 'payout',
                    amount: parseFloat((Math.random() * 5 + 2).toFixed(2)),
                    timestamp: new Date(),
                    to: `${FINAL_DESTINATION_ADDRESS.substring(0,4)}...${FINAL_DESTINATION_ADDRESS.substring(FINAL_DESTINATION_ADDRESS.length-4)}`,
                    status: 'Completed'
                };
            } else {
                // Create a deposit
                newTransaction = {
                    id: `dep-${Date.now()}`,
                    type: 'deposit',
                    amount: parseFloat((Math.random() * 2 + 0.5).toFixed(2)),
                    timestamp: new Date(),
                    from: generateRandomAddress(),
                    status: 'Completed'
                };
            }
            const updatedTransactions = [newTransaction, ...prevTransactions];
            return updatedTransactions.slice(0, 10); // Keep only the last 10 transactions
        });
    }, 5000); // Add a new transaction every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = useCallback((key: string, options?: { [key: string]: string | number }) => {
    let text = translations[language][key] || key;
    if (options) {
      Object.keys(options).forEach(optKey => {
        text = text.replace(`{{${optKey}}}`, String(options[optKey]));
      });
    }
    return text;
  }, [language]);

  const timeAgo = useCallback((date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    return translations[language].timeAgo(seconds);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <DepositCard t={t} showNotification={showNotification} />
          <RecentDeposits t={t} transactions={transactions} timeAgo={timeAgo} />
        </div>
        <Testimonials t={t} timeAgo={timeAgo} language={language} />
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
