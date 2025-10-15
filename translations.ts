import { Translations } from './types';

const timeAgo = {
  en: (seconds: number) => {
    if (seconds < 5) return 'now';
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  },
  es: (seconds: number) => {
    if (seconds < 5) return 'ahora';
    if (seconds < 60) return `hace ${seconds}s`;
    if (seconds < 3600) return `hace ${Math.floor(seconds / 60)}m`;
    return `hace ${Math.floor(seconds / 3600)}h`;
  },
  fr: (seconds: number) => {
    if (seconds < 5) return 'maintenant';
    if (seconds < 60) return `il y a ${seconds}s`;
    if (seconds < 3600) return `il y a ${Math.floor(seconds / 60)}m`;
    return `il y a ${Math.floor(seconds / 3600)}h`;
  },
  ar: (seconds: number) => {
    if (seconds < 5) return 'الآن';
    if (seconds < 60) return `منذ ${seconds} ثانية`;
    if (seconds < 3600) return `منذ ${Math.floor(seconds / 60)} دقيقة`;
    return `منذ ${Math.floor(seconds / 3600)} ساعة`;
  },
};

const testimonials = {
  en: [
    { name: 'CryptoKing_82', quote: 'Doubled my SOL in less than a day! This is unreal. Highly recommend jumping in on this event.' },
    { name: 'SolanaQueen', quote: 'Was skeptical at first, but it actually worked. The 2x payout was sent right back to my wallet. Amazing!' },
    { name: 'DeFi_Dan', quote: 'The live transaction feed is awesome, you can see everything happening in real-time. So transparent!' },
    { name: 'FutureIsCrypto', quote: 'Easiest way to multiply your SOL holdings. The countdown timer got me, FOMO is real! Glad I participated.' },
    { name: 'WhaleWatcher', quote: 'Saw some big transactions go through and decided to try. Glad I did! The platform is smooth and fast.' },
    { name: 'NFT_Goddess', quote: 'This is the opportunity I was waiting for. Simple, fast, and the 2x return is just incredible. Don\'t miss out!' },
  ],
  es: [
    { name: 'ReyCripto_82', quote: '¡Dupliqué mi SOL en menos de un día! Esto es increíble. Recomiendo totalmente participar en este evento.' },
    { name: 'ReinaSolana', quote: 'Al principio era escéptica, pero realmente funcionó. El pago 2x fue enviado de vuelta a mi billetera. ¡Increíble!' },
    { name: 'DeFi_Dani', quote: 'El feed de transacciones en vivo es genial, puedes ver todo en tiempo real. ¡Muy transparente!' },
    { name: 'FuturoEsCripto', quote: 'La forma más fácil de multiplicar tus SOL. El temporizador me convenció, ¡el FOMO es real! Feliz de haber participado.' },
    { name: 'VigilanteDeBallenas', quote: 'Vi algunas transacciones grandes y decidí probar. ¡Me alegro de haberlo hecho! La plataforma es fluida y rápida.' },
    { name: 'Diosa_NFT', quote: 'Esta es la oportunidad que estaba esperando. Simple, rápido y el retorno 2x es simplemente increíble. ¡No se lo pierdan!' },
  ],
  fr: [
    { name: 'RoiCrypto_82', quote: 'J\'ai doublé mes SOL en moins d\'une journée ! C\'est irréel. Je recommande vivement de participer à cet événement.' },
    { name: 'ReineSolana', quote: 'J\'étais sceptique au début, mais ça a vraiment marché. Le paiement 2x a été renvoyé directement dans mon portefeuille. Incroyable !' },
    { name: 'DeFi_Daniel', quote: 'Le flux de transactions en direct est génial, on peut tout voir en temps réel. Tellement transparent !' },
    { name: 'LeFuturEstCrypto', quote: 'Le moyen le plus simple de multiplier vos avoirs en SOL. Le compte à rebours m\'a eu, le FOMO est réel ! Heureux d\'avoir participé.' },
    { name: 'ObservateurDeBaleines', quote: 'J\'ai vu de grosses transactions et j\'ai décidé d\'essayer. Content de l\'avoir fait ! La plateforme est fluide et rapide.' },
    { name: 'Déesse_NFT', quote: 'C\'est l\'opportunité que j\'attendais. Simple, rapide, et le retour 2x est tout simplement incroyable. Ne manquez pas ça !' },
  ],
  ar: [
    { name: 'ملك_الكريبتو', quote: 'ضاعفت رصيدي من سولانا في أقل من يوم! هذا شيء لا يصدق. أنصح بشدة بالمشاركة في هذا الحدث.' },
    { name: 'ملكة_سولانا', quote: 'كنت متشككة في البداية، لكن الأمر نجح بالفعل. تم إرسال ضعف المبلغ مباشرة إلى محفظتي. مذهل!' },
    { name: 'خبير_اللامركزية', quote: 'ميزة المعاملات المباشرة رائعة، يمكنك رؤية كل شيء يحدث في الوقت الفعلي. شفافية كاملة!' },
    { name: 'المستقبل_كريبتو', quote: 'أسهل طريقة لمضاعفة ما تملكه من SOL. العد التنازلي أثار حماسي، الخوف من فوات الفرصة حقيقي! سعيد بمشاركتي.' },
    { name: 'مراقب_الحيتان', quote: 'رأيت بعض المعاملات الكبيرة وقررت أن أجرب. سعيد لأنني فعلت ذلك! المنصة سلسة وسريعة.' },
    { name: 'سيدة_الرموز', quote: 'هذه هي الفرصة التي كنت أنتظرها. بسيطة وسريعة، ومضاعفة الرصيد أمر لا يصدق. لا تفوتوا الفرصة!' },
  ]
};


export const translations: Translations = {
  en: {
    headerTitle: 'Solana Win',
    headerSubtitle: '2x SOL Special Event',
    depositCardTitle: 'Deposit SOL to Win',
    depositCardSubtitle: 'Send SOL, Get 2x Back!',
    specialEvent: 'SPECIAL 2X EVENT IS LIVE',
    endsIn: 'Ends in',
    depositAddressLabel: 'Special Event Deposit Address',
    minDeposit: 'Minimum deposit: {{amount}} SOL',
    copySuccess: 'Address copied to clipboard!',
    copyError: 'Failed to copy address.',
    showQRCode: 'Show QR Code',
    hideQRCode: 'Hide QR Code',
    liveTransactionsTitle: 'Live Transactions',
    testimonialsTitle: 'What Our Winners Say',
    footerText: '© 2024 Solana Win. All rights reserved.',
    deposit: 'Deposit',
    payout: '2x Payout',
    waitingForTransactions: 'Waiting for new transactions...',
    testimonials: testimonials.en,
    timeAgo: timeAgo.en,
  },
  es: {
    headerTitle: 'Solana Win',
    headerSubtitle: 'Evento Especial 2x SOL',
    depositCardTitle: 'Deposita SOL para Ganar',
    depositCardSubtitle: '¡Envía SOL, Recibe 2x de Vuelta!',
    specialEvent: 'EVENTO ESPECIAL 2X EN VIVO',
    endsIn: 'Termina en',
    depositAddressLabel: 'Dirección de Depósito del Evento Especial',
    minDeposit: 'Depósito mínimo: {{amount}} SOL',
    copySuccess: '¡Dirección copiada al portapapeles!',
    copyError: 'Error al copiar la dirección.',
    showQRCode: 'Mostrar Código QR',
    hideQRCode: 'Ocultar Código QR',
    liveTransactionsTitle: 'Transacciones en Vivo',
    testimonialsTitle: 'Lo que dicen nuestros ganadores',
    footerText: '© 2024 Solana Win. Todos los derechos reservados.',
    deposit: 'Depósito',
    payout: 'Pago 2x',
    waitingForTransactions: 'Esperando nuevas transacciones...',
    testimonials: testimonials.es,
    timeAgo: timeAgo.es,
  },
  fr: {
    headerTitle: 'Solana Win',
    headerSubtitle: 'Événement Spécial 2x SOL',
    depositCardTitle: 'Déposez des SOL pour Gagner',
    depositCardSubtitle: 'Envoyez des SOL, Recevez 2x en Retour !',
    specialEvent: 'ÉVÉNEMENT SPÉCIAL 2X EN DIRECT',
    endsIn: 'Se termine dans',
    depositAddressLabel: 'Adresse de Dépôt de l\'Événement Spécial',
    minDeposit: 'Dépôt minimum : {{amount}} SOL',
    copySuccess: 'Adresse copiée dans le presse-papiers !',
    copyError: 'Échec de la copie de l\'adresse.',
    showQRCode: 'Afficher le Code QR',
    hideQRCode: 'Masquer le Code QR',
    liveTransactionsTitle: 'Transactions en Direct',
    testimonialsTitle: 'Ce que disent nos gagnants',
    footerText: '© 2024 Solana Win. Tous droits réservés.',
    deposit: 'Dépôt',
    payout: 'Paiement 2x',
    waitingForTransactions: 'En attente de nouvelles transactions...',
    testimonials: testimonials.fr,
    timeAgo: timeAgo.fr,
  },
  ar: {
    headerTitle: 'Solana Win',
    headerSubtitle: 'عرض خاص لمضاعفة SOL',
    depositCardTitle: 'أودع SOL لتفوز',
    depositCardSubtitle: 'أرسل SOL، واحصل على ضعف المبلغ!',
    specialEvent: 'عرض المضاعفة الخاص مباشر الآن',
    endsIn: 'ينتهي خلال',
    depositAddressLabel: 'عنوان الإيداع الخاص بالعرض',
    minDeposit: 'الحد الأدنى للإيداع: {{amount}} SOL',
    copySuccess: 'تم نسخ العنوان إلى الحافظة!',
    copyError: 'فشل نسخ العنوان.',
    showQRCode: 'إظهار رمز QR',
    hideQRCode: 'إخفاء رمز QR',
    liveTransactionsTitle: 'المعاملات المباشرة',
    testimonialsTitle: 'ماذا يقول فائزونا',
    footerText: '© 2024 Solana Win. جميع الحقوق محفوظة.',
    deposit: 'إيداع',
    payout: 'ربح 2x',
    waitingForTransactions: 'في انتظار المعاملات الجديدة...',
    testimonials: testimonials.ar,
    timeAgo: timeAgo.ar,
  }
};
