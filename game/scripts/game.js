// ⚽ ¡Gol de Gabriel! — v3: Top-Down Dribble & Score
// For Gabriel (age 3) — Built with Phaser 3
// Controls: Tap left/center/right to switch lanes, then tap to shoot!

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
// BOOT SCENE — Creates top-down textures
// ================================================

class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    create() {
        this.createTopDownPlayer();
        this.createTopDownDefender();
        this.createTopDownGK();
        this.createBallTexture();
        this.createConfettiTextures();
        this.scene.start('Game');
    }

    createTopDownPlayer() {
        const s = 60;
        const canvas = this.textures.createCanvas('player_td', s, s);
        const ctx = canvas.getContext();
        const cx = s / 2, cy = s / 2;

        ctx.fillStyle = '#2196F3';
        ctx.beginPath();
        ctx.arc(cx, cy, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 26, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#DEAB7A';
        ctx.beginPath();
        ctx.arc(cx, cy - 10, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#4A3728';
        ctx.beginPath();
        ctx.arc(cx, cy - 12, 15, Math.PI + 0.3, -0.3, false);
        ctx.fill();
        [[cx - 12, cy - 25], [cx - 4, cy - 28], [cx + 5, cy - 27], [cx + 13, cy - 24]].forEach(([sx, sy]) => {
            ctx.beginPath();
            ctx.arc(sx, sy, 5, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('10', cx, cy + 10);

        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath();
        ctx.moveTo(cx, cy - 28);
        ctx.lineTo(cx - 5, cy - 22);
        ctx.lineTo(cx + 5, cy - 22);
        ctx.closePath();
        ctx.fill();

        canvas.refresh();
    }

    createTopDownDefender() {
        const s = 56;
        const canvas = this.textures.createCanvas('defender_td', s, s);
        const ctx = canvas.getContext();
        const cx = s / 2, cy = s / 2;

        ctx.fillStyle = '#1A1A1A';
        ctx.beginPath();
        ctx.arc(cx, cy, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 24, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#C49A6C';
        ctx.beginPath();
        ctx.arc(cx, cy - 8, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#222222';
        ctx.beginPath();
        ctx.arc(cx, cy - 10, 13, Math.PI + 0.4, -0.4, false);
        ctx.fill();

        canvas.refresh();
    }

    createTopDownGK() {
        const s = 70;
        const canvas = this.textures.createCanvas('gk_td', s, s);
        const ctx = canvas.getContext();
        const cx = s / 2, cy = s / 2;

        ctx.fillStyle = '#333333';
        ctx.beginPath();
        ctx.arc(cx, cy, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 30, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#FF9800';
        ctx.beginPath();
        ctx.arc(cx - 28, cy, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + 28, cy, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#DEAB7A';
        ctx.beginPath();
        ctx.arc(cx, cy - 10, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#222222';
        ctx.beginPath();
        ctx.arc(cx, cy - 12, 15, Math.PI + 0.3, -0.3, false);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('1', cx, cy + 12);

        canvas.refresh();
    }

    createBallTexture() {
        const size = 28;
        const r = 11;
        const canvas = this.textures.createCanvas('ball', size, size);
        const ctx = canvas.getContext();
        const cx = size / 2, cy = size / 2;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#333333';
        this.drawPentagon(ctx, cx, cy, 4);
        this.drawPentagon(ctx, cx, cy - 8, 3);
        this.drawPentagon(ctx, cx + 7, cy + 3, 3);
        this.drawPentagon(ctx, cx - 7, cy + 3, 3);

        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath();
        ctx.arc(cx - 3, cy - 4, 3, 0, Math.PI * 2);
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
// GAME SCENE — Top-down dribble & score
// ================================================

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.score = 0;
        this.state = 'title';
        this.difficulty = 1;
        this.consecutiveGoals = 0;
        this.towerBlocks = [];

        this.fieldLeft = 280;
        this.fieldRight = 1000;
        this.fieldTop = 30;
        this.fieldBottom = 690;
        this.fieldWidth = this.fieldRight - this.fieldLeft;
        this.fieldCenterX = (this.fieldLeft + this.fieldRight) / 2;

        this.laneWidth = this.fieldWidth / 3;
        this.laneXs = [
            this.fieldLeft + this.laneWidth * 0.5,
            this.fieldLeft + this.laneWidth * 1.5,
            this.fieldLeft + this.laneWidth * 2.5
        ];
        this.currentLane = 1;

        this.createField();
        this.createGoal();
        this.createPlayer();
        this.createBall();
        this.createDefenders();
        this.createGoalkeeper();
        this.createScoreboardTower();
        this.createUI();
        this.createConfettiPool();

        this.input.on('pointerdown', (pointer) => this.onPointerDown(pointer));
        this.input.on('pointerup', (pointer) => this.onPointerUp(pointer));
        this.swipeStart = null;
        soundGen.init();
        this.showTitle();
    }

    createField() {
        const g = this.add.graphics();
        g.setDepth(0);
        g.fillStyle(0x2E7D32);
        g.fillRect(0, 0, 1280, 720);
        const stripeH = (this.fieldBottom - this.fieldTop) / 8;
        for (let i = 0; i < 8; i++) {
            g.fillStyle(i % 2 === 0 ? 0x43A047 : 0x4CAF50);
            g.fillRect(this.fieldLeft, this.fieldTop + i * stripeH, this.fieldWidth, stripeH);
        }
        g.lineStyle(3, 0xFFFFFF, 0.9);
        g.strokeRect(this.fieldLeft, this.fieldTop, this.fieldWidth, this.fieldBottom - this.fieldTop);
        g.lineStyle(2, 0xFFFFFF, 0.4);
        g.lineBetween(this.fieldLeft, 360, this.fieldRight, 360);
        g.strokeCircle(this.fieldCenterX, 360, 50);
        g.fillStyle(0xFFFFFF, 0.4);
        g.fillCircle(this.fieldCenterX, 360, 4);
        g.lineStyle(2, 0xFFFFFF, 0.5);
        g.strokeRect(this.fieldCenterX - 150, this.fieldTop, 300, 100);
        g.strokeRect(this.fieldCenterX - 80, this.fieldTop, 160, 50);
        g.lineStyle(1, 0xFFFFFF, 0.12);
        g.lineBetween(this.fieldLeft + this.laneWidth, this.fieldTop, this.fieldLeft + this.laneWidth, this.fieldBottom);
        g.lineBetween(this.fieldLeft + this.laneWidth * 2, this.fieldTop, this.fieldLeft + this.laneWidth * 2, this.fieldBottom);
    }

    createGoal() {
        const g = this.add.graphics();
        g.setDepth(2);
        const goalW = 180, goalH = 25;
        const gx = this.fieldCenterX - goalW / 2, gy = this.fieldTop - 5;
        g.fillStyle(0xFFFFFF, 0.08);
        g.fillRect(gx, gy - goalH, goalW, goalH);
        g.lineStyle(1, 0xCCCCCC, 0.3);
        for (let x = gx; x <= gx + goalW; x += 12) g.lineBetween(x, gy - goalH, x, gy);
        for (let y = gy - goalH; y <= gy; y += 8) g.lineBetween(gx, y, gx + goalW, y);
        g.fillStyle(0xFFFFFF);
        g.fillRect(gx - 3, gy - goalH, 6, goalH + 5);
        g.fillRect(gx + goalW - 3, gy - goalH, 6, goalH + 5);
        g.fillRect(gx, gy - goalH - 3, goalW, 6);
        this.goalBounds = { x: gx, y: gy, w: goalW };
    }

    createPlayer() {
        this.playerStartY = this.fieldBottom - 50;
        this.player = this.add.sprite(this.laneXs[1], this.playerStartY, 'player_td');
        this.player.setOrigin(0.5, 0.5);
        this.player.setDepth(5);
    }

    createBall() {
        this.ball = this.add.sprite(this.laneXs[1], this.playerStartY + 22, 'ball');
        this.ball.setOrigin(0.5, 0.5);
        this.ball.setDepth(6);
    }

    createDefenders() {
        this.defenders = [];
        [520, 380, 250].forEach((y, i) => {
            const def = this.add.sprite(this.fieldCenterX, y, 'defender_td');
            def.setOrigin(0.5, 0.5);
            def.setDepth(4);
            def.setAlpha(0);
            def.patrolDir = i % 2 === 0 ? 1 : -1;
            def.baseY = y;
            def.isDizzy = false;
            def.dodged = false;
            this.defenders.push(def);
        });
    }

    setupDefenders() {
        const count = this.difficulty <= 2 ? 1 : (this.difficulty <= 4 ? 2 : 3);
        const speed = 80 + this.difficulty * 20;
        this.defenders.forEach((def, i) => {
            def.dodged = false;
            def.isDizzy = false;
            def.setAngle(0);
            def.setScale(1);
            if (i < count) {
                def.setAlpha(1);
                def.x = Phaser.Math.Between(this.fieldLeft + 60, this.fieldRight - 60);
                def.y = def.baseY;
                def.speed = speed + Phaser.Math.Between(-15, 15);
                def.patrolDir = i % 2 === 0 ? 1 : -1;
            } else {
                def.setAlpha(0);
            }
        });
    }

    updateDefenders(delta) {
        this.defenders.forEach(def => {
            if (def.alpha === 0 || def.isDizzy) return;
            def.x += def.patrolDir * def.speed * (delta / 1000);
            if (def.x > this.fieldRight - 30) { def.x = this.fieldRight - 30; def.patrolDir = -1; }
            if (def.x < this.fieldLeft + 30) { def.x = this.fieldLeft + 30; def.patrolDir = 1; }
        });
    }

    createGoalkeeper() {
        this.gk = this.add.sprite(this.fieldCenterX, this.fieldTop + 30, 'gk_td');
        this.gk.setOrigin(0.5, 0.5);
        this.gk.setDepth(4);
        this.gkDir = 1;
    }

    updateGK(delta) {
        if (this.state !== 'shooting') return;
        const speed = 100 + this.difficulty * 15;
        this.gk.x += this.gkDir * speed * (delta / 1000);
        const goalLeft = this.goalBounds.x + 30;
        const goalRight = this.goalBounds.x + this.goalBounds.w - 30;
        if (this.gk.x > goalRight) { this.gk.x = goalRight; this.gkDir = -1; }
        if (this.gk.x < goalLeft) { this.gk.x = goalLeft; this.gkDir = 1; }
    }

    createScoreboardTower() {
        this.towerContainer = this.add.container(140, 0);
        this.towerContainer.setDepth(8);
        const f = this.add.graphics();
        f.fillStyle(0x795548);
        f.fillRoundedRect(-30, 650, 60, 22, 4);
        f.fillStyle(0x5D4037);
        f.fillRoundedRect(-8, 654, 16, 18, { tl: 3, tr: 3, bl: 0, br: 0 });
        this.towerContainer.add(f);
        this.roof = this.add.graphics();
        this.roof.fillStyle(0xD32F2F);
        this.roof.beginPath();
        this.roof.moveTo(-34, 0);
        this.roof.lineTo(34, 0);
        this.roof.lineTo(0, -22);
        this.roof.closePath();
        this.roof.fill();
        this.roof.setPosition(0, 650);
        this.towerContainer.add(this.roof);
        this.scoreText = this.add.text(140, 618, '⚽ 0', {
            fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#FFFFFF',
            fontStyle: 'bold', stroke: '#000000', strokeThickness: 4, align: 'center'
        }).setOrigin(0.5, 1).setDepth(9);
    }

    addTowerBlock() {
        const colors = [0xFF5252, 0xFF9800, 0xFFEB3B, 0x66BB6A, 0x42A5F5];
        const idx = this.towerBlocks.length;
        const block = this.add.graphics();
        block.fillStyle(colors[idx % colors.length]);
        block.fillRoundedRect(-26, 0, 52, 26, 3);
        block.fillStyle(0xFFFFFF, 0.8);
        block.fillRoundedRect(-16, 4, 10, 10, 2);
        block.fillRoundedRect(6, 4, 10, 10, 2);
        const targetY = 650 - (idx + 1) * 28;
        block.setPosition(0, targetY + 50);
        block.setAlpha(0);
        block.setScale(0.3);
        this.towerContainer.add(block);
        this.towerBlocks.push(block);
        this.tweens.add({ targets: block, y: targetY, alpha: 1, scaleX: 1, scaleY: 1, duration: 500, ease: 'Back.easeOut' });
        this.tweens.add({ targets: this.roof, y: targetY, duration: 500, ease: 'Back.easeOut' });
        this.tweens.add({ targets: this.scoreText, y: targetY - 8, duration: 500, ease: 'Back.easeOut' });
    }

    createUI() {
        this.goolText = this.add.text(640, 300, '¡GOOOL!', {
            fontFamily: 'Arial Black, Impact, sans-serif', fontSize: '100px', color: '#FFD700',
            stroke: '#8B6914', strokeThickness: 10,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 8, fill: true }
        }).setOrigin(0.5).setAlpha(0).setScale(0).setDepth(15);

        this.casiText = this.add.text(640, 350, '¡Otra vez!', {
            fontFamily: 'Arial, sans-serif', fontSize: '48px', color: '#FFFFFF',
            stroke: '#333333', strokeThickness: 5,
            shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 4, fill: true }
        }).setOrigin(0.5).setAlpha(0).setDepth(15);

        this.championText = this.add.text(640, 260, '¡CAMPEÓN! 🏆', {
            fontFamily: 'Arial Black, Impact, sans-serif', fontSize: '80px', color: '#FFD700',
            stroke: '#8B6914', strokeThickness: 8,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 8, fill: true }
        }).setOrigin(0.5).setAlpha(0).setScale(0).setDepth(15);

        this.instructionText = this.add.text(640, 680, '', {
            fontFamily: 'Arial, sans-serif', fontSize: '26px', color: '#FFFFFF',
            stroke: '#000000', strokeThickness: 4
        }).setOrigin(0.5).setAlpha(0).setDepth(10);
    }

    createConfettiPool() {
        this.confettiPool = [];
        for (let i = 0; i < 60; i++) {
            const c = this.add.sprite(0, 0, `confetti_${i % 8}`);
            c.setAlpha(0);
            c.setScale(Phaser.Math.FloatBetween(0.8, 1.8));
            c.setDepth(14);
            this.confettiPool.push(c);
        }
    }

    showConfetti() {
        this.confettiPool.forEach((piece, i) => {
            this.tweens.killTweensOf(piece);
            piece.setAlpha(1);
            piece.setScale(Phaser.Math.FloatBetween(0.8, 1.8));
            piece.setPosition(Phaser.Math.Between(200, 1080), Phaser.Math.Between(-80, -10));
            piece.setAngle(Phaser.Math.Between(0, 360));
            this.tweens.add({
                targets: piece, y: 740,
                angle: piece.angle + Phaser.Math.Between(180, 720),
                x: piece.x + Phaser.Math.Between(-60, 60),
                duration: Phaser.Math.Between(2000, 3500), delay: i * 25,
                ease: 'Linear', onComplete: () => piece.setAlpha(0)
            });
        });
    }

    // ─── TITLE ───

    showTitle() {
        this.state = 'title';
        this.titleOverlay = this.add.graphics().setDepth(20);
        this.titleOverlay.fillStyle(0x000000, 0.6);
        this.titleOverlay.fillRect(0, 0, 1280, 720);
        this.titleText = this.add.text(640, 220, '⚽ ¡Gol de Gabriel! ⚽', {
            fontFamily: 'Arial Black, Impact, sans-serif', fontSize: '64px', color: '#FFD700',
            stroke: '#8B6914', strokeThickness: 8,
            shadow: { offsetX: 4, offsetY: 4, color: '#000000', blur: 10, fill: true }
        }).setOrigin(0.5).setDepth(21);
        this.subtitleText = this.add.text(640, 340, '👆 ¡Toca para jugar!', {
            fontFamily: 'Arial, sans-serif', fontSize: '36px', color: '#FFFFFF',
            stroke: '#000000', strokeThickness: 5
        }).setOrigin(0.5).setDepth(21);
        this.versionText = this.add.text(640, 410, '🏃 ¡Regatea y marca goles!', {
            fontFamily: 'Arial, sans-serif', fontSize: '24px', color: '#AAFFAA',
            stroke: '#000000', strokeThickness: 3
        }).setOrigin(0.5).setDepth(21);
        this.titleBall = this.add.sprite(640, 500, 'ball').setScale(2.5).setDepth(21);
        this.tweens.add({ targets: this.titleBall, y: 475, angle: 360, duration: 1500, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
        this.tweens.add({ targets: this.subtitleText, scale: 1.06, duration: 700, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
    }

    // ─── GAME FLOW ───

    onPointerDown(pointer) {
        if (this.state === 'title') {
            soundGen.resume();
            soundGen.playWhistle();
            this.state = 'starting';
            this.tweens.add({
                targets: [this.titleOverlay, this.titleText, this.subtitleText, this.titleBall, this.versionText],
                alpha: 0, duration: 400,
                onComplete: () => {
                    [this.titleOverlay, this.titleText, this.subtitleText, this.titleBall, this.versionText].forEach(o => o.destroy());
                    this.time.delayedCall(200, () => this.startDribble());
                }
            });
        } else if (this.state === 'dribbling') {
            this.handleDribbleTap(pointer);
            this.swipeStart = null; // Prevent dribble taps from becoming shots
        } else if (this.state === 'shooting') {
            // Only record swipe start if we're already in shooting state
            this.swipeStart = { x: pointer.x, y: pointer.y, state: 'shooting' };
        }
    }

    onPointerUp(pointer) {
        // Only fire a shot if the swipe started during the shooting state
        if (this.state === 'shooting' && this.swipeStart && this.swipeStart.state === 'shooting') {
            this.handleSwipeShoot(pointer);
        }
        this.swipeStart = null;
    }

    // ─── DRIBBLE PHASE ───

    startDribble() {
        this.state = 'dribbling';
        this.currentLane = 1;
        this.playerY = this.playerStartY;

        this.player.setPosition(this.laneXs[1], this.playerStartY);
        this.player.setAngle(0).setAlpha(1).setScale(1);
        this.ball.setPosition(this.laneXs[1], this.playerStartY + 22);
        this.ball.setAlpha(1).setScale(1).setAngle(0);
        this.gk.setPosition(this.fieldCenterX, this.fieldTop + 30);
        this.gk.setAngle(0).setAlpha(1).setScale(1);

        this.setupDefenders();

        this.instructionText.setText('👆 ¡Toca para esquivar!');
        this.instructionText.setAlpha(1);
        this.tweens.add({ targets: this.instructionText, alpha: 0, duration: 300, delay: 2000 });

        if (this.trailTimer) this.trailTimer.remove();
        this.trailTimer = this.time.addEvent({
            delay: 80,
            callback: () => {
                if (this.state !== 'dribbling') return;
                const trail = this.add.circle(this.ball.x, this.ball.y, 4, 0xFFEB3B, 0.5).setDepth(3);
                this.tweens.add({ targets: trail, alpha: 0, scale: 0.2, duration: 400, onComplete: () => trail.destroy() });
            },
            loop: true
        });
    }

    handleDribbleTap(pointer) {
        const screenThird = 1280 / 3;
        let targetLane;
        if (pointer.x < screenThird) targetLane = 0;
        else if (pointer.x < screenThird * 2) targetLane = 1;
        else targetLane = 2;

        if (targetLane === this.currentLane) return;
        this.currentLane = targetLane;
        soundGen.playDodge();

        this.tweens.add({ targets: this.player, x: this.laneXs[targetLane], duration: 150, ease: 'Power2' });
        this.tweens.add({ targets: this.ball, x: this.laneXs[targetLane], duration: 150, ease: 'Power2' });
    }

    update(time, delta) {
        if (this.state === 'dribbling') {
            const speed = 130 + this.difficulty * 8;
            this.playerY -= speed * (delta / 1000);
            this.player.y = this.playerY;
            this.ball.y = this.playerY + 22;
            this.updateDefenders(delta);
            this.checkDefenderCollisions();
            if (this.playerY < 180) this.startShooting();
        } else if (this.state === 'shooting') {
            this.updateGK(delta);
        }
    }

    checkDefenderCollisions() {
        const px = this.player.x, py = this.player.y;
        this.defenders.forEach(def => {
            if (def.alpha === 0 || def.isDizzy) return;
            const dx = Math.abs(px - def.x), dy = Math.abs(py - def.y);
            if (dx < 40 && dy < 35) {
                this.handleDefenderCollision(def);
            } else if (dy < 20 && dx < 80 && dx > 40 && !def.dodged) {
                def.dodged = true;
                this.handleDodgeSuccess(def);
            }
        });
    }

    handleDefenderCollision(def) {
        soundGen.playBounce();
        let newLane = this.currentLane === 0 ? 1 : (this.currentLane === 2 ? 1 : (Math.random() > 0.5 ? 0 : 2));
        this.currentLane = newLane;
        this.tweens.add({
            targets: this.player,
            x: this.laneXs[newLane], angle: { from: -15, to: 15 },
            duration: 200, yoyo: true, ease: 'Sine.easeOut'
        });
        this.tweens.add({ targets: this.ball, x: this.laneXs[newLane], duration: 200, ease: 'Sine.easeOut' });
        this.playerY += 50;

        def.isDizzy = true;
        this.tweens.add({ targets: def, angle: 360, duration: 600, ease: 'Power1' });
        if (this.difficulty > 1) this.difficulty -= 0.5;
    }

    handleDodgeSuccess(def) {
        const popup = this.add.text(def.x, def.y - 30, '¡Olé!', {
            fontFamily: 'Arial Black, sans-serif', fontSize: '32px', color: '#FF9800',
            stroke: '#E65100', strokeThickness: 4
        }).setOrigin(0.5).setDepth(12);
        this.tweens.add({
            targets: popup, y: popup.y - 60, alpha: 0, scale: 1.5,
            duration: 800, ease: 'Power2', onComplete: () => popup.destroy()
        });
        for (let i = 0; i < 5; i++) {
            const spark = this.add.circle(
                def.x + Phaser.Math.Between(-20, 20), def.y + Phaser.Math.Between(-20, 20),
                Phaser.Math.Between(3, 6), [0xFF9800, 0xFFEB3B, 0xFF5252][i % 3], 0.8
            ).setDepth(11);
            this.tweens.add({
                targets: spark, y: spark.y - 40, x: spark.x + Phaser.Math.Between(-30, 30),
                alpha: 0, duration: 500, delay: i * 50, onComplete: () => spark.destroy()
            });
        }
        soundGen.playOle();
    }

    // ─── SHOOTING ───

    startShooting() {
        this.state = 'shooting';
        this.swipeStart = null; // Clear any stale swipe from dribbling
        if (this.trailTimer) this.trailTimer.remove();
        this.playerY = 180;
        this.player.y = 180;
        // Snap ball to player's current X position
        this.tweens.killTweensOf(this.ball);
        this.ball.x = this.player.x;
        this.ball.y = 202;
        this.ball.setScale(1);
        this.ball.setAngle(0);
        this.instructionText.setText('👆 ¡Desliza hacia el arco!');
        this.instructionText.setAlpha(1);
        this.tweens.add({ targets: this.instructionText, scale: 1.05, duration: 500, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
        this.gkDir = Math.random() > 0.5 ? 1 : -1;
    }

    handleSwipeShoot(pointer) {
        const dx = pointer.x - this.swipeStart.x;
        const dy = pointer.y - this.swipeStart.y;
        const swipeLen = Math.sqrt(dx * dx + dy * dy);

        // Need a minimum swipe length (ignore accidental taps)
        if (swipeLen < 20) return;

        this.state = 'ball_flying';
        this.tweens.killTweensOf(this.instructionText);
        this.instructionText.setAlpha(0);
        soundGen.playKick();

        // Swipe direction determines where the ball goes
        // Project the swipe line from ball position to the goal line (y = fieldTop)
        const ballX = this.ball.x;
        const ballY = this.ball.y;
        const distToGoal = ballY - this.fieldTop;

        // Scale the swipe's dx proportionally to the distance to goal
        const scale = distToGoal / Math.max(Math.abs(dy), 30);
        const targetX = ballX + dx * scale;
        const targetY = this.fieldTop;

        // Determine outcome: is it on target?
        const goalLeft = this.goalBounds.x;
        const goalRight = this.goalBounds.x + this.goalBounds.w;
        const isOnTarget = targetX > goalLeft + 5 && targetX < goalRight - 5;

        let isGoal = false;
        if (isOnTarget) {
            const gkDist = Math.abs(this.gk.x - targetX);
            const saveRadius = 45 - this.difficulty * 2;
            isGoal = gkDist > Math.max(saveRadius, 25);
        }

        // Player kick animation
        this.tweens.add({ targets: this.player, scaleX: 1.2, scaleY: 0.85, duration: 100, yoyo: true, ease: 'Power2' });

        // Ball flight
        this.tweens.add({
            targets: this.ball, x: targetX, y: targetY + 15, scaleX: 0.6, scaleY: 0.6,
            duration: 500, ease: 'Power2.easeIn',
            onUpdate: () => {
                if (Math.random() > 0.5) {
                    const s = this.add.circle(this.ball.x + Phaser.Math.Between(-8, 8), this.ball.y + Phaser.Math.Between(5, 15), Phaser.Math.Between(2, 5), 0xFFEB3B, 0.7).setDepth(5);
                    this.tweens.add({ targets: s, alpha: 0, scale: 0, duration: 300, onComplete: () => s.destroy() });
                }
            },
            onComplete: () => {
                if (isGoal) {
                    this.goalScored();
                } else if (isOnTarget) {
                    this.goalSaved();
                } else {
                    this.shotMissed();
                }
            }
        });
        this.tweens.add({ targets: this.ball, angle: this.ball.angle + 540, duration: 500, ease: 'Linear' });

        // GK dives toward the ball if on target
        if (isOnTarget && !isGoal) {
            this.tweens.add({ targets: this.gk, x: targetX, duration: 400, ease: 'Power2' });
        }
    }

    // ─── GOAL ───

    goalScored() {
        this.state = 'goal_scored';
        this.score++;
        this.consecutiveGoals++;
        if (this.consecutiveGoals >= 2) this.difficulty = Math.min(this.difficulty + 0.5, 8);

        soundGen.playGoalChime();
        setTimeout(() => soundGen.playCrowdCheer(), 300);
        this.scoreText.setText(`⚽ ${this.score}`);
        this.addTowerBlock();
        soundGen.playTowerBlock();

        this.goolText.setAlpha(1).setScale(0).setAngle(-5);
        this.tweens.add({ targets: this.goolText, scale: 1, angle: 0, duration: 400, ease: 'Back.easeOut' });

        this.tweens.add({ targets: this.player, y: this.player.y - 30, duration: 200, yoyo: true, repeat: 3, ease: 'Sine.easeOut' });
        this.tweens.add({ targets: this.player, angle: { from: -15, to: 15 }, duration: 150, yoyo: true, repeat: 3 });

        // Silly GK reaction
        const reactions = ['spin', 'fall', 'shrink'];
        const r = reactions[this.score % reactions.length];
        if (r === 'spin') this.tweens.add({ targets: this.gk, angle: 720, duration: 800, ease: 'Power2' });
        else if (r === 'fall') this.tweens.add({ targets: this.gk, angle: 90, y: this.gk.y + 20, duration: 500, ease: 'Bounce.easeOut' });
        else this.tweens.add({ targets: this.gk, scaleX: 0.3, scaleY: 0.3, duration: 500, yoyo: true, ease: 'Back.easeIn' });

        this.cameras.main.shake(300, 0.008);
        this.showConfetti();

        const isChampion = this.score >= 5 && this.score % 5 === 0;
        this.time.delayedCall(2200, () => {
            this.tweens.add({ targets: this.goolText, alpha: 0, scale: 0, duration: 300 });
            if (isChampion) this.time.delayedCall(400, () => this.showChampion());
            else this.time.delayedCall(300, () => this.startDribble());
        });
    }

    goalSaved() {
        this.state = 'goal_saved';
        this.consecutiveGoals = 0;
        if (this.difficulty > 1) this.difficulty -= 1;
        soundGen.playMiss();
        this.casiText.setText('¡Atajada!');
        this.casiText.setAlpha(0).setY(360);
        this.tweens.add({ targets: this.casiText, y: 340, alpha: 1, duration: 300, ease: 'Back.easeOut' });
        this.tweens.add({ targets: this.gk, y: this.gk.y - 15, duration: 200, yoyo: true, repeat: 2, ease: 'Sine.easeOut' });
        this.time.delayedCall(1200, () => {
            this.tweens.add({ targets: this.casiText, alpha: 0, duration: 200 });
            this.time.delayedCall(300, () => this.startDribble());
        });
    }

    shotMissed() {
        this.state = 'shot_missed';
        this.consecutiveGoals = 0;
        if (this.difficulty > 1) this.difficulty -= 0.5;
        soundGen.playMiss();
        this.casiText.setText('¡Casi! ¡Otra vez!');
        this.casiText.setAlpha(0).setY(360);
        this.tweens.add({ targets: this.casiText, y: 340, alpha: 1, duration: 300, ease: 'Back.easeOut' });
        // GK does a little taunt
        this.tweens.add({ targets: this.gk, angle: { from: -10, to: 10 }, duration: 150, yoyo: true, repeat: 2 });
        this.time.delayedCall(1200, () => {
            this.tweens.add({ targets: this.casiText, alpha: 0, duration: 200 });
            this.time.delayedCall(300, () => this.startDribble());
        });
    }

    showChampion() {
        this.state = 'champion';
        soundGen.playChampionFanfare();
        this.championText.setAlpha(1).setScale(0);
        this.tweens.add({ targets: this.championText, scale: 1, duration: 600, ease: 'Back.easeOut' });
        this.showConfetti();
        this.time.delayedCall(600, () => this.showConfetti());
        this.cameras.main.shake(400, 0.01);
        this.tweens.add({ targets: this.player, y: this.player.y - 40, duration: 250, yoyo: true, repeat: 5, ease: 'Sine.easeOut' });
        this.time.delayedCall(4000, () => {
            this.tweens.add({ targets: this.championText, alpha: 0, scale: 0, duration: 400 });
            this.time.delayedCall(500, () => this.startDribble());
        });
    }
}

// ================================================
// SOUND GENERATOR
// ================================================

class SoundGenerator {
    constructor() { this.ctx = null; this.enabled = true; this.volume = 0.7; }

    init() {
        try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { this.enabled = false; }
    }

    resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

    playKick() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, dur = 0.12, sz = Math.floor(this.ctx.sampleRate * dur);
        const buf = this.ctx.createBuffer(1, sz, this.ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < sz; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (sz * 0.08));
        const src = this.ctx.createBufferSource(); src.buffer = buf;
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.35 * this.volume, now); g.gain.exponentialRampToValueAtTime(0.001, now + dur);
        const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 3000;
        src.connect(f); f.connect(g); g.connect(this.ctx.destination); src.start(now);
    }

    playGoalChime() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.frequency.value = freq; o.type = 'sine';
            const s = now + i * 0.12;
            g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.18 * this.volume, s + 0.04);
            g.gain.setValueAtTime(0.18 * this.volume, s + 0.15); g.gain.exponentialRampToValueAtTime(0.001, s + 0.6);
            o.connect(g); g.connect(this.ctx.destination); o.start(s); o.stop(s + 0.6);
        });
    }

    playCrowdCheer() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, dur = 1.8, sz = Math.floor(this.ctx.sampleRate * dur);
        const buf = this.ctx.createBuffer(1, sz, this.ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < sz; i++) { const t = i / this.ctx.sampleRate; d[i] = (Math.random() * 2 - 1) * Math.min(t * 4, 1) * Math.exp(-t * 1.2); }
        const src = this.ctx.createBufferSource(); src.buffer = buf;
        const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1200; f.Q.value = 0.4;
        const g = this.ctx.createGain(); g.gain.value = 0.12 * this.volume;
        src.connect(f); f.connect(g); g.connect(this.ctx.destination); src.start(now);
    }

    playWhistle() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.frequency.setValueAtTime(2200, now); o.frequency.linearRampToValueAtTime(1800, now + 0.25); o.type = 'sine';
        g.gain.setValueAtTime(0.12 * this.volume, now); g.gain.setValueAtTime(0.12 * this.volume, now + 0.2);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        o.connect(g); g.connect(this.ctx.destination); o.start(now); o.stop(now + 0.35);
    }

    playMiss() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        [440, 330].forEach((freq, i) => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.frequency.value = freq; o.type = 'triangle';
            const s = now + i * 0.18;
            g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.12 * this.volume, s + 0.03);
            g.gain.exponentialRampToValueAtTime(0.001, s + 0.3);
            o.connect(g); g.connect(this.ctx.destination); o.start(s); o.stop(s + 0.35);
        });
    }

    playChampionFanfare() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
            const o1 = this.ctx.createOscillator(), o2 = this.ctx.createOscillator(), g = this.ctx.createGain();
            o1.frequency.value = freq; o1.type = 'square'; o2.frequency.value = freq * 2; o2.type = 'sine';
            const s = now + i * 0.2;
            g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.1 * this.volume, s + 0.04);
            g.gain.setValueAtTime(0.1 * this.volume, s + 0.2); g.gain.exponentialRampToValueAtTime(0.001, s + 0.9);
            o1.connect(g); o2.connect(g); g.connect(this.ctx.destination);
            o1.start(s); o2.start(s); o1.stop(s + 0.9); o2.stop(s + 0.9);
        });
        const cs = now + 0.9;
        [523.25, 659.25, 783.99, 1046.5].forEach(freq => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.frequency.value = freq; o.type = 'sine';
            g.gain.setValueAtTime(0.06 * this.volume, cs); g.gain.exponentialRampToValueAtTime(0.001, cs + 1.5);
            o.connect(g); g.connect(this.ctx.destination); o.start(cs); o.stop(cs + 1.5);
        });
    }

    playTowerBlock() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.frequency.setValueAtTime(600, now); o.frequency.linearRampToValueAtTime(1200, now + 0.15); o.type = 'sine';
        g.gain.setValueAtTime(0.15 * this.volume, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        o.connect(g); g.connect(this.ctx.destination); o.start(now); o.stop(now + 0.3);
    }

    playDodge() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, sz = Math.floor(this.ctx.sampleRate * 0.1);
        const buf = this.ctx.createBuffer(1, sz, this.ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < sz; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (sz * 0.15));
        const src = this.ctx.createBufferSource(); src.buffer = buf;
        const f = this.ctx.createBiquadFilter(); f.type = 'highpass';
        f.frequency.setValueAtTime(2000, now); f.frequency.linearRampToValueAtTime(6000, now + 0.1);
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.15 * this.volume, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        src.connect(f); f.connect(g); g.connect(this.ctx.destination); src.start(now);
    }

    playOle() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        [587.33, 880].forEach((freq, i) => {
            const o = this.ctx.createOscillator(), g = this.ctx.createGain();
            o.frequency.value = freq; o.type = 'sine';
            const s = now + i * 0.08;
            g.gain.setValueAtTime(0.12 * this.volume, s); g.gain.exponentialRampToValueAtTime(0.001, s + 0.2);
            o.connect(g); g.connect(this.ctx.destination); o.start(s); o.stop(s + 0.25);
        });
    }

    playBounce() {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.frequency.setValueAtTime(300, now); o.frequency.exponentialRampToValueAtTime(100, now + 0.2); o.type = 'sine';
        g.gain.setValueAtTime(0.2 * this.volume, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        o.connect(g); g.connect(this.ctx.destination); o.start(now); o.stop(now + 0.3);
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
    backgroundColor: '#2E7D32',
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);
