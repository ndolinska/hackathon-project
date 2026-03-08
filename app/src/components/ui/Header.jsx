import React from 'react';
import logoImg from '../../assets/logo2.png'; 
import walkingCatSprite from '../../assets/walking.png'; 

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="card-cream pixel-border p-6 md:p-8 mb-6 relative">

        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <svg viewBox="0 0 32 32" width="60" height="60" className="cat-bounce">
            <rect x="4" y="8" width="4" height="8" fill="#f5a855" /><rect x="24" y="8" width="4" height="8" fill="#f5a855" /><rect x="8" y="12" width="16" height="16" fill="#f5a855" /><rect x="4" y="16" width="4" height="8" fill="#f5a855" /><rect x="24" y="16" width="4" height="8" fill="#f5a855" /><rect x="10" y="16" width="4" height="4" fill="#333" /><rect x="18" y="16" width="4" height="4" fill="#333" /><rect x="14" y="22" width="4" height="2" fill="#ff1385" /><rect x="14" y="24" width="4" height="2" fill="#333" />
          </svg>
        </div>

        <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <svg viewBox="0 0 32 32" width="60" height="60" className="cat-bounce" style={{ animationDelay: '1s' }}>
            <rect x="4" y="8" width="4" height="8" fill="#888" /><rect x="24" y="8" width="4" height="8" fill="#888" /><rect x="8" y="12" width="16" height="16" fill="#888" /><rect x="4" y="16" width="4" height="8" fill="#888" /><rect x="24" y="16" width="4" height="8" fill="#888" /><rect x="8" y="12" width="8" height="8" fill="#666" /><rect x="10" y="16" width="4" height="4" fill="rgb(70, 255, 70)" /><rect x="18" y="16" width="4" height="4" fill="rgb(124, 220, 255)" /><rect x="14" y="22" width="4" height="2" fill="#ff9999" />
          </svg>
        </div>

        <div className="flex justify-center mb-2 mt-2">
          <img 
            src={logoImg} 
            alt="TamaKOTchi Logo" 
            className="h-16 md:h-20 relative z-10" 
            style={{ imageRendering: 'pixelated' }} 
          />
        </div>
        
        <p className="retro-font text-2xl md:text-3xl text-amber-800 relative z-10">
          Wirtualna Adopcja Kotów
        </p>

        <div className="relative mt-8 h-28 w-full max-w-lg mx-auto border-b-4 border-amber-800 border-dashed opacity-80 overflow-hidden rounded-lg">
          <div className="walking-cat-container absolute bottom-0">
            <div className="cat-window">
              <img src={walkingCatSprite} alt="Kotek" className="cat-image" />
            </div>
          </div>
        </div>

      </div>
      
      <div className="card-orange pixel-border p-5 md:p-6">
        <p className="retro-font text-xl md:text-2xl text-amber-900 leading-relaxed">
          🏠 Znajdź swojego wymarzonego wirtualnego kociaka! 🏠<br />
          Oferujemy adopcję tymczasową, stałą oraz tryb gry!
        </p>
      </div>
    </header>
  );
}