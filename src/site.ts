export const SITE = {
  name: 'Hit the Button Math',
  url: 'https://hitthebuttonmath.com',
  email: 'info@hitthebuttonmath.com',
  // AdSense: leave adsenseId empty until approved. When set, Base loads the script with child-directed + non-personalised flags.
  adsenseId: '',
  adsenseChildDirected: true,
  adsenseNonPersonalized: true,
  // Optional privacy-friendly analytics (e.g. Plausible domain). Empty = no analytics script.
  analyticsDomain: '',
  updated: '2026-11-06',
};
export const AUTHOR = {
  name: 'Daniel Carter',
  url: '/about/#daniel-carter',
  jobTitle: 'Site editor',
  bio: 'Daniel Carter builds and maintains this free maths practice site. He writes and updates the guides by checking the Department for Education national curriculum and ready-to-progress guidance, Standards and Testing Agency Multiplication Tables Check documents, NCETM Mastering Number materials and Education Endowment Foundation maths guidance, and he tests the game in the browser before each release. He is not a classroom teacher.',
};
export const NAV = [
  { name: 'Times Tables', path: '/times-tables/' },
  { name: 'Number Bonds', path: '/number-bonds/' },
  { name: 'Doubles & Halves', path: '/doubles/' },
  { name: 'Sports', path: '/sports/' },
  { name: 'Teachers', path: '/teachers/' },
  { name: 'Blog', path: '/blog/' },
];
const icon = (body: string) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
export const SOCIALS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hitthebuttonmath/',
    svg: icon('<path fill="currentColor" fill-rule="evenodd" d="M7.5 3.2h9a4.3 4.3 0 0 1 4.3 4.3v9a4.3 4.3 0 0 1-4.3 4.3h-9a4.3 4.3 0 0 1-4.3-4.3v-9a4.3 4.3 0 0 1 4.3-4.3zm4.5 3.5a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6zm0 2.1a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zM17.2 5.9a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1z"/>'),
  },
  {
    name: 'Quora',
    url: 'https://www.quora.com/profile/Hit-the-Button-Math',
    svg: icon('<path fill="currentColor" fill-rule="evenodd" d="M12 2.5a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6zm0 3.05a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5z"/><path fill="currentColor" d="M15.55 14.7 20.4 21.15l2.15-1.45-4.55-6.05z"/>'),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@hitthebuttonmath',
    svg: icon('<circle cx="8.9" cy="16.5" r="3.6" fill="currentColor"/><path fill="currentColor" d="M11.8 16.1V3.2h2.15c.2 1.65 1.15 2.95 2.55 3.6.75.35 1.55.5 2.35.45v2.35c-.9.08-1.75-.08-2.5-.5-.65-.32-1.15-.8-1.45-1.35v8.35H11.8z"/>'),
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/hitthebuttonmath/',
    svg: icon('<path fill="currentColor" d="M12 2C6.5 2 2 6.48 2 12c0 4.14 2.58 7.66 6.22 9.04-.09-.76-.16-1.93.03-2.76.18-.76 1.16-5.2 1.16-5.2s-.3-.6-.3-1.48c0-1.39.8-2.42 1.81-2.42.85 0 1.26.64 1.26 1.4 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.82 1.48 1.82 1.78 0 3.15-1.88 3.15-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.75 2.28.08.1.1.22.06.32l-.28 1.12c-.05.2-.16.24-.36.14-1.24-.58-2.02-2.4-2.02-3.86 0-3.14 2.28-6.03 6.58-6.03 3.46 0 6.15 2.46 6.15 5.76 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.3-1.16l-.62 2.36c-.23.9-.86 2.02-1.28 2.68A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>'),
  },
  {
    name: 'X',
    url: 'https://x.com/Hitthebutton0',
    svg: icon('<path fill="currentColor" d="M4 3.2 10.15 12 4 20.8h2.55L12 14.05l5.45 6.75H20L13.85 12 20 3.2h-2.55L12 9.95 6.55 3.2H4z"/>'),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61596168883087',
    svg: icon('<path fill="currentColor" d="M14.2 21v-7.15h2.4l.36-2.75h-2.76V9.3c0-.82.23-1.38 1.4-1.38h1.5V5.35c-.25-.03-1.1-.1-2.1-.1-2.05 0-3.45 1.25-3.45 3.55v1.3H9.1v2.75h2.45V21h2.65z"/>'),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Hitthebuttonmath',
    svg: icon('<path fill="currentColor" fill-rule="evenodd" d="M23.1 12.2s0-3.05-.4-4.4a2.52 2.52 0 0 0-1.77-1.77C19.2 5.6 12 5.6 12 5.6s-7.2 0-8.93.43a2.52 2.52 0 0 0-1.77 1.77C.9 9.15.9 12.2.9 12.2s0 3.05.4 4.4a2.52 2.52 0 0 0 1.77 1.77c1.73.43 8.93.43 8.93.43s7.2 0 8.93-.43a2.52 2.52 0 0 0 1.77-1.77c.4-1.35.4-4.4.4-4.4zM9.75 15.55V8.85L15.9 12.2 9.75 15.55z"/>'),
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@hitthebuttonmath',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12.3" r="3.05"/><path d="M15.05 12.05v1.1a2.15 2.15 0 0 0 4.3 0C19.35 9.1 16.3 6.1 12 6.1S4.65 9.1 4.65 13.15 7.7 20.2 12 20.2c1.75 0 3.3-.55 4.55-1.55"/></svg>',
  },
];
