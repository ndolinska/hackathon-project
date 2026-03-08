import React from 'react';

// Baza danych naszych kotków ze zaktualizowanymi linkami i SVG
const catsData = [
  {
    id: 'dudusia',
    name: 'DUDUSIA',
    desc: 'Młodziutka, głośno mruczy, szuka dwupaku',
    url: 'https://trzymajsiekocie.pl/kot/dudusia',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2025/12/image-2-16.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation">
        {/* Dudusia - Bura z białym */}
        <rect x="8" y="12" width="32" height="28" fill="#8b7355" />
        <rect x="12" y="16" width="4" height="20" fill="#30130b" />
        <rect x="20" y="12" width="4" height="24" fill="#30130b" />
        <rect x="28" y="16" width="4" height="20" fill="#30130b" />
        <rect x="16" y="34" width="16" height="6" fill="#fff" />
        <rect x="8" y="36" width="8" height="4" fill="#fff" />
        <rect x="32" y="36" width="8" height="4" fill="#fff" />
        <rect x="8" y="4" width="8" height="14" fill="#8b7355" />
        <rect x="32" y="4" width="8" height="14" fill="#8b7355" />
        <rect x="10" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="34" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="14" y="22" width="6" height="6" fill="#333" />
        <rect x="28" y="22" width="6" height="6" fill="#333" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
        <rect x="16" y="34" width="16" height="2" fill="#30130b" />
      </svg>
    )
  },
  {
    id: 'emti',
    name: 'EMTI',
    desc: 'Aktywna, uwielbia zabawki i spanie w łóżku',
    url: 'https://trzymajsiekocie.pl/kot/emti',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2025/12/image-3-3.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation" style={{ animationDelay: '0.5s' }}>
        {/* Emti - Trójkolorowa */}
        <rect x="8" y="12" width="32" height="28" fill="#fff" />
        <rect x="8" y="12" width="10" height="10" fill="#333" />
        <rect x="28" y="24" width="12" height="16" fill="#333" />
        <rect x="30" y="12" width="10" height="12" fill="#f5a855" />
        <rect x="8" y="30" width="10" height="10" fill="#f5a855" />
        <rect x="8" y="4" width="8" height="14" fill="#333" />
        <rect x="32" y="4" width="8" height="14" fill="#f5a855" />
        <rect x="14" y="22" width="6" height="6" fill="#5a5" />
        <rect x="28" y="22" width="6" height="6" fill="#5a5" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
      </svg>
    )
  },
  {
    id: 'fuks',
    name: 'FUKS',
    desc: 'Uroczy FIV+, potrzebuje Twojej troski i miłości',
    url: 'https://trzymajsiekocie.pl/kot/fuks',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2025/12/image-6-3.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation" style={{ animationDelay: '1s' }}>
        {/* Fuks - Biało-szary */}
        <rect x="8" y="12" width="32" height="28" fill="#fff" />
        <rect x="8" y="12" width="8" height="6" fill="#888" />
        <rect x="34" y="12" width="6" height="6" fill="#888" />
        <rect x="8" y="4" width="8" height="14" fill="#fff" />
        <rect x="32" y="4" width="8" height="14" fill="#fff" />
        <rect x="10" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="34" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="14" y="22" width="6" height="6" fill="#69c" />
        <rect x="28" y="22" width="6" height="6" fill="#69c" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
      </svg>
    )
  },
  {
    id: 'karla',
    name: 'KARLA',
    desc: 'Roczna, nieśmiała fanka kocich wędek i piłeczek',
    url: 'https://trzymajsiekocie.pl/kot/karla',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2025/12/image-5-3.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation" style={{ animationDelay: '1.5s' }}>
        {/* Karla - Szara kotka z zielonymi oczami */}
        <rect x="8" y="12" width="32" height="28" fill="#888" />
        <rect x="8" y="4" width="8" height="14" fill="#888" />
        <rect x="32" y="4" width="8" height="14" fill="#888" />
        <rect x="10" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="34" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="14" y="22" width="6" height="6" fill="#5a5" />
        <rect x="28" y="22" width="6" height="6" fill="#5a5" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
      </svg>
    )
  },
  {
    id: 'kiki',
    name: 'KIKI',
    desc: 'Roczna pingwinka, pełna energii i ciekawości świata',
    url: 'https://trzymajsiekocie.pl/kot/kiki',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2026/01/image-7.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation" style={{ animationDelay: '2s' }}>
        {/* Kiki - Pingwinka (Czarno-biała) */}
        <rect x="8" y="12" width="32" height="28" fill="#333" />
        <rect x="16" y="24" width="16" height="16" fill="#fff" />
        <rect x="20" y="12" width="8" height="12" fill="#fff" />
        <rect x="8" y="4" width="8" height="14" fill="#333" />
        <rect x="32" y="4" width="8" height="14" fill="#333" />
        <rect x="14" y="22" width="6" height="6" fill="#5a5" />
        <rect x="28" y="22" width="6" height="6" fill="#5a5" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
      </svg>
    )
  },
  {
    id: 'jagoda',
    name: 'JAGODA',
    desc: 'Spokojna 3-latka, fanka drzemek na miękkich kocykach',
    url: 'https://trzymajsiekocie.pl/kot/jagoda',
    realPhoto: 'https://trzymajsiekocie.pl/wp-content/uploads/2025/12/image-32.webp',
    pixelSvg: (
      <svg viewBox="0 0 48 48" width="64" height="64" className="float-animation" style={{ animationDelay: '2.5s' }}>
        {/* Jagoda - Bura */}
        <rect x="8" y="12" width="32" height="28" fill="#a67c52" />
        <rect x="12" y="16" width="4" height="20" fill="#663110" />
        <rect x="20" y="12" width="4" height="24" fill="#663110" />
        <rect x="28" y="16" width="4" height="20" fill="#663110" />
        <rect x="8" y="4" width="8" height="14" fill="#a67c52" />
        <rect x="32" y="4" width="8" height="14" fill="#a67c52" />
        <rect x="10" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="34" y="6" width="4" height="8" fill="#ffb6c1" />
        <rect x="16" y="20" width="4" height="4" fill="#666" />
        <rect x="28" y="20" width="4" height="4" fill="#666" />
        <rect x="14" y="22" width="6" height="6" fill="#fc0" />
        <rect x="28" y="22" width="6" height="6" fill="#fc0" />
        <rect x="22" y="30" width="4" height="3" fill="#ff9999" />
      </svg>
    )
  }
];

export default function Gallery({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4 hover:bg-gray-600"> 
        ← POWRÓT 
      </button>
      
      <h2 className="pixel-font text-lg text-amber-900 mb-6 text-center">🐾 NASZE KOTKI 🐾</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {catsData.map((cat) => (
          <div key={cat.id} className="card-orange pixel-border p-5 text-center flex flex-col items-center">
            
            <div className="flex justify-center items-center gap-6 mb-5 h-20">
              {cat.pixelSvg}
              
              <div className="relative group cursor-pointer">
                <img 
                  src={cat.realPhoto} 
                  alt={`Zdjęcie kota ${cat.name}`} 
                  className="w-20 h-20 rounded-xl object-cover border-4 border-[#8b7355] shadow-[4px_4px_0_#5c4a3a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-400 rounded-full border-2 border-white flex items-center justify-center text-[10px] shadow-sm">
                  ❤️
                </div>
              </div>
            </div>

            <h3 className="pixel-font text-base text-amber-900 mb-3">{cat.name}</h3>
            
            <p className="retro-font text-[22px] leading-tight text-amber-800 flex-grow">{cat.desc}</p>
            
            {/* Nowy interaktywny przycisk "POZNAJ MNIE" */}
            <a 
              href={cat.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-green-500 text-white pixel-font text-[10px] border-2 border-green-800 shadow-[2px_2px_0_#166534] hover:bg-green-600 hover:-translate-y-1 transition-transform active:translate-y-0 active:shadow-none"
            >
              POZNAJ MNIE ➡
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}