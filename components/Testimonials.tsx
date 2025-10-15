import React, { useState, useEffect } from 'react';
import { Testimonial, Language } from '../types';
import { UserCircleIcon } from './icons';
import { translations } from '../translations';

interface TestimonialsProps {
  t: (key: string) => string;
  language: Language;
}

const useLiveTestimonials = (language: Language, interval: number) => {
  const [liveTestimonials, setLiveTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Initial population
    const initialPool = translations[language].testimonials;
    setLiveTestimonials(
      initialPool.slice(0, 3).map(t => ({ ...t, timestamp: new Date(Date.now() - Math.random() * 600000) }))
    );

    const timer = setInterval(() => {
      setLiveTestimonials(prev => {
        const pool = translations[language].testimonials;
        const existingNames = prev.map(p => p.name);
        const availableTestimonials = pool.filter(p => !existingNames.includes(p.name));
        const newTestimonial = availableTestimonials.length > 0 
          ? availableTestimonials[Math.floor(Math.random() * availableTestimonials.length)]
          : pool[Math.floor(Math.random() * pool.length)];

        const updatedTestimonial: Testimonial = {
          ...newTestimonial,
          timestamp: new Date(),
        };
        
        return [updatedTestimonial, ...prev].slice(0, 5);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [language, interval]);
  
  return liveTestimonials;
};


const TestimonialCard: React.FC<{ testimonial: Testimonial, timeAgo: string }> = ({ testimonial, timeAgo }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col animate-fade-in">
      <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-center">
          <UserCircleIcon className="w-10 h-10 text-gray-500 ltr:mr-4 rtl:ml-4" />
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
          </div>
        </div>
        <p className="text-xs text-gray-400">{timeAgo}</p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
      `}</style>
    </div>
  );
};


export const Testimonials: React.FC<TestimonialsProps> = ({ t, language }) => {
  const liveTestimonials = useLiveTestimonials(language, 7000); // New testimonial every 7 seconds
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
  }, []);

  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((currentTime.getTime() - timestamp.getTime()) / 1000);
    return translations[language].timeAgo(seconds);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <h3 className="text-3xl font-bold text-white text-center mb-8">{t('testimonialsTitle')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {liveTestimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.name + testimonial.timestamp.toISOString()} 
            testimonial={testimonial} 
            timeAgo={getTimeAgo(testimonial.timestamp)} 
          />
        ))}
      </div>
    </div>
  );
};
