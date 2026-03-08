import React, { useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import { EventBus } from './game/EventBus';
import './styles/app.css';

// Komponenty UI
import Header from './components/ui/Header';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import Decorations from './components/ui/Decorations';

// Sekcje
import Tutorial from './components/sections/Tutorial';
import Gallery from './components/sections/Gallery';
import Adoption from './components/sections/Adoption';
import Donate from './components/sections/Donate';

export default function App() {
    // Stan nawigacji (null = menu, inne to podstrony lub 'game')
    const [activeSection, setActiveSection] = useState(null);
    
    // Stany gry
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [trustLevel, setTrustLevel] = useState(15);

    // Funkcja powrotu do menu głównego
    const goBack = () => setActiveSection(null);

    // Nasłuchiwanie na eventy z Phasera
    useEffect(() => {
        // Nasłuchujemy, co się dzieje w grze
        EventBus.on('trust-increased', (newLevel) => {
            setTrustLevel(newLevel);
            // Kiedy zaufanie rośnie, możemy to zapisać do bazy!
        });

        return () => {
            EventBus.removeListener('trust-increased');
        };
    }, []);

    return (
        <div className="min-h-screen retro-checkered-bg overflow-auto">
            {/* Nakładka retro na cały ekran */}
            <div className="scanlines"></div>
            
            {/* Animowane roślinki i półki w tle */}
            <Decorations />

            <div className="relative min-h-full w-full p-4 md:p-8" style={{ zIndex: 1 }}>
                <div className="max-w-4xl mx-auto">
                    
                    {/* Wyświetlamy główny nagłówek tylko, jeśli nie jesteśmy w trakcie gry */}
                    {activeSection !== 'game' && <Header />}

                    {/* MENU GŁÓWNE */}
                    {!activeSection && <Navigation onSelectSection={setActiveSection} />}
                    
                    {/* PODSTRONY */}
                    {activeSection === 'tutorial' && (
                        <Tutorial 
                            onBack={goBack} 
                            // Opcjonalnie: Przekazujemy funkcję do przycisku w Tutorialu, by z niego uruchomić grę
                            onStartGame={() => setActiveSection('game')} 
                        />
                    )}
                    {activeSection === 'gallery' && <Gallery onBack={goBack} />}
                    {activeSection === 'adoption' && <Adoption onBack={goBack} />}
                    {activeSection === 'donate' && <Donate onBack={goBack} />}

                    {/* === TRYB GRY TAMAGOTCHI === */}
                    {activeSection === 'game' && (
                        <div className="flex flex-col items-center animate-fadeIn">
                            <button 
                                onClick={goBack} 
                                className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4 self-start hover:bg-gray-600"
                            >
                                ← POWRÓT DO MENU
                            </button>
                            
                            {/* Nagłówek statystyk nad grą */}
                            <header className="card-cream pixel-border p-4 mb-6 text-center w-full max-w-[600px]">
                                <h1 className="pixel-font text-xl text-amber-900">Kotek Burek</h1>
                                <p className="retro-font text-2xl text-amber-800 mt-2">Zaufanie: {trustLevel}%</p>
                            </header>
                            
                            {/* Nasza gra w Phaserze */}
                            <div className="flex justify-center w-full rounded-2xl overflow-hidden shadow-2xl">
                                <PhaserGame />
                            </div>
                            
                            {/* Tu w przyszłości odkomentujesz przyciski akcji: */}
                            {/* <div className="mt-6"> */}
                            {/* <ActionButtons onOpenShop={() => setIsShopOpen(true)} /> */}
                            {/* </div> */}

                            {/* Reactowy Modal Sklepu: */}
                            {/* isShopOpen && <CharityShop onClose={() => setIsShopOpen(false)} /> */}
                        </div>
                    )}

                    {/* Wyświetlamy stopkę tylko na standardowych podstronach */}
                    {activeSection !== 'game' && <Footer />}
                    
                </div>
            </div>
        </div>
    );
}