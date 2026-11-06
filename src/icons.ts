const s = (p: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
export const ICONS: Record<string, string> = {
  tables: s('<path d="M6 6l12 12M18 6L6 18"/>'),
  bonds: s('<circle cx="7" cy="16" r="3.2"/><circle cx="17" cy="16" r="3.2"/><circle cx="12" cy="6" r="3.2"/><path d="M9.6 8.6 8 13M14.4 8.6 16 13"/>'),
  doubles: s('<rect x="3" y="7" width="8" height="10" rx="2.5"/><rect x="13" y="7" width="8" height="10" rx="2.5"/><circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="17" cy="12" r="1" fill="currentColor"/>'),
  halves: s('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" opacity=".35"/>'),
  division: s('<path d="M5 12h14"/><circle cx="12" cy="6.5" r="1.6" fill="currentColor"/><circle cx="12" cy="17.5" r="1.6" fill="currentColor"/>'),
  squares: s('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16M12 4v16"/>'),
  football: s('<circle cx="12" cy="12" r="8.5"/><path d="m12 8 3.2 2.3-1.2 3.8h-4l-1.2-3.8z"/><path d="M12 8V3.6M15.2 10.3l4-1.4M14 14.1l2.5 3.6M10 14.1l-2.5 3.6M8.8 10.3l-4-1.4"/>'),
  basketball: s('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5v17M6 6c3 3 3 9 0 12M18 6c-3 3-3 9 0 12"/>'),
  book: s('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>'),
  teach: s('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>',
};
