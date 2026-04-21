# 🎮 Game Design Document

> **Project:** [Game Name]
> **Created:** [Date]
> **Author:** [Kid's Name / Team Name]
> **Status:** Draft | In Progress | Ready to Build

---

## Part 1: Game Card 🃏

*This is the kid-friendly overview — one page, big ideas only!*

---

### 🎮 My Game

| | |
|---|---|
| **🏷️ Game Name** | [What's your game called? Pick something fun and catchy!] |
| **🦸 Hero** | [Who do you play as? Describe your character — what do they look like, what makes them cool?] |
| **🌍 World** | [Where does the game take place? A jungle? Outer space? An underwater city?] |
| **🎯 Goal** | [What are you trying to do? Save someone? Collect all the stars? Reach the finish line?] |
| **🕹️ Main Action** | [What do you DO most of the time? Jump? Fly? Solve puzzles? Build things?] |
| **😈 Challenge** | [What makes it hard? Enemies? Time limits? Tricky platforms? Mazes?] |
| **🎨 Look** | [What does it look like? Cartoon? Pixel art? Bright colors? Dark and spooky?] |
| **🔊 Sound** | [What does it sound like? Happy music? Space sounds? Nature sounds?] |
| **⭐ Special Thing** | [What makes YOUR game different from other games? What's the one cool thing?] |

### 🖼️ My Game Drawing

*[Sketch or describe what a screenshot of your game would look like]*

```
┌─────────────────────────────────────────────┐
│                                             │
│   [Draw or describe your game screen here]  │
│                                             │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

---
---

## Part 2: Implementation Spec 🔧

*This is the technical specification for the agent/developer building the game.*

---

### 2.1 Game Overview

| Field | Value |
|-------|-------|
| **Genre** | [e.g., Platformer, Puzzle, Endless Runner, Top-down Adventure] |
| **Engine/Framework** | [e.g., Phaser 3, Kaboom.js, p5.js, vanilla Canvas] |
| **Platform** | [e.g., Web browser (desktop + mobile), desktop only] |
| **Target Audience** | [e.g., Ages 5-10] |
| **Session Length** | [e.g., 2-5 minutes per play session] |
| **Inspiration/References** | [e.g., "Like Flappy Bird but underwater with a dolphin"] |

### 2.2 Core Mechanics

> Detail every mechanic the player interacts with.

#### Primary Mechanic: [e.g., Jumping]

- **Input:** [e.g., Spacebar / tap screen]
- **Behavior:** [e.g., Character jumps 3x their height, gravity pulls them down at X rate]
- **Feedback:** [e.g., Squash-and-stretch animation, jump sound effect]
- **Edge cases:** [e.g., No double jump, cannot jump while falling]

#### Secondary Mechanic: [e.g., Collecting]

- **Input:** [e.g., Overlap/collision with item]
- **Behavior:** [e.g., Item disappears, score increases by 10, particle burst]
- **Feedback:** [e.g., Sparkle animation, coin sound, score counter updates]
- **Edge cases:** [e.g., Cannot collect same item twice]

#### Additional Mechanics

- **[Mechanic name]:** [Brief description of input → behavior → feedback]
- **[Mechanic name]:** [Brief description of input → behavior → feedback]

### 2.3 Game States

```
┌──────────┐    Start     ┌───────────┐
│   MENU   │─────────────▶│ GAMEPLAY  │
└──────────┘              └─────┬─────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              ┌──────────┐ ┌────────┐ ┌─────────┐
              │  PAUSE   │ │  WIN   │ │  LOSE   │
              └──────────┘ └────────┘ └─────────┘
```

| State | Entry Condition | Content | Exit Options |
|-------|----------------|---------|--------------|
| **Menu** | Game loads | [e.g., Title, Play button, Settings] | Play → Gameplay |
| **Gameplay** | Player presses Play | [e.g., Active game world, HUD, controls] | Pause, Win condition, Lose condition |
| **Pause** | [e.g., Esc key / pause button] | [e.g., Resume, Restart, Quit options] | Resume → Gameplay, Quit → Menu |
| **Win** | [e.g., Reached end of level / score target] | [e.g., Celebration animation, score, next level] | Next Level → Gameplay, Menu → Menu |
| **Lose** | [e.g., Health reaches 0 / time runs out] | [e.g., Encouraging message, score, retry] | Retry → Gameplay, Menu → Menu |

### 2.4 Level Design

#### Structure

- **Number of levels:** [e.g., 5 levels for v1]
- **Level format:** [e.g., Side-scrolling sections, single screen, procedurally generated]
- **Level length:** [e.g., 30-60 seconds each]

#### Progression

| Level | New Element Introduced | Difficulty | Description |
|-------|----------------------|------------|-------------|
| 1 | [e.g., Basic movement + collecting] | Easy | [Tutorial level — teaches core mechanic] |
| 2 | [e.g., First enemy type] | Easy-Medium | [Introduces danger while reinforcing basics] |
| 3 | [e.g., Moving platforms] | Medium | [Combines previous elements with new challenge] |
| 4 | [e.g., Timed sections] | Medium-Hard | [Adds time pressure] |
| 5 | [e.g., Boss encounter] | Hard | [Tests all learned skills] |

#### Difficulty Curve

```
Difficulty
    ▲
    │          ╱
    │        ╱
    │      ╱
    │    ╱
    │  ╱
    │╱
    └──────────────▶ Level
    1    2    3    4    5
```

- **Easing in:** [e.g., Level 1 has wide platforms, slow enemies, generous time]
- **Ramping up:** [e.g., Platforms get smaller, enemies get faster, new mechanics appear]
- **Mastery moment:** [e.g., Final level combines everything — feels hard but fair]

### 2.5 Character Specs

#### Player Character: [Name]

| Property | Value |
|----------|-------|
| **Sprite size** | [e.g., 64×64 px] |
| **Hitbox size** | [e.g., 48×56 px, offset 8px from left, 4px from top] |
| **Move speed** | [e.g., 200 px/sec] |
| **Jump height** | [e.g., 192 px (3× sprite height)] |
| **Gravity** | [e.g., 800 px/sec²] |
| **Health/Lives** | [e.g., 3 lives, no health bar] |

**Animations needed:**

| Animation | Frames | Loop | Trigger |
|-----------|--------|------|---------|
| Idle | [e.g., 4] | Yes | No input |
| Run | [e.g., 6] | Yes | Left/right input |
| Jump | [e.g., 2] | No | Jump input |
| Fall | [e.g., 2] | No | Airborne + descending |
| Hurt | [e.g., 3] | No | Collision with enemy |
| Celebrate | [e.g., 5] | No | Level complete |

#### Enemy: [Name]

| Property | Value |
|----------|-------|
| **Sprite size** | [e.g., 48×48 px] |
| **Behavior** | [e.g., Patrol left-right on platform, reverse at edges] |
| **Speed** | [e.g., 80 px/sec] |
| **Defeat method** | [e.g., Jump on top] |
| **Points** | [e.g., 50 points] |

### 2.6 Object & Item Specs

#### Collectibles

| Item | Sprite Size | Points | Behavior | Frequency |
|------|-------------|--------|----------|-----------|
| [e.g., Star] | [e.g., 32×32] | [e.g., 10] | [e.g., Static, sparkle animation, disappears on collect] | [e.g., 8-12 per level] |
| [e.g., Power-up] | [e.g., 32×32] | [e.g., 0] | [e.g., Grants invincibility for 5 sec, floats up and down] | [e.g., 1 per level] |

#### Obstacles

| Obstacle | Size | Behavior | Damage |
|----------|------|----------|--------|
| [e.g., Spikes] | [e.g., 32×16] | [e.g., Static, placed on ground/ceiling] | [e.g., Instant death / lose 1 life] |
| [e.g., Moving platform] | [e.g., 96×16] | [e.g., Moves vertically, 2 sec cycle] | [e.g., None — transport only] |

#### Interactive Objects

| Object | Size | Interaction | Result |
|--------|------|-------------|--------|
| [e.g., Door] | [e.g., 48×64] | [e.g., Touch with key collected] | [e.g., Opens, triggers level complete] |
| [e.g., Spring] | [e.g., 32×32] | [e.g., Land on top] | [e.g., Launches player 2× normal jump height] |

### 2.7 UI Layout

#### Screen: Main Menu

```
┌─────────────────────────────┐
│                             │
│        🎮 GAME TITLE        │
│                             │
│       [ ▶ PLAY ]            │
│       [ ⚙ Settings ]       │
│                             │
│     🔊 Sound: ON/OFF        │
└─────────────────────────────┘
```

#### Screen: Gameplay HUD

```
┌─────────────────────────────┐
│ ❤️❤️❤️    ⭐ 0042    ⏱ 1:23  │
│                             │
│                             │
│      [ Game World ]         │
│                             │
│                             │
│              [ ⏸ ]          │
└─────────────────────────────┘
```

- **HUD elements:** [e.g., Lives (top-left), Score (top-center), Timer (top-right), Pause (bottom-right)]
- **Font:** [e.g., Rounded, bold, white with dark outline for readability]
- **Transitions:** [e.g., Fade to black between screens, 0.5 sec duration]

#### Navigation Flow

```
Menu ──▶ Gameplay ──▶ Win ──▶ Next Level / Menu
              │                │
              ▼                ▼
           Pause            Lose ──▶ Retry / Menu
```

### 2.8 Audio Integration

| Game Event | Sound Type | Description | File |
|------------|-----------|-------------|------|
| [e.g., Player jumps] | SFX | [e.g., Short upward whoosh] | `jump.mp3` |
| [e.g., Collect star] | SFX | [e.g., Bright sparkle chime] | `collect.mp3` |
| [e.g., Enemy defeated] | SFX | [e.g., Soft pop/squish] | `enemy_defeat.mp3` |
| [e.g., Player hurt] | SFX | [e.g., Gentle "ow" or buzz — NOT scary] | `hurt.mp3` |
| [e.g., Level complete] | SFX | [e.g., Victory fanfare, 3 sec] | `win.mp3` |
| [e.g., Game over] | SFX | [e.g., Gentle descending notes — encouraging] | `lose.mp3` |
| [e.g., Menu screen] | Music | [e.g., Upbeat loop, 30 sec] | `menu_music.mp3` |
| [e.g., Gameplay] | Music | [e.g., Energetic adventure loop, 60 sec] | `level_music.mp3` |
| [e.g., Button click] | UI | [e.g., Soft click/pop] | `ui_click.mp3` |

### 2.9 Art Asset Requirements

| Asset | Dimensions | Format | States/Frames | Priority |
|-------|-----------|--------|---------------|----------|
| [e.g., Player spritesheet] | [e.g., 384×64 (6 frames × 64px)] | PNG | [e.g., idle(4), run(6), jump(2), fall(2), hurt(3), win(5)] | High |
| [e.g., Enemy spritesheet] | [e.g., 192×48 (4 frames × 48px)] | PNG | [e.g., walk(4), defeat(3)] | High |
| [e.g., Tileset] | [e.g., 256×256 (8×8 tiles of 32px)] | PNG | [e.g., ground, grass, dirt, platform, spikes] | High |
| [e.g., Background layers] | [e.g., 1280×720 each] | PNG | [e.g., sky, far mountains, near trees] | Medium |
| [e.g., Collectible star] | [e.g., 128×32 (4 frames × 32px)] | PNG | [e.g., sparkle(4)] | Medium |
| [e.g., UI buttons] | [e.g., 200×60] | PNG | [e.g., normal, hover, pressed] | Medium |
| [e.g., Particle effects] | [e.g., 16×16] | PNG | [e.g., sparkle, dust, pop] | Low |

### 2.10 Technical Requirements

| Requirement | Target |
|-------------|--------|
| **Target FPS** | [e.g., 60 FPS] |
| **Resolution** | [e.g., 1280×720, scales to fit] |
| **Aspect ratio** | [e.g., 16:9 with letterboxing fallback] |
| **Input: Desktop** | [e.g., Keyboard (arrow keys + space) and mouse] |
| **Input: Mobile** | [e.g., Touch controls (on-screen D-pad + jump button)] |
| **Browser support** | [e.g., Chrome, Firefox, Safari, Edge — latest versions] |
| **Max asset load** | [e.g., < 5 MB total for fast loading] |
| **Audio format** | [e.g., MP3 with OGG fallback] |
| **Save system** | [e.g., localStorage for high score and level progress] |

### 2.11 Scope Boundaries

#### ✅ Version 1 (MVP) — Build This

- [e.g., 3-5 playable levels]
- [e.g., 1 player character with basic movement]
- [e.g., 1 enemy type]
- [e.g., Collectible items and scoring]
- [e.g., Menu, gameplay, win, and lose screens]
- [e.g., Background music and core sound effects]
- [e.g., Desktop keyboard controls]

#### 🔮 Version 2 (Future) — Defer This

- [e.g., Mobile touch controls]
- [e.g., Additional enemy types]
- [e.g., Power-up system]
- [e.g., Level editor]
- [e.g., Leaderboard / high score sharing]
- [e.g., Additional player characters or skins]
- [e.g., Story cutscenes between levels]

#### 🚫 Out of Scope — Not Planned

- [e.g., Multiplayer]
- [e.g., In-app purchases]
- [e.g., Account system / login]
- [e.g., 3D graphics]

---

*This document is the single source of truth for the game. Update it as decisions are made.*
