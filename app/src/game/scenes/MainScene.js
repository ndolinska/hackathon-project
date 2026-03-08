import Phaser from 'phaser';
import { EventBus } from '../EventBus';
import catOrange from '../../assets/cat_orange.png'
import hatSpriteImg from '../../assets/christmas_hat.png'
import zdj_kota from '../../assets/image-2.jpg'
import rS from '../../assets/redSofa.png';
export class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
        this.stats = {
            hunger: 50,
            happiness: 40,
            trust: 15
        };
        this.bars = {};
    }

    preload() {
        this.load.spritesheet('cat', catOrange, { 
            frameWidth: 64,  
            frameHeight: 64
        });
        this.load.image('real_cat', zdj_kota);
        this.load.spritesheet('hat', hatSpriteImg, { frameWidth: 64, frameHeight: 64 });
        this.load.image('couch', rS);
    }

    create() {
        // Paleta retro
        const colors = {
            darkest: 0x30130b,
            dark: 0x663110,
            light: 0xf2bb61,
            lightest: 0xf8d6a3
        };

        // 1. Tło i podłoga
        this.add.rectangle(300, 600, 600, 400, colors.light);
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('cat', { start: 147, end: 168 }), // Np. klatka 0 i 1 to oddychanie
            frameRate: 4, // 2 klatki na sekundę (bardzo powoli, styl retro)
            repeat: -1    // -1 oznacza pętlę w nieskończoność
        });

        this.anims.create({
            key: 'eat',
            frames: this.anims.generateFrameNumbers('cat', { start: 98, end: 101 }), // Klatki jedzenia
            frameRate: 4,
            repeat: 4     // Powtórz 4 razy
        });

        this.anims.create({
            key: 'play',
            frames: this.anims.generateFrameNumbers('cat', { start: 175, end: 182}), // Klatki zabawy
            frameRate: 4,
            repeat: 4
        });
        this.anims.create({ key: 'idle_hat', frames: this.anims.generateFrameNumbers('hat', { start: 147, end: 168 }), frameRate: 4, repeat: -1 });
        this.anims.create({ key: 'eat_hat', frames: this.anims.generateFrameNumbers('hat', { start: 98, end: 101 }), frameRate: 3, repeat: 4 });
        this.anims.create({ key: 'play_hat', frames: this.anims.generateFrameNumbers('hat', { start: 175, end: 182 }), frameRate: 4, repeat: 4 });

        this.catSprite = this.add.sprite(0, 0, 'cat');
        this.hatSprite = this.add.sprite(0, 0, 'hat').setVisible(false);
        this.couchSprite = this.add.image(100, 275, 'couch')
            .setScale(3)
            .setDepth(2)
            .setVisible(false);
        this.playerContainer = this.add.container(300, 450, [this.catSprite, this.hatSprite]);
        this.playerContainer.setScale(4).setDepth(5);
        
        this.catSprite.play('idle');
        this.hatSprite.play('idle_hat');
        

        this.drawBars(colors);
        EventBus.on('equip-item', (itemKey) => {
            if (itemKey === 'hat') {
                this.hatSprite.setVisible(true)
            }
            else if (itemKey === 'sofa') {
                this.couchSprite.setVisible(true);
                this.tweens.add({
                    targets: this.couchSprite,
                    scale: 3, // Powrót do docelowego rozmiaru
                    duration: 500,
                    ease: 'Back.easeOut' // Efekt sprężystego "wyskoczenia"
                });
            }
        });
        EventBus.on('action-feed', () => {
            if (this.stats.hunger < 100) {
                this.stats.hunger = Math.min(100, this.stats.hunger + 15);
                this.updateBars();
                
                this.catSprite.play('eat');
                if (this.hatSprite.visible) this.hatSprite.play('eat_hat');

                this.catSprite.once('animationcomplete', () => {
                    this.catSprite.play('idle');
                    if (this.hatSprite.visible) this.hatSprite.play('idle_hat'); // <- POWRÓT CZAPKI
                });
            }
        });

        EventBus.on('action-play', () => {
            if (this.stats.happiness < 100) {
                this.stats.happiness = Math.min(100, this.stats.happiness + 20);
                this.updateBars();
                
                this.catSprite.play('play');
                if (this.hatSprite.visible) this.hatSprite.play('play_hat'); // <- SYNC CZAPKI

                this.catSprite.once('animationcomplete', () => {
                    this.catSprite.play('idle');
                    if (this.hatSprite.visible) this.hatSprite.play('idle_hat'); // <- POWRÓT CZAPKI
                });
            }
        });

        EventBus.on('trust-increased', (amount) => {
            this.stats.trust = Math.min(100, this.stats.trust + amount);
            this.updateBars();
            EventBus.emit('current-trust-level', this.stats.trust);
        });

        EventBus.emit('current-scene-ready', this);
        
        // --- 5. Spadające statystyki w czasie (Timer) ---
        this.time.addEvent({
            delay: 3000, // Co 3 sekundy na potrzeby testów hackathonowych
            callback: this.decreaseStats,
            callbackScope: this,
            loop: true
        });
    }

    // Funkcja obniżająca statystyki z biegiem czasu
    decreaseStats() {
        this.stats.hunger = Math.max(0, this.stats.hunger - 2);
        this.stats.happiness = Math.max(0, this.stats.happiness - 1);
        this.updateBars();
    }

   drawBars(colors) {
        const textStyle = { fontFamily: '"Silkscreen", monospace', fontSize: '18px', fill: '#1a0000' };
        this.add.rectangle(15, 15, 330, 175, colors.light)
            .setOrigin(0, 0)
            .setStrokeStyle(3, colors.dark); 
        const createBar = (y, label, value) => {
            this.add.text(30, y, label, textStyle);
            this.add.rectangle(70, y + 30, 254, 20, colors.darkest).setOrigin(0, 0.5).setAlpha(0.3);
            const fill = this.add.rectangle(72, y + 30, (value / 100) * 250, 16, colors.darkest).setOrigin(0, 0.5);
            
            return fill;
        };
        this.bars.hunger = createBar(30, 'GŁÓD', this.stats.hunger);
        this.bars.happiness = createBar(80, 'ZABAWA', this.stats.happiness);
        this.bars.trust = createBar(130, 'ZAANGAŻOWANIE', this.stats.trust);
        this.add.rectangle(380, 15, 185, 175, colors.light)
            .setOrigin(0, 0)
            .setStrokeStyle(3, colors.dark);
        this.add.text(472, 16, 'BISZKOPT', textStyle).setOrigin(0.5, 0);
        this.add.rectangle(472, 110, 150, 150, colors.dark).setOrigin(0.5, 0.5);
    
       this.add.image(472, 110, 'real_cat')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(142, 142);
    }
    updateBars() {
        this.bars.hunger.width = (this.stats.hunger / 100) * 250;
        this.bars.happiness.width = (this.stats.happiness / 100) * 250;
        this.bars.trust.width = (this.stats.trust / 100) * 250;
    }
}