import React, { useState, useEffect } from 'react';
import { Testimonial, Language } from '../types';
import { UserCircleIcon } from './icons';
import { translations } from '../translations';

interface TestimonialsProps {
  t: (key: string) => string;
  timeAgo: (date: Date) => string;
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t, timeAgo, language }) => {
  const [liveTestimonials, setLiveTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const initialTestimonials = translations[language].testimonials.slice(0, 5).map(t => ({
      ...t,
      timestamp: new Date(Date.now() - Math.random() * 600000) // 0-10 mins ago
    }));
    setLiveTestimonials(initialTestimonials);

    const intervalId = setInterval(() => {
      setLiveTestimonials(prev => {
        const existingQuotes = prev.map(p => p.quote);
        const availableTestimonials = translations[language].testimonials.filter(t => !existingQuotes.includes(t.quote));
        const pool = availableTestimonials.length > 0 ? availableTestimonials : translations[language].testimonials;
        const newTestimonial = pool[Math.floor(Math.random() * pool.length)];
        
        const updatedList = [{ ...newTestimonial, timestamp: new Date() }, ...prev];
        return updatedList.slice(0, 7); // Keep the list size manageable
      });
    }, 6000); // Add a new testimonial every 6 seconds

    return () => clearInterval(intervalId);
  }, [language]);

  // This effect will re-render the component every 5 seconds to update the "time ago" string
  const [, setTick] = useState(0);
  useEffect(() => {
      const timerId = setInterval(() => setTick(tick => tick + 1), 5000);
      return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <h3 className="text-3xl font-bold text-white text-center mb-8">{t('testimonialsTitle')}</h3>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.quote}-${index}`} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center">
                  <UserCircleIcon className="w-10 h-10 text-gray-500 ltr:mr-3 rtl:ml-3" />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                {testimonial.timestamp && (
                  <p className="text-xs text-gray-500">{timeAgo(testimonial.timestamp)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 -inset-x-4 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 -inset-x-4 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Testimonials;
