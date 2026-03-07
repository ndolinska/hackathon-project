import React from 'react';

export default function Donate({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4"> ← POWRÓT </button>
      <h2 className="pixel-font text-lg text-amber-900 mb-6 text-center">💝 WESPRZYJ KOCIAKI 💝</h2>
      <p className="retro-font text-xl text-amber-800 text-center mb-6">Twoja wpłata pomaga prawdziwym kotom w schroniskach. Wybierz kwotę:</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200">
          <span className="pixel-font text-lg text-amber-900">10 zł</span>
          <p className="retro-font text-sm text-amber-700 mt-1">🐟 Porcja karmy</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200">
          <span className="pixel-font text-lg text-amber-900">25 zł</span>
          <p className="retro-font text-sm text-amber-700 mt-1">🏥 Szczepienie</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200">
          <span className="pixel-font text-lg text-amber-900">50 zł</span>
          <p className="retro-font text-sm text-amber-700 mt-1">🛏️ Legowisko</p>
        </button>
        <button className="pixel-btn card-orange p-4 text-center hover:bg-amber-200">
          <span className="pixel-font text-lg text-amber-900">100 zł</span>
          <p className="retro-font text-sm text-amber-700 mt-1">💊 Sterylizacja</p>
        </button>
      </div>

      <div className="card-orange pixel-border p-4 mb-6">
        <label className="pixel-font text-xs text-amber-900 block mb-2">WŁASNA KWOTA:</label>
        <div className="flex gap-2">
          <input type="number" min="1" placeholder="Wpisz kwotę..." className="flex-1 p-3 pixel-border retro-font text-xl bg-amber-50" />
          <span className="retro-font text-2xl text-amber-800 self-center">zł</span>
        </div>
      </div>

      <div className="text-center">
        <p className="retro-font text-lg text-amber-700 mb-4 italic">⚠️ To jest strona demonstracyjna. Rzeczywiste wpłaty nie są przetwarzane.</p>
        <button className="pixel-btn bg-rose-600 text-white px-8 py-4 pixel-font text-sm hover:bg-rose-700"> 💖 WPŁAĆ TERAZ </button>
      </div>

      <div className="mt-6 card-orange pixel-border p-4">
        <h3 className="pixel-font text-xs text-amber-900 mb-3 text-center">🏆 NAGRODY DLA DARCZYŃCÓW</h3>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div><span className="text-2xl">🥉</span><p className="retro-font text-sm text-amber-800">od 10 zł</p><p className="retro-font text-xs text-amber-700">Odznaka Przyjaciela</p></div>
          <div><span class="text-2xl">🥈</span><p className="retro-font text-sm text-amber-800">od 50 zł</p><p className="retro-font text-xs text-amber-700">Ekskluzywna zabawka</p></div>
          <div><span className="text-2xl">🥇</span><p className="retro-font text-sm text-amber-800">od 100 zł</p><p className="retro-font text-xs text-amber-700">Złota korona</p></div>
        </div>
      </div>
    </section>
  );
}