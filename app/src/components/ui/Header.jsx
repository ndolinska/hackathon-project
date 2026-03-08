import React from 'react';

// Ładujemy Twój plik PNG (ten 259x59 pikseli)
import walkingCatSprite from '../../assets/walking.png'; 

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="card-cream pixel-border p-6 md:p-8 mb-6 relative overflow-hidden">
        
        {/* Dekoracyjne kotki w rogach */}
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

        {/* SCENA Z KOTKIEM */}
        <div className="relative mt-8 h-28 w-full max-w-lg mx-auto border-b-4 border-amber-800 border-dashed opacity-80 overflow-hidden rounded-lg">
          
          {/* Kontener latający od ściany do ściany */}
          <div className="walking-cat-container absolute bottom-0">
            
            {/* Nasze okienko, które obcina wszystko wokół, pokazując tylko 1 klatkę */}
            <div className="cat-window">
              <img src={walkingCatSprite} alt="Kotek" className="cat-image" />
            </div>

          </div>

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