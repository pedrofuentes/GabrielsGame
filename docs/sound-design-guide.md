# 🔊 Sound Design Guide

> **Project:** [Game Name]
> **Created:** [Date]
> **Audio Direction:** [e.g., "Cheerful, playful, and rewarding — like a musical toy box"]
> **Status:** Draft | In Progress | Final

---

## 1. Audio Identity

### Mood & Style

- **Overall mood:** [e.g., Upbeat, friendly, magical, adventurous]
- **Musical genre:** [e.g., Light orchestral, chiptune, lo-fi, acoustic, electronic pop]
- **Instruments:** [e.g., Xylophone, ukulele, pizzicato strings, soft synths, steel drums]
- **Tempo:** [e.g., 110-130 BPM for gameplay, 80-90 BPM for menus, 140+ for boss fights]
- **Key/Scale:** [e.g., Major keys for happy areas, minor for mysterious areas, pentatonic for universal appeal]

### Audio Personality

> [e.g., "Sounds should feel like a friendly cartoon — bouncy, expressive, and never harsh. Every sound is a tiny reward. Even failure sounds should feel like 'oops, try again!' not 'you lost!'"]

### Reference Games / Media

| Reference | What to Take From It |
|-----------|---------------------|
| [e.g., Kirby's Dream Land] | [e.g., Cute, melodic SFX; every action feels rewarding] |
| [e.g., Animal Crossing] | [e.g., Gentle ambient sounds, relaxing music, satisfying UI clicks] |
| [e.g., Celeste] | [e.g., Emotional, dynamic music that responds to gameplay] |

---

## 2. Sound Effects List

### Player Actions

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Jump | [e.g., Short rising "boing" — springy and light] | [e.g., 0.2s] | [e.g., jsfxr / Bfxr] | `sfx_jump.mp3` |
| Land | [e.g., Soft thud with a tiny bounce] | [e.g., 0.15s] | [e.g., jsfxr] | `sfx_land.mp3` |
| Run / footsteps | [e.g., Light pitter-patter, looping] | [e.g., 0.3s loop] | [e.g., Freesound.org] | `sfx_footstep.mp3` |
| Hurt | [e.g., Gentle "bonk" or rubber squeak — NOT painful sounding] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_hurt.mp3` |
| Defeat / fall | [e.g., Descending slide whistle, comedic] | [e.g., 0.5s] | [e.g., jsfxr] | `sfx_defeat.mp3` |
| Special ability | [e.g., Magical shimmer with rising chime] | [e.g., 0.5s] | [e.g., ChipTone] | `sfx_special.mp3` |

### Items & Collectibles

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Collect coin/star | [e.g., Bright "ding" chime — single note, ascending] | [e.g., 0.2s] | [e.g., jsfxr] | `sfx_collect.mp3` |
| Collect power-up | [e.g., Ascending arpeggio, sparkly, triumphant] | [e.g., 0.5s] | [e.g., jsfxr] | `sfx_powerup.mp3` |
| Collect final item | [e.g., Full chord resolution, satisfying completion tone] | [e.g., 0.8s] | [e.g., Custom] | `sfx_collect_final.mp3` |

### Enemies & Hazards

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Enemy defeated | [e.g., Soft "pop" like a bubble bursting] | [e.g., 0.25s] | [e.g., jsfxr] | `sfx_enemy_pop.mp3` |
| Enemy alert / spotted | [e.g., Quick short chirp, curious-sounding] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_enemy_alert.mp3` |
| Hazard warning | [e.g., Two quick soft beeps] | [e.g., 0.4s] | [e.g., jsfxr] | `sfx_hazard_warn.mp3` |

### Environment & Interactions

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Door open | [e.g., Creaky wood with a "whoosh" of air] | [e.g., 0.5s] | [e.g., Freesound.org] | `sfx_door_open.mp3` |
| Switch / lever | [e.g., Mechanical click with a chime confirmation] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_switch.mp3` |
| Spring / bounce pad | [e.g., Exaggerated boing, cartoony] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_spring.mp3` |
| Checkpoint reached | [e.g., Warm bell tone, reassuring] | [e.g., 0.5s] | [e.g., Custom] | `sfx_checkpoint.mp3` |

### UI Sounds

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Button click | [e.g., Soft, satisfying pop/click] | [e.g., 0.1s] | [e.g., jsfxr] | `sfx_ui_click.mp3` |
| Button hover | [e.g., Very subtle soft tick] | [e.g., 0.05s] | [e.g., jsfxr] | `sfx_ui_hover.mp3` |
| Menu open | [e.g., Gentle whoosh with a sparkle] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_ui_open.mp3` |
| Menu close | [e.g., Soft reverse whoosh] | [e.g., 0.2s] | [e.g., jsfxr] | `sfx_ui_close.mp3` |
| Error / invalid | [e.g., Low soft buzz — "nope" feeling, not harsh] | [e.g., 0.2s] | [e.g., jsfxr] | `sfx_ui_error.mp3` |
| Countdown tick | [e.g., Soft clock tick] | [e.g., 0.1s] | [e.g., jsfxr] | `sfx_countdown.mp3` |

### Game State Sounds

| Event | Sound Description | Duration | Source/Tool | File Name |
|-------|------------------|----------|-------------|-----------|
| Level start | [e.g., Quick upbeat fanfare — "here we go!"] | [e.g., 1.5s] | [e.g., Custom / GarageBand] | `sfx_level_start.mp3` |
| Level complete | [e.g., Triumphant jingle, ascending notes, celebration] | [e.g., 3s] | [e.g., Custom] | `sfx_level_complete.mp3` |
| Game over | [e.g., Gentle descending notes — encouraging "try again" tone] | [e.g., 2s] | [e.g., Custom] | `sfx_game_over.mp3` |
| New high score | [e.g., Fanfare with extra sparkle and cheer] | [e.g., 3s] | [e.g., Custom] | `sfx_high_score.mp3` |
| Pause | [e.g., Soft "bloop" and music dims] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_pause.mp3` |
| Unpause | [e.g., Reverse "bloop" and music returns] | [e.g., 0.3s] | [e.g., jsfxr] | `sfx_unpause.mp3` |

---

## 3. Music Tracks

| Scene / Context | Track Description | Mood | Tempo | Loop Length | File Name |
|----------------|-------------------|------|-------|-------------|-----------|
| Main menu | [e.g., Gentle, inviting melody with soft instruments] | [e.g., Welcoming, calm] | [e.g., 90 BPM] | [e.g., 30s] | `music_menu.mp3` |
| Level 1 / Tutorial | [e.g., Light, simple melody — not distracting from learning] | [e.g., Curious, friendly] | [e.g., 110 BPM] | [e.g., 45s] | `music_level1.mp3` |
| Standard levels | [e.g., Upbeat adventure theme with melodic hooks] | [e.g., Energetic, fun] | [e.g., 120 BPM] | [e.g., 60s] | `music_gameplay.mp3` |
| Challenging levels | [e.g., Faster version of main theme, added percussion] | [e.g., Exciting, urgent] | [e.g., 140 BPM] | [e.g., 45s] | `music_intense.mp3` |
| Boss fight | [e.g., Dramatic but still kid-friendly, strong rhythm] | [e.g., Thrilling, brave] | [e.g., 150 BPM] | [e.g., 30s] | `music_boss.mp3` |
| Victory / results | [e.g., Celebratory flourish, triumphant] | [e.g., Proud, happy] | [e.g., 120 BPM] | [e.g., 15s] | `music_victory.mp3` |
| Game over screen | [e.g., Soft, encouraging — "it's okay, try again"] | [e.g., Gentle, hopeful] | [e.g., 80 BPM] | [e.g., 15s] | `music_gameover.mp3` |

### Music Rules

- **Looping:** All gameplay music must loop seamlessly (no audible pop or gap)
- **Transitions:** [e.g., Crossfade over 0.5s when switching tracks]
- **Intensity layers:** [e.g., Consider layered tracks that add/remove instruments based on gameplay state]
- **Key consistency:** [e.g., Keep related tracks in compatible keys for smooth transitions]
- **Melodic hooks:** [e.g., Use a short recognizable melody that ties the soundtrack together]

---

## 4. Ambient Audio

| Environment | Sounds | Volume Level | Loop | File Name |
|-------------|--------|-------------|------|-----------|
| [e.g., Grassy Plains] | [e.g., Birds chirping, gentle wind, rustling leaves] | [e.g., 20-30% of music volume] | Yes | `amb_plains.mp3` |
| [e.g., Underground Cave] | [e.g., Dripping water, distant echoes, soft hum] | [e.g., 25-35% of music volume] | Yes | `amb_cave.mp3` |
| [e.g., Sky Level] | [e.g., Soft wind whoosh, distant bird calls] | [e.g., 15-25% of music volume] | Yes | `amb_sky.mp3` |
| [e.g., Ocean / Beach] | [e.g., Waves, seagulls, bubbly water] | [e.g., 25-35% of music volume] | Yes | `amb_ocean.mp3` |

### Ambient Rules

- **Purpose:** Ambience fills silence and adds atmosphere — it should never grab attention
- **Layering:** Ambient plays underneath music and SFX, always at the lowest priority
- **Transitions:** [e.g., Fade in over 1s when entering an area, fade out over 1s when leaving]
- **Variation:** [e.g., Use long loops (30-60s) to avoid noticeable repetition]

---

## 5. Audio Technical Specs

| Property | Specification |
|----------|--------------|
| **Format (primary)** | [e.g., MP3 (MPEG Audio Layer 3)] |
| **Format (fallback)** | [e.g., OGG Vorbis for broader browser support] |
| **Sample rate** | [e.g., 44100 Hz (44.1 kHz)] |
| **Bit rate (music)** | [e.g., 128-192 kbps] |
| **Bit rate (SFX)** | [e.g., 96-128 kbps] |
| **Channels** | [e.g., Stereo for music, Mono for SFX (saves file size)] |
| **Max file size (SFX)** | [e.g., 50 KB per sound] |
| **Max file size (music)** | [e.g., 1 MB per track] |
| **Max file size (ambient)** | [e.g., 500 KB per loop] |
| **Total audio budget** | [e.g., < 3 MB for all audio combined] |
| **Naming convention** | [e.g., `sfx_action.mp3`, `music_scene.mp3`, `amb_environment.mp3`] |

### File Organization

```
audio/
├── sfx/
│   ├── sfx_jump.mp3
│   ├── sfx_collect.mp3
│   ├── sfx_hurt.mp3
│   ├── sfx_enemy_pop.mp3
│   ├── sfx_ui_click.mp3
│   └── ...
├── music/
│   ├── music_menu.mp3
│   ├── music_gameplay.mp3
│   ├── music_victory.mp3
│   └── ...
└── ambient/
    ├── amb_plains.mp3
    ├── amb_cave.mp3
    └── ...
```

---

## 6. Volume Mixing Guide

### Relative Volume Levels

```
Volume
100% ┤
 90% ┤
 80% ┤  ████ SFX (important actions: collect, level complete)
 70% ┤  ████
 60% ┤  ████  ████ Music
 50% ┤        ████
 40% ┤        ████
 30% ┤              ████ SFX (subtle: footsteps, UI hover)
 20% ┤              ████  ████ Ambient
 10% ┤                    ████
  0% ┤
     └──────────────────────────
```

### Mix Table

| Audio Category | Base Volume | Notes |
|---------------|-------------|-------|
| **Music** | [e.g., 50-60%] | [e.g., Backbone of audio, always present but never overpowering] |
| **SFX — High priority** | [e.g., 70-85%] | [e.g., Collecting items, winning, important feedback. Must cut through music.] |
| **SFX — Medium priority** | [e.g., 50-65%] | [e.g., Jumping, enemy interactions. Clear but not dominant.] |
| **SFX — Low priority** | [e.g., 30-40%] | [e.g., Footsteps, UI hover. Felt more than heard.] |
| **UI Sounds** | [e.g., 40-55%] | [e.g., Clicks and navigation. Satisfying but not loud.] |
| **Ambient** | [e.g., 15-25%] | [e.g., Background atmosphere. Should be barely noticeable consciously.] |

### Dynamic Mixing Rules

- **On pause:** [e.g., Music drops to 30%, SFX muted, ambient muted]
- **On level complete:** [e.g., Music fades out, victory jingle plays at 80%, then results music fades in]
- **On game over:** [e.g., All audio fades out over 0.5s, then game over music plays at 50%]
- **During boss fight:** [e.g., Ambient muted, music at 70%, SFX boosted to 90%]
- **Menu screens:** [e.g., Music at 60%, UI sounds at 50%, no ambient]

---

## 7. Integration Map

> Maps every game event to its audio trigger and corresponding file.

### Player Events

| Game Event | Audio Trigger | Audio Type | File | Priority |
|-----------|--------------|-----------|------|----------|
| `player.jump` | [e.g., On jump input accepted] | SFX | `sfx_jump.mp3` | [e.g., High — always play] |
| `player.land` | [e.g., On ground collision after airborne] | SFX | `sfx_land.mp3` | [e.g., Medium — skip if rapid] |
| `player.hurt` | [e.g., On enemy/hazard collision] | SFX | `sfx_hurt.mp3` | [e.g., High — always play] |
| `player.defeat` | [e.g., On lives reaching 0] | SFX | `sfx_defeat.mp3` | [e.g., High — interrupt others] |

### Item Events

| Game Event | Audio Trigger | Audio Type | File | Priority |
|-----------|--------------|-----------|------|----------|
| `item.collect` | [e.g., On player overlap with collectible] | SFX | `sfx_collect.mp3` | [e.g., High — pitch up slightly for rapid collection] |
| `item.powerup` | [e.g., On player overlap with power-up] | SFX | `sfx_powerup.mp3` | [e.g., High — plays over collect sound] |

### Enemy Events

| Game Event | Audio Trigger | Audio Type | File | Priority |
|-----------|--------------|-----------|------|----------|
| `enemy.defeated` | [e.g., On enemy health reaching 0 / stomp] | SFX | `sfx_enemy_pop.mp3` | [e.g., High] |
| `enemy.alert` | [e.g., On player entering detection range] | SFX | `sfx_enemy_alert.mp3` | [e.g., Low — don't spam] |

### State Events

| Game Event | Audio Trigger | Audio Type | File | Action |
|-----------|--------------|-----------|------|--------|
| `state.menu` | [e.g., On menu screen load] | Music | `music_menu.mp3` | [e.g., Fade in, loop] |
| `state.gameplay` | [e.g., On level start countdown finish] | Music | `music_gameplay.mp3` | [e.g., Crossfade from menu, loop] |
| `state.pause` | [e.g., On pause activated] | Music | — | [e.g., Lower music volume to 30%] |
| `state.unpause` | [e.g., On resume] | Music | — | [e.g., Restore music volume to 60%] |
| `state.win` | [e.g., On level clear condition met] | Music | `music_victory.mp3` | [e.g., Stop gameplay music, play once] |
| `state.lose` | [e.g., On game over condition met] | Music | `music_gameover.mp3` | [e.g., Fade out all, play once] |

### Environment Events

| Game Event | Audio Trigger | Audio Type | File | Action |
|-----------|--------------|-----------|------|--------|
| `env.enter_zone` | [e.g., On player entering new area] | Ambient | `amb_[zone].mp3` | [e.g., Crossfade over 1s] |
| `env.exit_zone` | [e.g., On player leaving area] | Ambient | — | [e.g., Fade out over 1s] |

---

## 8. Free Resource Recommendations

### 🛠️ Sound Effect Generators

| Tool | URL | Best For | Cost |
|------|-----|----------|------|
| jsfxr | [https://sfxr.me/](https://sfxr.me/) | Retro/chiptune SFX, quick prototyping | Free |
| ChipTone | [https://sfbgames.itch.io/chiptone](https://sfbgames.itch.io/chiptone) | More control over chiptune sounds | Free |
| Bfxr | [https://www.bfxr.net/](https://www.bfxr.net/) | Classic game sound effects | Free |
| LabChirp | [http://labbed.net/software/labchirp/](http://labbed.net/software/labchirp/) | Detailed SFX editing | Free |

### 🎵 Music Tools

| Tool | URL | Best For | Cost |
|------|-----|----------|------|
| Beepbox | [https://www.beepbox.co/](https://www.beepbox.co/) | Simple chiptune music, browser-based | Free |
| Bosca Ceoil | [https://terrycavanagh.itch.io/bosca-ceoil](https://terrycavanagh.itch.io/bosca-ceoil) | Beginner-friendly music creation | Free |
| LMMS | [https://lmms.io/](https://lmms.io/) | Full-featured music production | Free / Open Source |
| GarageBand | Built into macOS/iOS | Polished music with loops and instruments | Free (Apple) |

### 📚 Free Sound Libraries

| Source | URL | License | Notes |
|--------|-----|---------|-------|
| Freesound.org | [https://freesound.org/](https://freesound.org/) | Various (check each) | [Huge library, check license per sound] |
| OpenGameArt | [https://opengameart.org/](https://opengameart.org/) | Various open licenses | [Game-specific, well-organized] |
| Kenney.nl | [https://kenney.nl/assets?q=audio](https://kenney.nl/assets?q=audio) | CC0 (Public Domain) | [High quality, no attribution needed] |
| Mixkit | [https://mixkit.co/free-sound-effects/](https://mixkit.co/free-sound-effects/) | Free license | [Curated, professional quality] |

### 🔧 Audio Editing

| Tool | URL | Best For | Cost |
|------|-----|----------|------|
| Audacity | [https://www.audacityteam.org/](https://www.audacityteam.org/) | Editing, trimming, converting audio files | Free / Open Source |
| Ocenaudio | [https://www.ocenaudio.com/](https://www.ocenaudio.com/) | Simpler audio editing alternative | Free |

---

## 9. Audio Safety Notes 🛡️

> Kids' games require extra care with audio. These rules are **mandatory, not optional**.

### Volume Safety

- ⚠️ **No sudden loud sounds** — all audio must have gentle attack (fade-in of at least 10-20ms)
- ⚠️ **Peak volume limit** — no individual sound should exceed [e.g., -6 dB] relative to master
- ⚠️ **Master volume control** — game MUST have an easily accessible volume slider or mute button
- ⚠️ **Default volume** — game should start at [e.g., 70%] master volume, not 100%
- ⚠️ **Headphone safety** — assume kids may be wearing headphones; mix conservatively

### Emotional Safety

- 😊 **Failure sounds must be gentle** — descending notes, soft "aww" tones, never harsh buzzes or alarms
- 😊 **No startling sounds** — avoid sudden loud impacts, screams, or harsh noise bursts
- 😊 **Encouraging tone** — game over sounds should feel like "oops, try again!" not "you failed!"
- 😊 **No anxiety-inducing audio** — avoid rapidly accelerating tempo or increasingly shrill alarms for timers
- 😊 **Timer warnings should be gentle** — soft ticking, not frantic beeping

### Repetition Tolerance

- 🔁 **Frequently heard sounds (jump, collect) must be pleasant on the 1000th play** — test for ear fatigue
- 🔁 **Vary pitch slightly** on rapid-fire sounds (e.g., pitch up 5% per rapid coin collect) to reduce monotony
- 🔁 **Music loops must be long enough** to avoid obvious repetition (minimum [e.g., 30 seconds])
- 🔁 **Consider having 2-3 variants** for very common sounds (footsteps, jumps) and randomly selecting

### Testing Checklist

- [ ] Play the game for 10+ minutes — does any sound become annoying?
- [ ] Play with volume at 100% — is anything uncomfortably loud?
- [ ] Play with headphones — is the experience pleasant?
- [ ] Have a child playtest — do they react negatively to any sound?
- [ ] Mute the game — is it still playable? (audio should enhance, not be required)
- [ ] Test all sound effects in rapid succession — do any clip, distort, or stack badly?

---

*This guide ensures the game sounds great, feels safe, and creates a joyful audio experience for young players. Reference it when creating, selecting, or reviewing any audio for the game.*
