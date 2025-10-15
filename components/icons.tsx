import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement>;

export const SolanaLogoIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_3_5)">
      <rect width="400" height="400" rx="40" fill="url(#paint0_linear_3_5)"/>
      <path d="M75 262L159.23 204.5L75 147" stroke="url(#paint1_linear_3_5)" strokeWidth="30"/>
      <path d="M325 138L240.77 195.5L325 253" stroke="url(#paint2_linear_3_5)" strokeWidth="30"/>
      <path d="M141.5 325L258.5 75" stroke="url(#paint3_linear_3_5)" strokeWidth="30"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_3_5" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#191919"/>
        <stop offset="1" stopColor="#000000"/>
      </linearGradient>
      <linearGradient id="paint1_linear_3_5" x1="75" y1="147" x2="167.923" y2="209.186" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_3_5" x1="232.077" y1="190.814" x2="325" y2="253" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_3_5" x1="141.5" y1="75" x2="258.5" y2="325" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <clipPath id="clip0_3_5">
        <rect width="400" height="400" rx="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const CopyIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

export const CheckIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const QRIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A.75.75 0 014.5 3.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM3.75 15A.75.75 0 014.5 14.25h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM15 3.75A.75.75 0 0014.25 3h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-4.5zM19.5 19.5h.008v.008h-.008v-.008zM15 15h.008v.008h-.008v-.008zM15 19.5h.008v.008h-.008v-.008zM19.5 15h.008v.008h-.008v-.008zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);

export const SolanaCoinIcon: React.FC<SVGProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M5.12 12.016c0-2.31 1.07-4.402 2.76-5.748L5.34 3.732a9.92 9.92 0 0 0-2.82 5.052c-.3 1.488-.3 3.012 0 4.5.3 1.488 1.02 2.868 2.07 4.02l2.55-2.556c-1.71-1.32-2.82-3.402-2.82-5.736zm13.77 5.748L21.42 20.3a9.92 9.92 0 0 0 2.82-5.052c.3-1.488.3-3.012 0-4.5a9.92 9.92 0 0 0-2.07-4.02l-2.55 2.556c1.71 1.32 2.82 3.402 2.82 5.736 0 2.31-1.07 4.402-2.76 5.748zm-6.88-15.48c-1.488-.3-3.012-.3-4.5 0-1.488.3-2.868 1.02-4.02 2.07l2.556 2.55c1.32-1.71 3.402-2.82 5.736-2.82 2.31 0 4.402 1.07 5.748 2.76L20.268 5.1c-1.162-1.04-2.532-1.77-4.02-2.07-.48-.09-.972-.132-1.476-.132s-.996.042-1.476.132zm-2.25 10.716c0 1.248.51 2.388 1.32 3.21l1.17-1.17c-.43-.42-.69-.99-.69-1.62 0-1.248 1.02-2.25 2.25-2.25s2.25 1.02 2.25 2.25-1.02 2.25-2.25 2.25c-.63 0-1.2-.26-1.62-.69l-1.17 1.17c.822.81 1.962 1.32 3.21 1.32 2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5z" />
    </svg>
);

export const CheckCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InfoCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const ArrowDownLeftIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export const UserCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
