import React from 'react';

export default function Gallery({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4"> ← POWRÓT </button>
      <h2 className="pixel-font text-lg text-amber-900 mb-6 text-center">🐾 NASZE KOTKI 🐾</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation">
            <rect x="8" y="16" width="32" height="24" fill="#f5a855" /><rect x="8" y="4" width="8" height="14" fill="#f5a855" /><rect x="32" y="4" width="8" height="14" fill="#f5a855" /><rect x="14" y="22" width="6" height="6" fill="#333" /><rect x="28" y="22" width="6" height="6" fill="#333" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" /><rect x="16" y="34" width="16" height="2" fill="#333" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">MRUCZEK</h3>
          <p className="retro-font text-lg text-amber-800">Rudy, wesoły, lubi się bawić</p>
          <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 pixel-font text-xs">DOSTĘPNY</span>
        </div>

        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation" style={{ animationDelay: '0.5s' }}>
            <rect x="8" y="16" width="32" height="24" fill="#333" /><rect x="8" y="4" width="8" height="14" fill="#333" /><rect x="32" y="4" width="8" height="14" fill="#333" /><rect x="14" y="22" width="6" height="6" fill="#5a5" /><rect x="28" y="22" width="6" height="6" fill="#5a5" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" /><rect x="16" y="34" width="16" height="2" fill="#666" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">LUNA</h3>
          <p className="retro-font text-lg text-amber-800">Czarna, tajemnicza, spokojna</p>
          <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 pixel-font text-xs">DOSTĘPNA</span>
        </div>

        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation" style={{ animationDelay: '1s' }}>
            <rect x="8" y="16" width="32" height="24" fill="#fff" /><rect x="8" y="4" width="8" height="14" fill="#fff" /><rect x="32" y="4" width="8" height="14" fill="#fff" /><rect x="8" y="16" width="16" height="12" fill="#888" /><rect x="14" y="22" width="6" height="6" fill="#69c" /><rect x="28" y="22" width="6" height="6" fill="#69c" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">PUSZEK</h3>
          <p className="retro-font text-lg text-amber-800">Biało-szary, puchaty, leniwy</p>
          <span className="inline-block mt-2 px-2 py-1 bg-yellow-200 text-yellow-800 pixel-font text-xs">REZERWACJA</span>
        </div>

        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation" style={{ animationDelay: '1.5s' }}>
            <rect x="8" y="16" width="32" height="24" fill="#f5a855" /><rect x="8" y="4" width="8" height="14" fill="#f5a855" /><rect x="32" y="4" width="8" height="14" fill="#f5a855" /><rect x="8" y="16" width="10" height="24" fill="#fff" /><rect x="30" y="16" width="10" height="24" fill="#fff" /><rect x="14" y="22" width="6" height="6" fill="#333" /><rect x="28" y="22" width="6" height="6" fill="#333" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">FILEMON</h3>
          <p className="retro-font text-lg text-amber-800">Łaciaty, ciekawski, głośny</p>
          <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 pixel-font text-xs">DOSTĘPNY</span>
        </div>

        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation" style={{ animationDelay: '2s' }}>
            <rect x="8" y="16" width="32" height="24" fill="#c9a65a" /><rect x="8" y="4" width="8" height="14" fill="#c9a65a" /><rect x="32" y="4" width="8" height="14" fill="#c9a65a" /><rect x="14" y="22" width="6" height="6" fill="#963" /><rect x="28" y="22" width="6" height="6" fill="#963" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" /><rect x="12" y="16" width="6" height="4" fill="#8b6914" /><rect x="30" y="16" width="6" height="4" fill="#8b6914" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">KICIA</h3>
          <p className="retro-font text-lg text-amber-800">Złocista, elegancka, dumna</p>
          <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 pixel-font text-xs">DOSTĘPNA</span>
        </div>

        <div className="card-orange pixel-border p-4 text-center">
          <svg viewBox="0 0 48 48" width="80" height="80" className="mx-auto mb-3 float-animation" style={{ animationDelay: '2.5s' }}>
            <rect x="8" y="16" width="32" height="24" fill="#888" /><rect x="8" y="4" width="8" height="14" fill="#888" /><rect x="32" y="4" width="8" height="14" fill="#888" /><rect x="16" y="20" width="4" height="4" fill="#666" /><rect x="28" y="20" width="4" height="4" fill="#666" /><rect x="14" y="22" width="6" height="6" fill="#fc0" /><rect x="28" y="22" width="6" height="6" fill="#fc0" /><rect x="22" y="30" width="4" height="3" fill="#ff9999" />
          </svg>
          <h3 className="pixel-font text-xs text-amber-900 mb-1">DYMEK</h3>
          <p className="retro-font text-lg text-amber-800">Szary, przytulny, cichy</p>
          <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 pixel-font text-xs">DOSTĘPNY</span>
        </div>

      </div>
    </section>
  );
}