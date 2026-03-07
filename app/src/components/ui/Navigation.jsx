import React from 'react';

export default function Navigation({ onSelectSection }) {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="card-cream pixel-border p-6 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="4" y="8" width="16" height="12" fill="#8b7355" /><rect x="6" y="10" width="12" height="8" fill="#5a5" /><rect x="8" y="4" width="4" height="6" fill="#888" /><rect x="12" y="6" width="4" height="4" fill="#888" />
          </svg>
        </div>
        <h2 className="pixel-font text-sm md:text-base text-amber-900 mb-4">🎮 TRYB GRY</h2>
        <p className="retro-font text-lg md:text-xl text-amber-800 mb-4">Naucz się opiekować wirtualnym kotkiem w stylu Tamagotchi! Karm, baw się i dbaj o swojego pupila.</p>
        <button onClick={() => onSelectSection('tutorial')} className="pixel-btn bg-amber-600 text-white px-4 py-3 pixel-font text-xs w-full hover:bg-amber-700"> ▶ ROZPOCZNIJ TUTORIAL </button>
      </div>

      <div className="card-orange pixel-border p-6 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="2" y="2" width="20" height="20" fill="#c9a65a" /><rect x="4" y="4" width="16" height="16" fill="#f5efe6" /><rect x="6" y="8" width="4" height="4" fill="#f5a855" /><rect x="14" y="8" width="4" height="4" fill="#888" /><rect x="6" y="14" width="4" height="4" fill="#333" /><rect x="14" y="14" width="4" height="4" fill="#fff" />
          </svg>
        </div>
        <h2 className="pixel-font text-sm md:text-base text-amber-900 mb-4">🐾 GALERIA</h2>
        <p className="retro-font text-lg md:text-xl text-amber-800 mb-4">Przeglądaj nasze urocze kociaki czekające na adopcję. Każdy ma unikalną osobowość!</p>
        <button onClick={() => onSelectSection('gallery')} className="pixel-btn bg-amber-700 text-white px-4 py-3 pixel-font text-xs w-full hover:bg-amber-800"> 👀 ZOBACZ KOTKI </button>
      </div>

      <div className="card-orange pixel-border p-6 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="6" y="4" width="12" height="16" fill="#f5d89a" /><rect x="8" y="6" width="8" height="2" fill="#8b7355" /><rect x="8" y="10" width="8" height="2" fill="#8b7355" /><rect x="8" y="14" width="6" height="2" fill="#8b7355" />
          </svg>
        </div>
        <h2 className="pixel-font text-sm md:text-base text-amber-900 mb-4">📋 ADOPCJA</h2>
        <p className="retro-font text-lg md:text-xl text-amber-800 mb-4">Wybierz rodzaj adopcji: tymczasowa, stała lub wirtualne wsparcie dla prawdziwych kotów.</p>
        <button onClick={() => onSelectSection('adoption')} className="pixel-btn bg-orange-700 text-white px-4 py-3 pixel-font text-xs w-full hover:bg-orange-800"> 📝 RODZAJE ADOPCJI </button>
      </div>

      <div className="card-cream pixel-border p-6 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="4" y="6" width="16" height="12" fill="#f5d89a" /><rect x="6" y="8" width="12" height="8" fill="#c9a65a" /><rect x="10" y="10" width="4" height="4" fill="#5a5" />
          </svg>
        </div>
        <h2 className="pixel-font text-sm md:text-base text-amber-900 mb-4">💝 WESPRZYJ</h2>
        <p className="retro-font text-lg md:text-xl text-amber-800 mb-4">Twoja wpłata pomaga prawdziwym kotom w schroniskach. Każda złotówka się liczy!</p>
        <button onClick={() => onSelectSection('donate')} className="pixel-btn bg-rose-600 text-white px-4 py-3 pixel-font text-xs w-full hover:bg-rose-700"> 💖 WPŁAĆ DATEK </button>
      </div>
    </nav>
  );
}