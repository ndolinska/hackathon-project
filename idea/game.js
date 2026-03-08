const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'game-container',
    backgroundColor: '#f8d6a3',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

const colors = {
    darkest: 0x30130b,
    dark: 0x663110,
    light: 0xf2bb61,
    lightest: 0xf8d6a3
};

let stats = {
    hunger: 50,
    happiness: 40,
    trust: 15
};

function preload() {
}

function create() {
    const textStyle = { fontFamily: '"Press Start 2P"', fontSize: '12px', fill: '#371704' };
    const titleStyle = { fontFamily: '"Press Start 2P"', fontSize: '18px', fill: '#371704' };

    this.add.rectangle(300, 600, 600, 400, colors.light);
    this.add.text(20, 20, 'KOTEK BUREK', titleStyle);

   const catContainer = this.add.container(300, 450);
    catContainer.add(this.add.rectangle(0, 0, 90, 80, colors.darkest));
    catContainer.add(this.add.rectangle(-30, -50, 25, 30, colors.darkest));
    catContainer.add(this.add.rectangle(30, -50, 25, 30, colors.darkest));
    catContainer.add(this.add.text(-28, -15, '^w^', { fontFamily: 'monospace', fontSize: '24px', fill: '#ead381', fontStyle: 'bold'}));

   this.tweens.add({
        targets: catContainer,
        y: 435, 
        yoyo: true,
        repeat: -1,
        duration: 800,
        ease: 'Stepped', 
        easeParams: [3]
    });

   createStatBar(this, 30, 90, 'GLOD', colors.darkest, stats.hunger, textStyle);
    createStatBar(this, 30, 140, 'ZABAWA', colors.darkest, stats.happiness, textStyle);
    createStatBar(this, 30, 190, 'ZAUFANIE', colors.darkest, stats.trust, textStyle);

   const feedBtn = createButton(this, 120, 720, 'KARM', colors.darkest, 14);
    const playBtn = createButton(this, 300, 720, 'BAW', colors.darkest, 14);
    const shopBtn = createButton(this, 480, 720, 'SKLEP', colors.darkest, 14);
    feedBtn.on('pointerdown', () => console.log("Mniam! +Głód"));
    playBtn.on('pointerdown', () => console.log("Wędka w ruch! +Zabawa"));
    shopBtn.on('pointerdown', () => console.log("Otwieram panel dotacji/sklepu!"));
}

function update() {
}

function createStatBar(scene, x, y, label, color, value, style) {
    scene.add.text(x, y, label, style);
    
    scene.add.rectangle(x + 150, y + 6, 254, 20, color).setOrigin(0, 0.5).setAlpha(0.3);
    
    scene.add.rectangle(x + 152, y + 6, (value / 100) * 250, 16, color).setOrigin(0, 0.5);
}

function createButton(scene, x, y, text, color, fontSize = 12) {
    scene.add.rectangle(x + 3, y + 3, 90, 40, colors.dark).setAlpha(0.5); 
    
    const btnBg = scene.add.rectangle(x, y, 140, 50, color).setInteractive({ useHandCursor: true });
    
    const btnText = scene.add.text(x, y, text, { fontFamily: '"Press Start 2P"', fontSize: `${fontSize}px`, fill: '#efdc85' }).setOrigin(0.5);
    
    btnBg.on('pointerdown', () => {
        btnBg.y += 4;
        btnText.y += 4;
    });
    btnBg.on('pointerup', () => {
        btnBg.y -= 4;
        btnText.y -= 4;
    });
    btnBg.on('pointerout', () => {
        if(btnBg.y > y) {
            btnBg.y = y;
            btnText.y = y;
        }
    });

    return btnBg;
}