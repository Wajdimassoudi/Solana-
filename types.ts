export type TransactionType = 'deposit' | 'payout';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  timestamp: Date;
  status: 'Pending' | 'Completed' | 'Failed';
  from?: string; // Optional: for deposits
  to?: string;   // Optional: for payouts
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  timestamp?: Date; // For dynamic testimonials
}

export type Language = 'en' | 'es' | 'fr' | 'ar';

export interface Translations {
  [key: string]: {
    [key: string]: any;
    timeAgo: (seconds: number) => string;
    testimonials: Testimonial[];
  };
}
