import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'game-container',
    backgroundColor: '#c7a26e', // Klasyczny kolor Gameboya
    pixelArt: true, // Zatrzymuje rozmycie pikseli
    scale: {
        // Skalowanie dopasowujące się do okna, zachowując proporcje
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [MainScene] 
};

export default config;