# 🎮 Game Design Document

> **Project:** ¡Gol de Gabriel!
> **Created:** 2026-04-21
> **Author:** Gabriel (age 3), Game Designer
> **Status:** In Progress (v1 playable)

---

## Part 1: Game Card 🃏

*See `docs/game-card.md` for the full Game Card.*

---

### 🎮 My Game

| | |
|---|---|
| **🏷️ Game Name** | ¡Gol de Gabriel! |
| **🦸 Hero** | A brave little soccer player with spiky anime hair and a blue jersey #10 |
| **🌍 World** | A bright, colorful soccer field with green grass, blue sky, and white clouds |
| **🎯 Goal** | Score goals against the goalkeeper and beat the opposing team! |
| **🕹️ Main Action** | Tap anywhere to kick the ball toward the goal — ¡GOOOL! ⚽ |
| **😈 Challenge** | A goalkeeper (in black) tries to stop your shots! |
| **🎨 Look** | Bright cartoon style with anime-inspired characters, bold colors |
| **🔊 Sound** | Kick sounds, goal chimes, crowd cheering, whistle, champion fanfare |
| **⭐ Special Thing** | A scoreboard tower ("casa") that grows taller with every goal! |

### 🖼️ My Game Drawing

```
┌─────────────────────────────────────────────────┐
│  ☁️     ⚽ ¡Gol de Gabriel! ⚽      ☁️         │
│                                                 │
│  🏠  ⚽0   🏃#10  ──⚽──→      🧤#1   ┃  ┃   │
│  Tower     Player    Ball      GK     Goal     │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│              👆 ¡Toca para patear!               │
└─────────────────────────────────────────────────┘
```

---
---

## Part 2: Implementation Spec 🔧

---

### 2.1 Game Overview

| Field | Value |
|-------|-------|
| **Genre** | Sports / Arcade (tap-to-kick soccer) |
| **Engine/Framework** | Phaser 3.80.1 (via CDN) |
| **Platform** | Web browser (tablet-optimized, touch-first) |
| **Target Audience** | Age 3 (with parent assistance) |
| **Session Length** | 1-3 minutes per match (5 goals) |
| **Inspiration/References** | Captain Tsubasa (anime soccer feel, original character) |

### 2.2 Core Mechanics

#### Primary Mechanic: Tap-to-Kick

- **Input:** Tap anywhere on screen
- **Behavior:** Player character does kick animation, ball launches toward goal with parabolic arc, 85% chance of scoring
- **Feedback:** Kick sound (white noise burst), ball spin animation, ball arc trajectory
- **Edge cases:** Taps ignored during animations (state machine prevents)

#### Secondary Mechanic: Goal Celebration

- **Input:** Automatic on goal
- **Behavior:** "¡GOOOL!" text appears, confetti falls, player jumps, camera shakes, scoreboard tower grows
- **Feedback:** Goal chime (ascending C-E-G-C), crowd cheer, tower block animation with ping sound
- **Edge cases:** Champion celebration (every 5 goals) overrides normal celebration

### 2.3 Game States

```
┌──────────┐  tap   ┌───────────┐  tap   ┌──────────┐
│  TITLE   │───────▶│ STARTING  │───────▶│  READY   │
└──────────┘        └───────────┘        └────┬─────┘
                                              │ tap
                                         ┌────▼─────┐
                                         │ KICKING  │
                                         └────┬─────┘
                                    ┌─────────┼─────────┐
                                    ▼                   ▼
                              ┌──────────┐        ┌──────────┐
                              │  SCORED  │        │  SAVED   │
                              └────┬─────┘        └────┬─────┘
                                   │                   │
                              ┌────▼─────┐             │
                              │CHAMPION? │             │
                              └────┬─────┘             │
                                   │                   │
                              ┌────▼───────────────────▼──┐
                              │       RESETTING           │
                              └────────────┬──────────────┘
                                           │
                                      ┌────▼─────┐
                                      │  READY   │ (loop)
                                      └──────────┘
```

| State | Entry Condition | Content | Exit Options |
|-------|----------------|---------|--------------|
| **Title** | Game loads | Title text, bouncing ball, "tap to play" | Tap → Starting |
| **Starting** | Tap on title | Title fading out, whistle sound | Auto → Ready |
| **Ready** | Title gone / reset done | Pulsing ball, tap instruction, idle animations | Tap → Kicking |
| **Kicking** | Tap during Ready | Kick animation, ball arc, GK reaction | Auto → Scored or Saved |
| **Scored** | Ball reaches goal (85%) | ¡GOOOL!, confetti, celebration, tower grows | Auto → Champion check → Resetting |
| **Saved** | GK catches (15%) | ¡Casi!, encouraging message | Auto → Resetting |
| **Champion** | 5 goals scored | ¡CAMPEÓN!, extra confetti, fanfare | Auto → Reset match → Resetting |
| **Resetting** | After celebration/save | Positions animate back to start | Auto → Ready |

### 2.4 Level Design

**No levels.** The game is an endless loop of kick attempts. Every 5 goals triggers a champion celebration, then the match resets. This is intentional for age 3 — no progression pressure, just fun.

### 2.5 Character Specs

#### Player Character (Hero)

| Property | Value |
|----------|-------|
| **Sprite size** | 80×150 px (programmatic canvas texture) |
| **Art style** | Chibi anime — big head, spiky brown hair, big eyes |
| **Jersey** | Blue (#2196F3) with white #10 |
| **Origin** | (0.5, 1) — positioned at feet |
| **Idle animation** | Gentle vertical bounce (3px, 600ms) |

#### Goalkeeper

| Property | Value |
|----------|-------|
| **Sprite size** | 80×155 px |
| **Art style** | Same chibi style, short dark hair |
| **Jersey** | Dark gray/black (#333333) with white #1 |
| **Gloves** | Orange (#FF9800) |
| **Idle animation** | Side-to-side sway (15px, 1000ms) |
| **Dive behavior** | Dives wrong direction on goals, intercepts on saves |

#### Opponents (Decorative)

| Property | Value |
|----------|-------|
| **Count** | 2 static players on the field |
| **Jersey** | Black (#1A1A1A) |
| **Scale** | 0.75 (slightly smaller than hero) |
| **Behavior** | Subtle idle sway, no interaction |

### 2.6 Object & Item Specs

#### Ball

| Property | Value |
|----------|-------|
| **Texture size** | 44×44 px |
| **Visual** | White with black pentagon pattern, shine highlight |
| **Arc height** | 100-160 px (randomized) |
| **Flight duration** | 850ms |
| **Spin** | 720° during flight |

#### Scoreboard Tower ("Casa")

| Property | Value |
|----------|-------|
| **Position** | Left side (x=90) |
| **Foundation** | Brown rectangle with door |
| **Blocks** | 52×26 px, colored (Red→Orange→Yellow→Green→Blue) |
| **Roof** | Red triangle, moves up with each block |
| **Animation** | Back.easeOut bounce when block appears |
| **Windows** | White squares with cross pattern on each block |

### 2.7 UI Layout

#### Screen: Title

```
┌───────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ (dark overlay)
│                                   │
│   ⚽ ¡Gol de Gabriel! ⚽          │ (gold, bouncing)
│                                   │
│     👆 ¡Toca para jugar!          │ (pulsing)
│                                   │
│          ⚽ (bouncing ball)        │
│                                   │
└───────────────────────────────────┘
```

#### Screen: Gameplay

```
┌───────────────────────────────────┐
│ ☁    ☁        ☁      ☁          │ sky
│                                   │
│ 🏠⚽0                    ┃  ┃   │ tower, score, goal
│ Tower   🏃  ⚽    ⚫⚫   🧤┃  ┃  │ player, ball, opps, gk
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ grass
│       👆 ¡Toca para patear!       │ instruction
└───────────────────────────────────┘
```

### 2.8 Audio Integration

| Game Event | Sound Type | Description | Method |
|------------|-----------|-------------|--------|
| Title tap | SFX | Short whistle (descending sine) | `playWhistle()` |
| Kick | SFX | White noise burst with lowpass filter | `playKick()` |
| Goal scored | SFX | Ascending chime C5-E5-G5-C6 | `playGoalChime()` |
| Goal scored +300ms | SFX | Crowd cheer (bandpass noise) | `playCrowdCheer()` |
| Tower block added | SFX | Quick ascending ping | `playTowerBlock()` |
| Goal saved | SFX | Gentle descending A4-E4 | `playMiss()` |
| Champion! | SFX | Rich fanfare + sustained chord | `playChampionFanfare()` |

All audio generated programmatically via Web Audio API — no external files needed.

### 2.9 Art Asset Requirements

All art is generated programmatically using Canvas2D in the BootScene. No external art files.

| Asset | Dimensions | Method | Description |
|-------|-----------|--------|-------------|
| `player` | 80×150 | Canvas2D | Blue jersey, spiky hair, anime eyes |
| `goalkeeper` | 80×155 | Canvas2D | Black jersey, orange gloves, short hair |
| `opponent` | 80×150 | Canvas2D | Black jersey, no gloves |
| `ball` | 44×44 | Canvas2D | White with pentagon pattern |
| `confetti_0..7` | 10×10 | Graphics | 8 solid colored squares |

### 2.10 Technical Requirements

| Requirement | Target |
|-------------|--------|
| **Target FPS** | 60 FPS |
| **Resolution** | 1280×720, Phaser Scale.FIT |
| **Aspect ratio** | 16:9 with auto-centering |
| **Input** | Touch (tap anywhere) — tablet primary |
| **Browser support** | Chrome, Firefox, Safari, Edge (latest) |
| **Max asset load** | ~500 KB (Phaser CDN only, all art programmatic) |
| **Audio** | Web Audio API (programmatic, no files) |
| **Save system** | None (no persistence needed for age 3) |

### 2.11 Scope Boundaries

#### ✅ Version 1 (MVP) — Built

- Tap-to-kick soccer gameplay
- Programmatic character art (player, GK, opponents)
- Ball physics with parabolic arc
- Goal celebrations (text, confetti, camera shake)
- Scoreboard tower that grows
- Champion celebration every 5 goals
- Programmatic sound effects (7 sounds)
- Touch-optimized for tablet
- Bilingual UI (Spanish)

#### 🔮 Version 2 (Future) — Defer This

- External art assets (proper sprites/animations)
- Background music loop
- Multiple difficulty levels
- More characters / team customization
- Power kicks / special moves
- Score persistence (localStorage)
- Multiple field themes

#### 🚫 Out of Scope — Not Planned

- Multiplayer
- In-app purchases
- Account system
- 3D graphics
- Online features

---

*This document is the single source of truth for the game. Update it as decisions are made.*
