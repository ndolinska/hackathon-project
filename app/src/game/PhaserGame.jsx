import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import config from './config';
import { EventBus } from './EventBus';

export const PhaserGame = ({ currentActiveScene }) => {
    const gameRef = useRef(null);

    useEffect(() => {
        // Inicjalizacja gry tylko raz
        if (!gameRef.current) {
            const phaserConfig = {
                ...config,
                parent: 'game-container' 
            };
            gameRef.current = new Phaser.Game(phaserConfig);
            EventBus.emit('current-scene-ready', gameRef.current.scene.keys.MainScene);
        }
        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div id="game-container"></div>;
};