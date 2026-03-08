import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'game-container',
    backgroundColor: '#c7a26e', 
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [MainScene] 
};

export default config;