import React from 'react';
import { SolanaLogoIcon } from './icons';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 text-white p-4 shadow-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <SolanaLogoIcon className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">{t('headerTitle')}</h1>
            <p className="text-xs text-purple-400 font-semibold">{t('headerSubtitle')}</p>
          </div>
        </div>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
    </header>
  );
};

export default Header;
