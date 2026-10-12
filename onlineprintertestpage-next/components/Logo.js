export default function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4f46e5" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
      <rect width="40" height="40" rx="11" fill="url(#lg)" />
      <path d="M20 8c5 6 8 10 8 14a8 8 0 0 1-16 0c0-4 3-8 8-14z" fill="#fff" />
      <circle cx="17" cy="23" r="2" fill="#06b6d4" /><circle cx="23" cy="23" r="2" fill="#ec4899" /><circle cx="20" cy="27" r="2" fill="#f59e0b" />
    </svg>
  );
}
