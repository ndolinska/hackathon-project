import React from 'react';

export default function Tutorial({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4"> ← POWRÓT </button>
      <h2 className="pixel-font text-lg text-amber-900 mb-6 text-center">🎮 TUTORIAL GRY TAMAGOTCHI 🎮</h2>
      <div className="grid gap-4">
        <div className="card-orange pixel-border p-4">
          <h3 className="pixel-font text-xs text-amber-900 mb-2">KROK 1: WYBIERZ KOTKA</h3>
          <p className="retro-font text-xl text-amber-800">Rozpocznij od wyboru swojego wirtualnego pupila z naszej galerii. Każdy kot ma unikalne cechy i potrzeby!</p>
        </div>
        <div className="card-orange pixel-border p-4">
          <h3 className="pixel-font text-xs text-amber-900 mb-2">KROK 2: KARMIENIE 🍖</h3>
          <p className="retro-font text-xl text-amber-800">Karm swojego kotka regularnie! Pasek głodu pokazuje, kiedy jest pora na jedzenie. Nie pozwól mu zgłodnieć!</p>
          <div className="mt-3 bg-amber-200 pixel-border p-2">
            <div className="flex items-center gap-2">
              <span className="retro-font text-lg">Głód:</span>
              <div className="flex-1 h-4 bg-amber-100 pixel-border">
                <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-orange pixel-border p-4">
          <h3 className="pixel-font text-xs text-amber-900 mb-2">KROK 3: ZABAWA 🎾</h3>
          <p className="retro-font text-xl text-amber-800">Baw się z kotkiem, aby podnieść jego szczęście! Kliknij przycisk zabawy i obserwuj, jak się cieszy.</p>
        </div>
        <div className="card-orange pixel-border p-4">
          <h3 className="pixel-font text-xs text-amber-900 mb-2">KROK 4: SEN 😴</h3>
          <p className="retro-font text-xl text-amber-800">Kotki potrzebują odpoczynku! Gdy pasek energii spada, połóż pupila spać.</p>
        </div>
        <div className="card-orange pixel-border p-4">
          <h3 className="pixel-font text-xs text-amber-900 mb-2">KROK 5: ZDOBYWAJ PUNKTY ⭐</h3>
          <p className="retro-font text-xl text-amber-800">Im lepiej opiekujesz się kotkiem, tym więcej punktów zdobywasz! Odblokuj specjalne nagrody i akcesoria.</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="pixel-btn bg-green-600 text-white px-6 py-4 pixel-font text-sm hover:bg-green-700"> 🎮 ROZPOCZNIJ GRĘ! </button>
      </div>
    </section>
  );
}