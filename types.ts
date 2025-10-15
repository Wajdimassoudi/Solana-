export interface Transaction {
  id: string;
  type: 'deposit' | 'payout';
  amount: number;
  timestamp: Date;
  from: string;
  to: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  timestamp: Date;
}

export type Language = 'en' | 'es' | 'fr' | 'ar';

export interface TranslationSet {
  [key: string]: string;
}

export interface LanguageTranslations {
  [key: string]: any; // Allow for functions and arrays
  headerTitle: string;
  headerSubtitle: string;
  depositCardTitle: string;
  depositCardSubtitle: string;
  specialEvent: string;
  endsIn: string;
  depositAddressLabel: string;
  minDeposit: string;
  copySuccess: string;
  copyError: string;
  showQRCode: string;
  hideQRCode: string;
  liveTransactionsTitle: string;
  testimonialsTitle: string;
  footerText: string;
  deposit: string;
  payout: string;
  testimonials: { name: string; quote: string }[];
  timeAgo: (seconds: number) => string;
}

export interface Translations {
  en: LanguageTranslations;
  es: LanguageTranslations;
  fr: LanguageTranslations;
  ar: LanguageTranslations;
}
