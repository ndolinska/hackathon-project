import React, { useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import { CharityShop } from './components/modals/CharityShop';
import { ActionButtons } from './components/ui/ActionButtons';
import { EventBus } from './game/EventBus';
import { Toaster } from 'react-hot-toast';
import './app.css';

// Baza kocich ciekawostek
const catFacts = [
    "Koty ze schroniska często potrzebują czasu na aklimatyzację. Cierpliwość to klucz do sukcesu!",
    "Czy wiesz, że karma to tylko część kosztów? Profilaktyka weterynaryjna jest równie ważna.",
    "Zabawa wędką buduje pewność siebie u wycofanych kotów. Pamiętaj, by pozwolić kotu 'złowić' ofiarę!",
    "Domy tymczasowe odciążają schroniska i pozwalają poznać prawdziwy charakter kota w domowych warunkach.",
    "Obserwuj zachowanie kota zmiany mogą oznaczać problemy zdrowotne.",
    "Koty mają bardzo dobry słuch potrafią usłyszeć dźwięki, których człowiek nie jest w stanie usłyszeć.",
    "Koty komunikują się z ludźmi inaczej niż z innymi kotami miau często jest skierowane właśnie do człowieka.",
    "Koty używają ogona do komunikacji, np. podniesiony ogon często oznacza radość lub przyjazne nastawienie.",
    "Powolne mruganie kota w stronę człowieka to często oznaka zaufania i sympatii.",
    "Większość kotów nie lubi nagłych zmian w otoczeniu, dlatego nowe rzeczy warto wprowadzać stopniowo.",
    "Kot, który się nudzi, może drapać meble lub niszczyć przedmioty zabawa pomaga temu zapobiegać.",
    "Regularne czesanie sierści pomaga ograniczyć ilość połykanych włosów i powstawanie kul włosowych."

];

function App() {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [activeFact, setActiveFact] = useState(null);
    const [trustLevel, setTrustLevel] = useState(15);

    useEffect(() => {
        // Nasłuchiwanie zaufania
        EventBus.on('trust-increased', (amount) => {
            setTrustLevel(prev => Math.min(100, prev + amount));
        });

        // Kiedy gracz klika nakarm/baw, losujemy ciekawostkę
        const showRandomFact = () => {
            const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
            setActiveFact(randomFact);
        };

        EventBus.on('action-feed', showRandomFact);
        EventBus.on('action-play', showRandomFact);

        return () => {
            EventBus.removeListener('trust-increased');
            EventBus.removeListener('action-feed');
            EventBus.removeListener('action-play');
        };
    }, []);

    return (
        <div className="app-layout">
            <Toaster 
                position="top-center"
                toastOptions={{
                    // Ustawienia czasu wyświetlania (w milisekundach)
                    duration: 6000, 
                    // Nasz pikselowy, retro styl z palety Gameboya
                    style: {
                        background: '#30130b', // Jasnozielone tło
                        color: '#f8d6a3',      // Ciemnozielony tekst
                        border: '4px solid #663110', // Gruba ramka
                        borderRadius: '0px',   // Zero zaokrągleń! Ostre pikselowe rogi
                        fontFamily: '"Press Start 2P", monospace',
                        fontSize: '10px',
                        padding: '16px',
                        boxShadow: '6px 6px 0px rgba(0,0,0,0.5)' // Klasyczny cień
                    },
                }}
            />
            <div className="scanlines"></div>
             
            
            {/* LEWA KOLUMNA: Ciekawostki Edukacyjne */}
            <div className="side-panel left-panel">
                {activeFact && (
                    <div className="fact-box retro-border">
                        <h3>CZY WIESZ, ŻE...</h3>
                        <p>{activeFact}</p>
                    </div>
                )}
            </div>

            {/* ŚRODKOWA KOLUMNA: Gra i Sterowanie */}
            <div className="center-panel">
                <header className="game-header">
                </header>
                
                <div className="game-wrapper retro-border">
                    <PhaserGame />
                </div>
                
                <ActionButtons onOpenShop={() => setIsShopOpen(!isShopOpen)} />
            </div>

            {/* PRAWA KOLUMNA: Sklep / Wsparcie */}
            <div className="side-panel right-panel">
                {isShopOpen && (
                    <div className="shop-wrapper retro-border">
                        <CharityShop onClose={() => setIsShopOpen(false)} />
                    </div>
                )}
            </div>

        </div>
    );
}

export default App;