import React from 'react';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6 mt-12">
      <p>{t('footerText')}</p>
    </footer>
  );
};

export default Footer;
