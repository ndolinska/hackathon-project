import React from 'react';

export default function Donate({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4 hover:bg-gray-600 transition-colors"> 
        ← POWRÓT 
      </button>
      
      <h2 className="pixel-font text-lg md:text-xl text-amber-900 mb-4 text-center">💝 WESPRZYJ KOCIAKI 💝</h2>
      <p className="retro-font text-xl md:text-2xl text-amber-800 text-center mb-6">
        Twoja wpłata pomaga prawdziwym kotom w schroniskach, a w zamian dostajesz super przedmioty do gry! Wybierz kwotę:
      </p>
      
      {/* Przyciski z kwotami dopasowanymi do nagród w grze */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200 transition-colors group">
          <span className="pixel-font text-lg text-amber-900 group-hover:scale-110 inline-block transition-transform">5 zł</span>
          <p className="retro-font text-[16px] text-amber-700 mt-2 leading-tight">🧶 Kłębek<br/>Włóczki</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200 transition-colors group">
          <span className="pixel-font text-lg text-amber-900 group-hover:scale-110 inline-block transition-transform">20 zł</span>
          <p className="retro-font text-[16px] text-amber-700 mt-2 leading-tight">🐟 Puszka<br/>Premium</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200 transition-colors group">
          <span className="pixel-font text-lg text-amber-900 group-hover:scale-110 inline-block transition-transform">50 zł</span>
          <p className="retro-font text-[16px] text-amber-700 mt-2 leading-tight">🛏️ Miękkie<br/>Legowisko</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200 transition-colors group">
          <span className="pixel-font text-lg text-amber-900 group-hover:scale-110 inline-block transition-transform">100 zł</span>
          <p className="retro-font text-[16px] text-amber-700 mt-2 leading-tight">🏰 Królewski<br/>Drapak</p>
        </button>
      </div>

      {/* Sekcja własnej kwoty */}
      <div className="card-orange pixel-border p-4 mb-8">
        <label className="pixel-font text-xs text-amber-900 block mb-2">WŁASNA KWOTA:</label>
        <div className="flex gap-2">
          <input 
            type="number" 
            min="1" 
            placeholder="Wpisz kwotę..." 
            className="flex-1 p-3 pixel-border retro-font text-xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" 
          />
          <span className="retro-font text-2xl text-amber-800 self-center">zł</span>
        </div>
      </div>

      {/* NOWA SEKCJA PŁATNOŚCI (Zamiast tekstu demonstracyjnego) */}
      <div className="text-center mb-8">
        <div className="mb-5">
          <p className="pixel-font text-[10px] md:text-xs text-amber-900 mb-3 opacity-80">BEZPIECZNE PŁATNOŚCI OBSŁUGUJĄ:</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            
            {/* Ikona BLIK */}
            <div className="bg-white text-black px-3 py-1 font-sans font-black tracking-widest border-2 border-black shadow-[2px_2px_0_#000] flex items-center select-none">
              BLIK
            </div>
            
            {/* Ikona Przelewy24 */}
            <div className="bg-[#00704a] text-white px-3 py-1 font-sans font-bold border-2 border-[#004d33] shadow-[2px_2px_0_#004d33] flex items-center select-none">
              Przelewy24
            </div>
            
            {/* Ikona PayPal */}
            <div className="bg-[#003087] text-white px-3 py-1 font-sans font-bold italic border-2 border-[#001c52] shadow-[2px_2px_0_#001c52] flex items-center select-none">
              PayPal
            </div>
            
            {/* Ikona Kart Płatniczych */}
            <div className="bg-gray-100 text-slate-800 px-3 py-1 font-sans font-bold border-2 border-gray-400 shadow-[2px_2px_0_#6b7280] flex items-center gap-1.5 select-none">
              <div className="flex">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full -ml-1.5 opacity-90 mix-blend-multiply"></div>
              </div>
              <span className="text-xs">KARTA</span>
            </div>
            
          </div>
        </div>

        {/* Główny przycisk wpłaty */}
        <button className="pixel-btn bg-rose-500 text-white px-8 py-4 pixel-font text-sm md:text-base border-2 border-rose-800 shadow-[4px_4px_0_#9f1239] hover:bg-rose-600 hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"> 
          💖 WPŁAĆ I ODBIERZ NAGRODY 
        </button>
      </div>

      {/* Sekcja nagród */}
      <div className="mt-6 card-orange pixel-border p-5">
        <h3 className="pixel-font text-sm text-amber-900 mb-5 text-center">🎁 WIRTUALNE NAGRODY DO GRY 🎁</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          
          <div className="bg-amber-50/50 p-4 rounded-xl border-2 border-amber-200 hover:bg-white transition-colors cursor-default">
            <span className="text-5xl block mb-3 animate-bounce" style={{ animationDuration: '2s' }}>🧶</span>
            <p className="retro-font text-xl text-amber-900 font-bold mb-1">od 5 zł</p>
            <p className="retro-font text-[18px] text-amber-700 leading-tight">Podstawowa piłka<br/><span className="text-sm text-green-700">+ Szczęście kota</span></p>
          </div>
          
          <div className="bg-amber-50/50 p-4 rounded-xl border-2 border-amber-200 hover:bg-white transition-colors cursor-default">
            <span className="text-5xl block mb-3 animate-bounce" style={{ animationDuration: '2.5s' }}>🐟</span>
            <p className="retro-font text-xl text-amber-900 font-bold mb-1">od 20 zł</p>
            <p className="retro-font text-[18px] text-amber-700 leading-tight">Puszka Premium<br/><span className="text-sm text-green-700">+ Pełny brzuszek</span></p>
          </div>
          
          <div className="bg-amber-100 p-4 rounded-xl border-4 border-amber-400 relative overflow-hidden hover:bg-amber-50 transition-colors cursor-default shadow-inner">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-400 rotate-45 opacity-50"></div>
            <span className="text-5xl block mb-3 animate-bounce" style={{ animationDuration: '3s' }}>🏰</span>
            <p className="retro-font text-xl text-amber-900 font-bold mb-1">od 100 zł</p>
            <p className="retro-font text-[18px] text-amber-800 leading-tight">Zamek VIP & Korona!<br/><span className="text-sm text-amber-600 font-bold">Złoty status Sponsora</span></p>
          </div>

        </div>
      </div>

    </section>
  );
}