import React, { useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import { EventBus } from './game/EventBus';
import './styles/app.css';

// komponenty UI
import Header from './components/ui/Header';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import Decorations from './components/ui/Decorations';

// sekcje
import Tutorial from './components/sections/Tutorial';
import Gallery from './components/sections/Gallery';
import Adoption from './components/sections/Adoption';
import Donate from './components/sections/Donate';

export default function App() {
    const [activeSection, setActiveSection] = useState(null);
    
    // stany gry
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [trustLevel, setTrustLevel] = useState(15);

    // funkcja powrotu do menu
    const goBack = () => setActiveSection(null);

    useEffect(() => {
        EventBus.on('trust-increased', (newLevel) => {
            setTrustLevel(newLevel);
        });

        return () => {
            EventBus.removeListener('trust-increased');
        };
    }, []);

    return (
        <div className="min-h-screen retro-checkered-bg overflow-auto">
            <div className="scanlines"></div>

            <div className="relative min-h-full w-full p-4 md:p-8" style={{ zIndex: 1 }}>
                <div className="max-w-4xl mx-auto">

                    {activeSection !== 'game' && <Header />}

                    {/* MENU GLOWNE */}
                    {!activeSection && <Navigation onSelectSection={setActiveSection} />}
                    
                    {/* PODSTRONY */}
                    {activeSection === 'tutorial' && (
                        <Tutorial 
                            onBack={goBack}
                            onStartGame={() => setActiveSection('game')} 
                        />
                    )}
                    {activeSection === 'gallery' && <Gallery onBack={goBack} />}
                    {activeSection === 'adoption' && <Adoption onBack={goBack} />}
                    {activeSection === 'donate' && <Donate onBack={goBack} />}

                    {activeSection === 'game' && (
                        <div className="flex flex-col items-center animate-fadeIn">
                            <button 
                                onClick={goBack} 
                                className="pixel-btn bg-gray-500 text-white px-3 py-2 pixel-font text-xs mb-4 self-start hover:bg-gray-600"
                            >
                                ← POWRÓT DO MENU
                            </button>
                            
                            <header className="card-cream pixel-border p-4 mb-6 text-center w-full max-w-[600px]">
                                <h1 className="pixel-font text-xl text-amber-900">Kotek Burek</h1>
                                <p className="retro-font text-2xl text-amber-800 mt-2">Zaufanie: {trustLevel}%</p>
                            </header>
                            
                            <div className="flex justify-center w-full rounded-2xl overflow-hidden shadow-2xl">
                                <PhaserGame />
                            </div>
                          
                        </div>
                    )}

                    {activeSection !== 'game' && <Footer />}
                    
                </div>
            </div>
        </div>
    );
}