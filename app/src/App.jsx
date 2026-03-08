import React, { useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import { CharityShop } from './components/modals/CharityShop';
import { ActionButtons } from './components/ui/ActionButtons';
import { EventBus } from './game/EventBus';
import { Toaster } from 'react-hot-toast';
import catFacts from './game/catFacts';
import './app.css';

// Baza kocich ciekawostek

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
                    style: {
                        background: '#30130b', 
                        color: '#f8d6a3', 
                        border: '4px solid #663110', 
                        borderRadius: '0px',   
                        fontFamily: '"Press Start 2P", monospace',
                        fontSize: '10px',
                        padding: '16px',
                        boxShadow: '6px 6px 0px rgba(0,0,0,0.5)' 
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