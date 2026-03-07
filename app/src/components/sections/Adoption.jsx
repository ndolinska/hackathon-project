import React from 'react';

export default function Adoption({ onBack }) {
  return (
    <section className="card-cream pixel-border p-6 mb-6">
      <button onClick={onBack} className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4"> ← POWRÓT </button>
      <h2 className="pixel-font text-lg text-amber-900 mb-6 text-center">📋 RODZAJE ADOPCJI 📋</h2>
      <div className="grid gap-4">
        
        <div className="card-orange pixel-border p-5">
          <div className="flex items-start gap-4">
            <svg viewBox="0 0 32 32" width="48" height="48" className="flex-shrink-0">
              <rect x="4" y="4" width="24" height="24" fill="#69c" /><rect x="8" y="8" width="16" height="16" fill="#9cf" /><rect x="12" y="12" width="8" height="8" fill="#fff" />
            </svg>
            <div>
              <h3 className="pixel-font text-sm text-amber-900 mb-2">🕐 ADOPCJA TYMCZASOWA</h3>
              <p className="retro-font text-xl text-amber-800 mb-3">Opiekuj się wirtualnym kotkiem przez określony czas (1 tydzień - 1 miesiąc). Idealnie dla osób, które chcą sprawdzić, jak to jest mieć kota!</p>
              <ul className="retro-font text-lg text-amber-700 list-disc list-inside">
                <li>Darmowy okres próbny 3 dni</li>
                <li>Możliwość przedłużenia</li>
                <li>Wszystkie funkcje gry dostępne</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-orange pixel-border p-5">
          <div className="flex items-start gap-4">
            <svg viewBox="0 0 32 32" width="48" height="48" className="flex-shrink-0">
              <rect x="4" y="8" width="24" height="20" fill="#c9675a" /><rect x="8" y="4" width="6" height="8" fill="#c9675a" /><rect x="18" y="4" width="6" height="8" fill="#c9675a" /><rect x="14" y="16" width="4" height="4" fill="#ff9999" />
            </svg>
            <div>
              <h3 className="pixel-font text-sm text-amber-900 mb-2">🏠 ADOPCJA STAŁA</h3>
              <p className="retro-font text-xl text-amber-800 mb-3">Twój wirtualny kot na zawsze! Kotek zostaje z Tobą na stałe, rośnie i rozwija się przez lata.</p>
              <ul className="retro-font text-lg text-amber-700 list-disc list-inside">
                <li>Jednorazowa opłata adopcyjna</li>
                <li>Ekskluzywne akcesoria</li>
                <li>Historia i wspomnienia kotka</li>
                <li>Specjalne wydarzenia sezonowe</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-orange pixel-border p-5">
          <div className="flex items-start gap-4">
            <svg viewBox="0 0 32 32" width="48" height="48" className="flex-shrink-0">
              <rect x="6" y="6" width="20" height="20" fill="#f5d89a" /><rect x="10" y="10" width="12" height="12" fill="#fc0" /><rect x="14" y="14" width="4" height="4" fill="#fff" />
            </svg>
            <div>
              <h3 className="pixel-font text-sm text-amber-900 mb-2">💫 WIRTUALNY OPIEKUN</h3>
              <p className="retro-font text-xl text-amber-800 mb-3">Wspieraj prawdziwe koty w schroniskach! Twoja wpłata pomaga realnym zwierzakom, a Ty dostajesz wirtualnego pupila.</p>
              <ul className="retro-font text-lg text-amber-700 list-disc list-inside">
                <li>100% wpłaty idzie na schroniska</li>
                <li>Certyfikat wirtualnego opiekuna</li>
                <li>Aktualizacje o prawdziwym kotku</li>
                <li>Specjalne odznaki w grze</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}