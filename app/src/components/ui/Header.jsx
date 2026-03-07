import React from 'react';

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="card-cream pixel-border p-6 md:p-8 mb-6 relative">
        <div className="absolute -top-4 -left-4">
          <svg viewBox="0 0 32 32" width="48" height="48" className="float-animation">
            <rect x="4" y="8" width="4" height="8" fill="#f5a855" /><rect x="24" y="8" width="4" height="8" fill="#f5a855" /><rect x="8" y="12" width="16" height="16" fill="#f5a855" /><rect x="4" y="16" width="4" height="8" fill="#f5a855" /><rect x="24" y="16" width="4" height="8" fill="#f5a855" /><rect x="10" y="16" width="4" height="4" fill="#333" /><rect x="18" y="16" width="4" height="4" fill="#333" /><rect x="14" y="22" width="4" height="2" fill="#ff9999" /><rect x="10" y="24" width="12" height="2" fill="#333" />
          </svg>
        </div>
        <div className="absolute -top-4 -right-4">
          <svg viewBox="0 0 32 32" width="48" height="48" className="float-animation" style={{ animationDelay: '1.5s' }}>
            <rect x="4" y="8" width="4" height="8" fill="#888" /><rect x="24" y="8" width="4" height="8" fill="#888" /><rect x="8" y="12" width="16" height="16" fill="#888" /><rect x="4" y="16" width="4" height="8" fill="#888" /><rect x="24" y="16" width="4" height="8" fill="#888" /><rect x="8" y="12" width="8" height="8" fill="#666" /><rect x="10" y="16" width="4" height="4" fill="#5a5" /><rect x="18" y="16" width="4" height="4" fill="#5a5" /><rect x="14" y="22" width="4" height="2" fill="#ff9999" />
          </svg>
        </div>
        <h1 className="pixel-font text-xl md:text-3xl text-amber-900 mb-4 leading-relaxed">🐱 PIXEL KITTY 🐱</h1>
        <p className="retro-font text-2xl md:text-4xl text-amber-800">Wirtualna Adopcja Kotów</p>
        <div className="mt-6 flex justify-center">
          <svg viewBox="0 0 64 64" width="96" height="96" className="blink-animation">
            <rect x="16" y="28" width="32" height="24" fill="#f5a855" /><rect x="12" y="12" width="40" height="28" fill="#f5a855" /><rect x="12" y="4" width="8" height="12" fill="#f5a855" /><rect x="44" y="4" width="8" height="12" fill="#f5a855" /><rect x="14" y="6" width="4" height="8" fill="#ffb6c1" /><rect x="46" y="6" width="4" height="8" fill="#ffb6c1" /><rect x="20" y="20" width="8" height="8" fill="#333" /><rect x="36" y="20" width="8" height="8" fill="#333" /><rect x="22" y="22" width="4" height="4" fill="#fff" /><rect x="38" y="22" width="4" height="4" fill="#fff" /><rect x="30" y="30" width="4" height="4" fill="#ff9999" /><rect x="26" y="34" width="4" height="2" fill="#333" /><rect x="34" y="34" width="4" height="2" fill="#333" /><rect x="8" y="28" width="8" height="2" fill="#333" /><rect x="8" y="32" width="10" height="2" fill="#333" /><rect x="48" y="28" width="8" height="2" fill="#333" /><rect x="46" y="32" width="10" height="2" fill="#333" /><rect x="16" y="48" width="8" height="8" fill="#f5a855" /><rect x="40" y="48" width="8" height="8" fill="#f5a855" /><rect x="48" y="36" width="12" height="6" fill="#f5a855" /><rect x="56" y="32" width="6" height="8" fill="#f5a855" />
          </svg>
        </div>
      </div>
      <div className="card-orange pixel-border p-5 md:p-6">
        <p className="retro-font text-xl md:text-2xl text-amber-900 leading-relaxed">
          🏠 Znajdź swojego wymarzonego wirtualnego kociaka! 🏠<br />
          Oferujemy adopcję tymczasową, stałą oraz tryb gry Tamagotchi!
        </p>
      </div>
    </header>
  );
}