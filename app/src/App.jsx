import React, { useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import { EventBus } from './game/EventBus';
import './app.css';

function App() {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [trustLevel, setTrustLevel] = useState(15);

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
        <div className="app-container">
            <header>
                <h1>Kotek Burek - Zaufanie: {trustLevel}%</h1>
            </header>
            
            {/* Nasza gra w Phaserze */}
            <PhaserGame />
            
            {/* Reactowe przyciski sterujące grą */}
            {/* <ActionButtons onOpenShop={() => setIsShopOpen(true)} /> */}

            {/* Reactowy Modal Sklepu */}
            {/*isShopOpen && <CharityShop onClose={() => setIsShopOpen(false)} /> */}
        </div>
    );
}

export default App;