import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { EventBus } from './EventBus';

export const PhaserGame = ({ currentActiveScene }) => {
    const gameRef = useRef(null);

    useEffect(() => {
        // Inicjalizacja gry tylko raz
        if (!gameRef.current) {
            const phaserConfig = {
                //...config,
                parent: 'game-container' // ID diva poniżej
            };
            gameRef.current = new Phaser.Game(phaserConfig);
            
            // Informujemy Reacta, gdy gra jest w pełni gotowa
            EventBus.emit('current-scene-ready', gameRef.current.scene.keys.MainScene);
        }

        return () => {
            // Sprzątanie pamięci przy wychodzeniu z aplikacji
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div id="game-container"></div>;
};