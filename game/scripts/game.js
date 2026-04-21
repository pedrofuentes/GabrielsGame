// ⚽ ¡Gol de Gabriel! — A tap-to-kick soccer game
// For Gabriel (age 3) — Built with Phaser 3
// Controls: Tap anywhere to kick the ball!

// ================================================
// HELPERS
// ================================================

function canvasRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
}

// ================================================
// BOOT SCENE — Creates textures programmatically
// ================================================

class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    create() {
        this.createPlayerTexture();
        this.createGoalkeeperTexture();
        this.createOpponentTexture();
        this.createBallTexture();
        this.createConfettiTextures();
        this.scene.start('Game');
    }

    createPlayerTexture() {
        const w = 80, h = 150;
        const canvas = this.textures.createCanvas('player', w, h);
        const ctx = canvas.getContext();
        this.drawCharacter(ctx, w, h, '#2196F3', '#1976D2', false);
        canvas.refresh();
    }

    createGoalkeeperTexture() {
        const w = 80, h = 155;
        const canvas = this.textures.createCanvas('goalkeeper', w, h);
        const ctx = canvas.getContext();
        this.drawCharacter(ctx, w, h, '#333333', '#222222', true);
        canvas.refresh();
    }

    createOpponentTexture() {
        const w = 80, h = 150;
        const canvas = this.textures.createCanvas('opponent', w, h);
        const ctx = canvas.getContext();
        this.drawCharacter(ctx, w, h, '#1A1A1A', '#111111', false);
        canvas.refresh();
    }

    drawCharacter(ctx, w, h, jerseyColor, jerseyDark, isGK) {
        const cx = w / 2;
        const baseY = h;

        // Shoes
        ctx.fillStyle = '#222222';
        canvasRoundedRect(ctx, cx - 24, baseY - 14, 18, 14, 3);
        canvasRoundedRect(ctx, cx + 6, baseY - 14, 18, 14, 3);
        // Shoe details (studs)
        ctx.fillStyle = '#555555';
        ctx.fillRect(cx - 22, baseY - 2, 3, 2);
        ctx.fillRect(cx - 16, baseY - 2, 3, 2);
        ctx.fillRect(cx + 10, baseY - 2, 3, 2);
        ctx.fillRect(cx + 16, baseY - 2, 3, 2);

        // Socks
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(cx - 20, baseY - 28, 14, 16);
        ctx.fillRect(cx + 6, baseY - 28, 14, 16);

        // Legs (skin)
        ctx.fillStyle = '#DEAB7A';
        ctx.fillRect(cx - 18, baseY - 38, 12, 12);
        ctx.fillRect(cx + 8, baseY - 38, 12, 12);

        // Shorts
        ctx.fillStyle = '#FFFFFF';
        canvasRoundedRect(ctx, cx - 24, baseY - 55, 48, 20, 5);

        // Body (jersey)
        ctx.fillStyle = jerseyColor;
        canvasRoundedRect(ctx, cx - 27, baseY - 88, 54, 36, 7);

        // Jersey collar
        ctx.fillStyle = jerseyDark;
        canvasRoundedRect(ctx, cx - 10, baseY - 90, 20, 6, 3);

        // Arms (skin)
        ctx.fillStyle = '#DEAB7A';
        canvasRoundedRect(ctx, cx - 35, baseY - 80, 12, 22, 4);
        canvasRoundedRect(ctx, cx + 23, baseY - 80, 12, 22, 4);

        // Sleeves
        ctx.fillStyle = jerseyColor;
        canvasRoundedRect(ctx, cx - 35, baseY - 88, 12, 12, 4);
        canvasRoundedRect(ctx, cx + 23, baseY - 88, 12, 12, 4);

        // GK gloves
        if (isGK) {
            ctx.fillStyle = '#FF9800';
            canvasRoundedRect(ctx, cx - 37, baseY - 60, 14, 14, 4);
            canvasRoundedRect(ctx, cx + 23, baseY - 60, 14, 14, 4);
        }

        // Neck
        ctx.fillStyle = '#DEAB7A';
        ctx.fillRect(cx - 6, baseY - 96, 12, 10);

        // Head
        const headCY = baseY - 118;
        const headR = 24;

        ctx.fillStyle = '#DEAB7A';
        ctx.beginPath();
        ctx.arc(cx, headCY, headR, 0, Math.PI * 2);
        ctx.fill();

        // Hair
        const hairColor = isGK ? '#222222' : '#4A3728';
        ctx.fillStyle = hairColor;

        if (!isGK) {
            // Anime spiky hair
            ctx.beginPath();
            ctx.arc(cx, headCY - 8, headR + 1, Math.PI + 0.2, -0.2, false);
            ctx.fill();

            // Spiky tufts
            ctx.beginPath();
            ctx.moveTo(cx - 22, headCY - 20);
            ctx.quadraticCurveTo(cx - 18, headCY - 42, cx - 8, headCY - 26);
            ctx.quadraticCurveTo(cx - 4, headCY - 46, cx + 4, headCY - 28);
            ctx.quadraticCurveTo(cx + 8, headCY - 44, cx + 16, headCY - 24);
            ctx.quadraticCurveTo(cx + 20, headCY - 38, cx + 24, headCY - 18);
            ctx.lineTo(cx + 25, headCY - 8);
            ctx.arc(cx, headCY - 8, headR + 1, -0.2, Math.PI + 0.2, true);
            ctx.fill();
        } else {
            // Short buzz cut for GK
            ctx.beginPath();
            ctx.arc(cx, headCY - 5, headR + 2, Math.PI + 0.3, -0.3, false);
            ctx.fill();
        }

        // Ears
        ctx.fillStyle = '#D4A06A';
        ctx.beginPath();
        ctx.arc(cx - headR + 2, headCY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + headR - 2, headCY, 5, 0, Math.PI * 2);
        ctx.fill();

        // Eyes (big anime style)
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(cx - 9, headCY + 2, 7, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + 9, headCY + 2, 7, 9, 0, 0, Math.PI * 2);
        ctx.fill();

        // Iris
        ctx.fillStyle = isGK ? '#455A64' : '#1A237E';
        ctx.beginPath();
        ctx.ellipse(cx - 7, headCY + 3, 5, 7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + 11, headCY + 3, 5, 7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pupil
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(cx - 6, headCY + 4, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + 12, headCY + 4, 3, 0, Math.PI * 2);
        ctx.fill();

        // Eye shine
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx - 5, headCY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + 13, headCY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx - 9, headCY + 6, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + 9, headCY + 6, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Eyebrows
        ctx.strokeStyle = hairColor;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 16, headCY - 10);
        ctx.lineTo(cx - 3, headCY - 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + 3, headCY - 8);
        ctx.lineTo(cx + 16, headCY - 10);
        ctx.stroke();

        // Mouth
        ctx.strokeStyle = '#8B5E3C';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, headCY + 12, 6, 0.2, Math.PI - 0.2);
        ctx.stroke();

        // Blush
        ctx.fillStyle = 'rgba(255, 140, 140, 0.25)';
        ctx.beginPath();
        ctx.ellipse(cx - 17, headCY + 8, 5, 3, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + 17, headCY + 8, 5, 3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Jersey number
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isGK ? '1' : '10', cx, baseY - 70);
    }

    createBallTexture() {
        const size = 44;
        const r = 19;
        const canvas = this.textures.createCanvas('ball', size, size);
        const ctx = canvas.getContext();
        const cx = size / 2, cy = size / 2;

        // White ball
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();

        // Pentagon pattern
        ctx.fillStyle = '#333333';
        this.drawPentagon(ctx, cx, cy, 7);
        this.drawPentagon(ctx, cx, cy - 13, 4);
        this.drawPentagon(ctx, cx + 12, cy - 4, 4);
        this.drawPentagon(ctx, cx + 8, cy + 10, 4);
        this.drawPentagon(ctx, cx - 8, cy + 10, 4);
        this.drawPentagon(ctx, cx - 12, cy - 4, 4);

        // Outline
        ctx.strokeStyle = '#666666';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();

        // Shine
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(cx - 5, cy - 6, 5, 0, Math.PI * 2);
        ctx.fill();

        canvas.refresh();
    }

    drawPentagon(ctx, cx, cy, r) {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }

    createConfettiTextures() {
        const colors = [0xFF5252, 0xFF9800, 0xFFEB3B, 0x4CAF50, 0x2196F3, 0x9C27B0, 0xFF4081, 0x00BCD4];
        colors.forEach((color, i) => {
            const g = this.add.graphics();
            g.fillStyle(color);
            g.fillRect(0, 0, 10, 10);
            g.generateTexture(`confetti_${i}`, 10, 10);
            g.destroy();
        });
    }
}

// ================================================
// GAME SCENE — Main gameplay
// ================================================

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.score = 0;
        this.state = 'title';
        this.towerBlocks = [];
        this.activeTweens = [];

        // Initialize sound
        soundGen.init();

        // Build the scene (back to front)
        this.createSky();
        this.createField();
        this.createGoalNet();
        this.createGoalPosts();
        this.createOpponents();
        this.createGoalkeeper();
        this.createPlayer();
        this.createBall();
        this.createScoreboardTower();
        this.createUI();
        this.createConfettiPool();

        // Input
        this.input.on('pointerdown', () => this.onTap());

        // Show title screen
        this.showTitle();
    }

    // ─── SCENE CONSTRUCTION ───

    createSky() {
        // Gradient sky using thin horizontal strips
        const sky = this.add.graphics();
        sky.setDepth(0);
        for (let y = 0; y < 490; y++) {
            const t = y / 490;
            const r = Math.floor(66 + t * (150 - 66));
            const g = Math.floor(165 + t * (210 - 165));
            const b = Math.floor(245 + t * (250 - 245));
            sky.fillStyle(Phaser.Display.Color.GetColor(r, g, b));
            sky.fillRect(0, y, 1280, 1);
        }

        // Clouds
        const cloudData = [
            { x: 180, y: 80, s: 1 },
            { x: 550, y: 50, s: 1.3 },
            { x: 850, y: 110, s: 0.9 },
            { x: 1100, y: 65, s: 1.1 }
        ];
        cloudData.forEach(c => {
            const cloud = this.add.graphics();
            cloud.setDepth(0);
            cloud.fillStyle(0xFFFFFF, 0.85);
            cloud.fillCircle(0, 0, 28 * c.s);
            cloud.fillCircle(22 * c.s, -8, 22 * c.s);
            cloud.fillCircle(-18 * c.s, -3, 20 * c.s);
            cloud.fillCircle(12 * c.s, 6, 18 * c.s);
            cloud.fillCircle(-8 * c.s, 7, 16 * c.s);
            cloud.setPosition(c.x, c.y);
            this.tweens.add({
                targets: cloud,
                x: c.x + 25,
                duration: 7000 + Math.random() * 5000,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });
    }

    createField() {
        const field = this.add.graphics();
        field.setDepth(1);

        // Main grass with stripes
        for (let i = 0; i < 10; i++) {
            const color = i % 2 === 0 ? 0x43A047 : 0x4CAF50;
            field.fillStyle(color);
            field.fillRect(i * 128, 485, 128, 235);
        }

        // Grass edge highlight
        field.fillStyle(0x66BB6A);
        field.fillRect(0, 483, 1280, 4);

        // Field lines
        field.lineStyle(2, 0xFFFFFF, 0.4);
        field.lineBetween(640, 487, 640, 720);
        field.strokeCircle(640, 590, 50);
        field.fillStyle(0xFFFFFF, 0.4);
        field.fillCircle(640, 590, 4);

        // Penalty area (right side)
        field.lineStyle(2, 0xFFFFFF, 0.3);
        field.strokeRect(980, 500, 300, 180);
        // Small box
        field.strokeRect(1080, 530, 200, 120);
    }

    createGoalNet() {
        const net = this.add.graphics();
        net.setDepth(2);
        const gx = 1090, gy = 345, gw = 90, gh = 140;

        // Net background
        net.fillStyle(0xFFFFFF, 0.08);
        net.fillRect(gx, gy, gw, gh);

        // Net lines
        net.lineStyle(1, 0xCCCCCC, 0.3);
        for (let y = gy; y <= gy + gh; y += 14) {
            net.lineBetween(gx, y, gx + gw, y);
        }
        for (let x = gx; x <= gx + gw; x += 14) {
            net.lineBetween(x, gy, x, gy + gh);
        }

        this.goalBounds = { x: gx, y: gy, w: gw, h: gh };
    }

    createGoalPosts() {
        const posts = this.add.graphics();
        posts.setDepth(5);
        const gx = 1090, gy = 345, gw = 90, gh = 140;

        // Posts (white with shadow)
        posts.fillStyle(0xDDDDDD);
        posts.fillRect(gx + 2, gy + 2, 7, gh);
        posts.fillRect(gx + 2, gy + 2, gw, 7);

        posts.fillStyle(0xFFFFFF);
        posts.fillRect(gx, gy, 7, gh);       // Left post
        posts.fillRect(gx, gy, gw, 7);       // Crossbar
        posts.fillRect(gx + gw - 3, gy, 7, gh); // Right post (back)
    }

    createOpponents() {
        // 2 opponent players (black jerseys) as decoration
        const positions = [
            { x: 650, y: 505 },
            { x: 820, y: 530 }
        ];
        positions.forEach(pos => {
            const opp = this.add.sprite(pos.x, pos.y, 'opponent');
            opp.setOrigin(0.5, 1);
            opp.setDepth(3);
            opp.setScale(0.75);
            opp.setAlpha(0.85);
            // Subtle idle sway
            this.tweens.add({
                targets: opp,
                y: pos.y - 2,
                duration: 900 + Math.random() * 400,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });
    }

    createGoalkeeper() {
        this.gkStartX = 1060;
        this.gkStartY = 485;
        this.goalkeeper = this.add.sprite(this.gkStartX, this.gkStartY, 'goalkeeper');
        this.goalkeeper.setOrigin(0.5, 1);
        this.goalkeeper.setDepth(4);
        this.startGKIdle();
    }

    createPlayer() {
        this.playerStartX = 350;
        this.playerStartY = 488;
        this.player = this.add.sprite(this.playerStartX, this.playerStartY, 'player');
        this.player.setOrigin(0.5, 1);
        this.player.setDepth(4);
        this.startPlayerIdle();
    }

    createBall() {
        this.ballStartX = 410;
        this.ballStartY = 472;
        this.ball = this.add.sprite(this.ballStartX, this.ballStartY, 'ball');
        this.ball.setOrigin(0.5, 0.5);
        this.ball.setDepth(6);
    }

    createScoreboardTower() {
        this.towerContainer = this.add.container(90, 0);
        this.towerContainer.setDepth(8);

        // Foundation
        const foundation = this.add.graphics();
        foundation.fillStyle(0x795548);
        foundation.fillRoundedRect(-30, 452, 60, 22, 4);
        // Door
        foundation.fillStyle(0x5D4037);
        foundation.fillRoundedRect(-8, 456, 16, 18, { tl: 3, tr: 3, bl: 0, br: 0 });
        this.towerContainer.add(foundation);

        // Roof
        this.roof = this.add.graphics();
        this.roof.fillStyle(0xD32F2F);
        this.roof.beginPath();
        this.roof.moveTo(-34, 0);
        this.roof.lineTo(34, 0);
        this.roof.lineTo(0, -22);
        this.roof.closePath();
        this.roof.fill();
        this.roof.setPosition(0, 452);
        this.towerContainer.add(this.roof);

        // Score text
        this.scoreText = this.add.text(90, 420, '⚽ 0', {
            fontFamily: 'Arial, sans-serif',
            fontSize: '28px',
            color: '#FFFFFF',
            fontStyle: 'bold',
            stroke: '#000000',
            strokeThickness: 4,
            align: 'center'
        }).setOrigin(0.5, 1).setDepth(9);
    }

    addTowerBlock() {
        const blockColors = [0xFF5252, 0xFF9800, 0xFFEB3B, 0x66BB6A, 0x42A5F5];
        const idx = this.towerBlocks.length;
        const color = blockColors[idx % blockColors.length];

        const block = this.add.graphics();
        block.fillStyle(color);
        block.fillRoundedRect(-26, 0, 52, 26, 3);

        // Windows
        block.fillStyle(0xFFFFFF, 0.8);
        block.fillRoundedRect(-16, 4, 10, 10, 2);
        block.fillRoundedRect(6, 4, 10, 10, 2);
        // Window cross lines
        block.lineStyle(1, color, 0.5);
        block.lineBetween(-11, 4, -11, 14);
        block.lineBetween(-16, 9, -6, 9);
        block.lineBetween(11, 4, 11, 14);
        block.lineBetween(6, 9, 16, 9);

        const targetY = 452 - (idx + 1) * 28;
        block.setPosition(0, targetY + 50);
        block.setAlpha(0);
        block.setScale(0.3);

        this.towerContainer.add(block);
        this.towerBlocks.push(block);

        // Animate block appearing
        this.tweens.add({
            targets: block,
            y: targetY,
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 500,
            ease: 'Back.easeOut'
        });

        // Move roof up
        this.tweens.add({
            targets: this.roof,
            y: targetY,
            duration: 500,
            ease: 'Back.easeOut'
        });

        // Move score text up
        this.tweens.add({
            targets: this.scoreText,
            y: targetY - 8,
            duration: 500,
            ease: 'Back.easeOut'
        });
    }

    createUI() {
        // ¡GOOOL! text
        this.goolText = this.add.text(640, 300, '¡GOOOL!', {
            fontFamily: 'Arial Black, Impact, sans-serif',
            fontSize: '110px',
            color: '#FFD700',
            stroke: '#8B6914',
            strokeThickness: 10,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 8, fill: true }
        }).setOrigin(0.5).setAlpha(0).setScale(0).setDepth(12);

        // ¡Casi! text
        this.casiText = this.add.text(640, 350, '¡Casi! ¡Otra vez!', {
            fontFamily: 'Arial, sans-serif',
            fontSize: '52px',
            color: '#FFFFFF',
            stroke: '#333333',
            strokeThickness: 6,
            shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 4, fill: true }
        }).setOrigin(0.5).setAlpha(0).setDepth(12);

        // ¡CAMPEÓN! text
        this.championText = this.add.text(640, 260, '¡CAMPEÓN! 🏆', {
            fontFamily: 'Arial Black, Impact, sans-serif',
            fontSize: '90px',
            color: '#FFD700',
            stroke: '#8B6914',
            strokeThickness: 8,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 8, fill: true }
        }).setOrigin(0.5).setAlpha(0).setScale(0).setDepth(12);

        // Tap instruction
        this.tapText = this.add.text(640, 665, '👆 ¡Toca para patear!', {
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            color: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5).setAlpha(0).setDepth(10);
    }

    createConfettiPool() {
        this.confettiPool = [];
        for (let i = 0; i < 60; i++) {
            const c = this.add.sprite(0, 0, `confetti_${i % 8}`);
            c.setAlpha(0);
            c.setScale(Phaser.Math.FloatBetween(0.8, 1.8));
            c.setDepth(11);
            this.confettiPool.push(c);
        }
    }

    // ─── IDLE ANIMATIONS ───

    startPlayerIdle() {
        if (this.playerIdleTween) this.playerIdleTween.stop();
        this.playerIdleTween = this.tweens.add({
            targets: this.player,
            y: this.playerStartY - 3,
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    startGKIdle() {
        if (this.gkIdleTween) this.gkIdleTween.stop();
        this.gkIdleTween = this.tweens.add({
            targets: this.goalkeeper,
            x: this.gkStartX + 15,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    stopIdleAnimations() {
        if (this.playerIdleTween) { this.playerIdleTween.stop(); this.playerIdleTween = null; }
        if (this.gkIdleTween) { this.gkIdleTween.stop(); this.gkIdleTween = null; }
    }

    // ─── GAME STATES ───

    showTitle() {
        this.state = 'title';

        this.titleOverlay = this.add.graphics();
        this.titleOverlay.setDepth(20);
        this.titleOverlay.fillStyle(0x000000, 0.55);
        this.titleOverlay.fillRect(0, 0, 1280, 720);

        this.titleText = this.add.text(640, 240, '⚽ ¡Gol de Gabriel! ⚽', {
            fontFamily: 'Arial Black, Impact, sans-serif',
            fontSize: '68px',
            color: '#FFD700',
            stroke: '#8B6914',
            strokeThickness: 8,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 10, fill: true },
            align: 'center'
        }).setOrigin(0.5).setDepth(21);

        this.subtitleText = this.add.text(640, 360, '👆 ¡Toca para jugar!', {
            fontFamily: 'Arial, sans-serif',
            fontSize: '38px',
            color: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 5
        }).setOrigin(0.5).setDepth(21);

        // Animated soccer ball on title
        this.titleBall = this.add.sprite(640, 480, 'ball');
        this.titleBall.setScale(2);
        this.titleBall.setDepth(21);
        this.tweens.add({
            targets: this.titleBall,
            y: 450,
            angle: 360,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add({
            targets: this.subtitleText,
            scale: 1.08,
            duration: 700,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add({
            targets: this.titleText,
            y: 235,
            duration: 1200,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    startGame() {
        this.state = 'starting';
        this.tweens.add({
            targets: [this.titleOverlay, this.titleText, this.subtitleText, this.titleBall],
            alpha: 0,
            duration: 400,
            onComplete: () => {
                this.titleOverlay.destroy();
                this.titleText.destroy();
                this.subtitleText.destroy();
                this.titleBall.destroy();
                // Short delay before ready, so whistle plays clearly
                this.time.delayedCall(200, () => this.setReady());
            }
        });
    }

    setReady() {
        this.state = 'ready';

        // Show tap instruction
        this.tapText.setAlpha(1);
        if (this.tapTextTween) this.tapTextTween.stop();
        this.tapTextTween = this.tweens.add({
            targets: this.tapText,
            scale: 1.06,
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Pulse ball
        if (this.ballPulseTween) this.ballPulseTween.stop();
        this.ball.setScale(1);
        this.ballPulseTween = this.tweens.add({
            targets: this.ball,
            scale: 1.12,
            duration: 500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    onTap() {
        if (this.state === 'title') {
            soundGen.resume();
            soundGen.playWhistle();
            this.startGame();
        } else if (this.state === 'ready') {
            this.kickBall();
        }
    }

    // ─── KICK MECHANIC ───

    kickBall() {
        this.state = 'kicking';

        // Stop ready-state animations
        if (this.tapTextTween) { this.tapTextTween.stop(); this.tapTextTween = null; }
        if (this.ballPulseTween) { this.ballPulseTween.stop(); this.ballPulseTween = null; }
        this.tapText.setAlpha(0);
        this.ball.setScale(1);

        // Stop idle animations
        this.stopIdleAnimations();

        // Play kick sound
        soundGen.playKick();

        // Determine outcome
        const isGoal = Math.random() < 0.85;

        // Goal target position
        const goalTargetX = isGoal ?
            Phaser.Math.Between(1100, 1165) :
            this.gkStartX + Phaser.Math.Between(-5, 10);
        const goalTargetY = isGoal ?
            Phaser.Math.Between(365, 460) :
            Phaser.Math.Between(400, 450);

        // Player kick animation (lean back then kick forward)
        this.tweens.add({
            targets: this.player,
            angle: -20,
            duration: 150,
            yoyo: true,
            ease: 'Power2'
        });

        // Player rushes forward slightly
        this.tweens.add({
            targets: this.player,
            x: this.playerStartX + 30,
            duration: 200,
            ease: 'Power1'
        });

        // Ball flight with arc
        const startX = this.ball.x;
        const startY = this.ball.y;
        const arcHeight = Phaser.Math.Between(100, 160);
        this.ballArc = { t: 0 };

        this.tweens.add({
            targets: this.ballArc,
            t: 1,
            duration: 850,
            ease: 'Power1.easeOut',
            onUpdate: () => {
                const t = this.ballArc.t;
                this.ball.x = Phaser.Math.Linear(startX, goalTargetX, t);
                this.ball.y = Phaser.Math.Linear(startY, goalTargetY, t) - arcHeight * 4 * t * (1 - t);
            },
            onComplete: () => {
                if (isGoal) {
                    this.goalScored();
                } else {
                    this.goalSaved();
                }
            }
        });

        // Ball spin
        this.tweens.add({
            targets: this.ball,
            angle: this.ball.angle + 720,
            duration: 850,
            ease: 'Linear'
        });

        // Ball scale (gets smaller as it travels)
        this.tweens.add({
            targets: this.ball,
            scale: 0.85,
            duration: 850,
            ease: 'Linear'
        });

        // Goalkeeper reaction
        if (isGoal) {
            // GK dives the wrong way (or too late)
            const diveDir = Math.random() > 0.5 ? 1 : -1;
            this.time.delayedCall(450, () => {
                this.tweens.add({
                    targets: this.goalkeeper,
                    x: this.goalkeeper.x + diveDir * 40,
                    y: this.gkStartY + 12,
                    angle: diveDir * 35,
                    duration: 350,
                    ease: 'Power2'
                });
            });
        } else {
            // GK moves to intercept
            this.time.delayedCall(300, () => {
                this.tweens.add({
                    targets: this.goalkeeper,
                    x: goalTargetX - 15,
                    y: goalTargetY + 30,
                    duration: 500,
                    ease: 'Power2'
                });
            });
        }
    }

    // ─── GOAL SCORED ───

    goalScored() {
        this.state = 'goal_scored';
        this.score++;

        // Sound: goal chime + crowd cheer
        soundGen.playGoalChime();
        setTimeout(() => soundGen.playCrowdCheer(), 300);

        // Update score text
        this.scoreText.setText(`⚽ ${this.score}`);

        // Add tower block
        this.addTowerBlock();
        soundGen.playTowerBlock();

        // Show ¡GOOOL!with dramatic entrance
        this.goolText.setAlpha(1).setScale(0).setAngle(-5);
        this.tweens.add({
            targets: this.goolText,
            scale: 1,
            angle: 0,
            duration: 400,
            ease: 'Back.easeOut'
        });

        // Player celebration — jump up and down
        this.tweens.add({
            targets: this.player,
            y: this.playerStartY - 50,
            duration: 250,
            yoyo: true,
            repeat: 3,
            ease: 'Sine.easeOut'
        });

        // Player pumps fist (tilt)
        this.tweens.add({
            targets: this.player,
            angle: { from: -10, to: 10 },
            duration: 200,
            yoyo: true,
            repeat: 3
        });

        // Camera shake
        this.cameras.main.shake(300, 0.008);

        // Confetti!
        this.showConfetti();

        // Check for champion
        const isChampion = this.score >= 5;

        // After celebration
        this.time.delayedCall(2200, () => {
            this.tweens.add({
                targets: this.goolText,
                alpha: 0,
                scale: 0,
                duration: 300
            });

            if (isChampion) {
                this.time.delayedCall(400, () => this.showChampion());
            } else {
                this.time.delayedCall(300, () => this.resetPlay());
            }
        });
    }

    // ─── GOAL SAVED ───

    goalSaved() {
        this.state = 'goal_saved';

        // Sound: gentle miss
        soundGen.playMiss();

        // Show ¡Casi! text
        this.casiText.setAlpha(0).setY(360);
        this.tweens.add({
            targets: this.casiText,
            y: 340,
            alpha: 1,
            duration: 300,
            ease: 'Back.easeOut'
        });

        // After brief pause
        this.time.delayedCall(1300, () => {
            this.tweens.add({
                targets: this.casiText,
                alpha: 0,
                duration: 200
            });
            this.time.delayedCall(300, () => this.resetPlay());
        });
    }

    // ─── CHAMPION ───

    showChampion() {
        this.state = 'champion';

        // Sound: champion fanfare!
        soundGen.playChampionFanfare();

        this.championText.setAlpha(1).setScale(0);
        this.tweens.add({
            targets: this.championText,
            scale: 1,
            duration: 600,
            ease: 'Back.easeOut'
        });

        // Extra confetti waves
        this.showConfetti();
        this.time.delayedCall(600, () => this.showConfetti());

        // Camera effects
        this.cameras.main.shake(400, 0.01);
        this.cameras.main.zoomTo(1.04, 600, 'Sine.easeInOut', true);

        // Player big celebration
        this.tweens.add({
            targets: this.player,
            y: this.playerStartY - 60,
            duration: 300,
            yoyo: true,
            repeat: 5,
            ease: 'Sine.easeOut'
        });

        // After celebration, reset match
        this.time.delayedCall(4000, () => {
            this.tweens.add({
                targets: this.championText,
                alpha: 0,
                scale: 0,
                duration: 400
            });

            this.cameras.main.zoomTo(1, 500);

            // Reset score and tower
            this.score = 0;
            this.scoreText.setText('⚽ 0');

            // Remove tower blocks with animation
            this.towerBlocks.forEach((b, i) => {
                this.tweens.add({
                    targets: b,
                    alpha: 0,
                    scaleX: 0,
                    scaleY: 0,
                    duration: 300,
                    delay: i * 60,
                    onComplete: () => b.destroy()
                });
            });
            this.towerBlocks = [];

            // Reset roof position
            this.tweens.add({
                targets: this.roof,
                y: 452,
                duration: 500,
                ease: 'Power2'
            });
            this.tweens.add({
                targets: this.scoreText,
                y: 420,
                duration: 500,
                ease: 'Power2'
            });

            this.time.delayedCall(800, () => this.resetPlay());
        });
    }

    // ─── CONFETTI ───

    showConfetti() {
        this.confettiPool.forEach((piece, i) => {
            this.tweens.killTweensOf(piece);
            piece.setAlpha(1);
            piece.setScale(Phaser.Math.FloatBetween(0.8, 1.8));
            piece.setPosition(
                Phaser.Math.Between(80, 1200),
                Phaser.Math.Between(-80, -10)
            );
            piece.setAngle(Phaser.Math.Between(0, 360));

            this.tweens.add({
                targets: piece,
                y: 740,
                angle: piece.angle + Phaser.Math.Between(180, 720),
                x: piece.x + Phaser.Math.Between(-60, 60),
                duration: Phaser.Math.Between(2000, 3500),
                delay: i * 25,
                ease: 'Linear',
                onComplete: () => piece.setAlpha(0)
            });
        });
    }

    // ─── RESET ───

    resetPlay() {
        this.state = 'resetting';

        // Reset ball
        this.tweens.add({
            targets: this.ball,
            x: this.ballStartX,
            y: this.ballStartY,
            angle: 0,
            scale: 1,
            duration: 500,
            ease: 'Power2'
        });

        // Reset player
        this.tweens.add({
            targets: this.player,
            x: this.playerStartX,
            y: this.playerStartY,
            angle: 0,
            duration: 500,
            ease: 'Power2'
        });

        // Reset goalkeeper
        this.tweens.add({
            targets: this.goalkeeper,
            x: this.gkStartX,
            y: this.gkStartY,
            angle: 0,
            duration: 500,
            ease: 'Power2',
            onComplete: () => {
                this.startPlayerIdle();
                this.startGKIdle();
                this.setReady();
            }
        });
    }
}

// ================================================
// SOUND GENERATOR — Programmatic audio via Web Audio API
// ================================================

class SoundGenerator {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.volume = 0.7;
    }

    init() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            this.enabled = false;
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    _gain(value) {
        const g = this.ctx.createGain();
        g.gain.value = value * this.volume;
        return g;
    }

    playKick() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        const duration = 0.12;
        const bufferSize = Math.floor(this.ctx.sampleRate * duration);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.08));
        }

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.35 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 3000;

        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        source.start(now);
    }

    playGoalChime() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = freq;
            osc.type = 'sine';

            const start = now + i * 0.12;
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.18 * this.volume, start + 0.04);
            gain.gain.setValueAtTime(0.18 * this.volume, start + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.6);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(start);
            osc.stop(start + 0.6);
        });
    }

    playCrowdCheer() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        const duration = 1.8;
        const bufferSize = Math.floor(this.ctx.sampleRate * duration);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            const t = i / this.ctx.sampleRate;
            const envelope = Math.min(t * 4, 1) * Math.exp(-t * 1.2);
            data[i] = (Math.random() * 2 - 1) * envelope;
        }

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;
        filter.Q.value = 0.4;

        const gain = this.ctx.createGain();
        gain.gain.value = 0.12 * this.volume;

        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        source.start(now);
    }

    playWhistle() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(2200, now);
        osc.frequency.linearRampToValueAtTime(1800, now + 0.25);
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.12 * this.volume, now);
        gain.gain.setValueAtTime(0.12 * this.volume, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    }

    playMiss() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [440, 330]; // A4 → E4 (gentle descending)

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = freq;
            osc.type = 'triangle';

            const start = now + i * 0.18;
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.12 * this.volume, start + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(start);
            osc.stop(start + 0.35);
        });
    }

    playChampionFanfare() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        // Triumphant ascending fanfare: C5 E5 G5 C6 (with richer timbre)
        const notes = [523.25, 659.25, 783.99, 1046.5];

        notes.forEach((freq, i) => {
            // Main tone
            const osc1 = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc1.frequency.value = freq;
            osc1.type = 'square';
            osc2.frequency.value = freq * 2;
            osc2.type = 'sine';

            const start = now + i * 0.2;
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.1 * this.volume, start + 0.04);
            gain.gain.setValueAtTime(0.1 * this.volume, start + 0.2);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.9);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(this.ctx.destination);
            osc1.start(start);
            osc2.start(start);
            osc1.stop(start + 0.9);
            osc2.stop(start + 0.9);
        });

        // Final sustained chord
        const chordStart = now + 0.9;
        [523.25, 659.25, 783.99, 1046.5].forEach(freq => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = freq;
            osc.type = 'sine';

            gain.gain.setValueAtTime(0.06 * this.volume, chordStart);
            gain.gain.exponentialRampToValueAtTime(0.001, chordStart + 1.5);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(chordStart);
            osc.stop(chordStart + 1.5);
        });
    }

    playTowerBlock() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        // Cheerful ascending ping
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.linearRampToValueAtTime(1200, now + 0.15);
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.15 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    }
}

const soundGen = new SoundGenerator();

// ================================================
// PHASER CONFIG
// ================================================

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#87CEEB',
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);
