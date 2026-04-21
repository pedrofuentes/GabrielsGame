# 🎨 Art Style Guide

> **Project:** [Game Name]
> **Created:** [Date]
> **Style Direction:** [e.g., "Bright, friendly, hand-drawn cartoon"]
> **Status:** Draft | In Progress | Final

---

## 1. Visual Identity

### Mood & Feel

- **Overall mood:** [e.g., Cheerful, adventurous, magical, cozy, silly]
- **Energy level:** [e.g., High-energy and bouncy / calm and dreamy]
- **Target emotion:** [e.g., "The player should feel brave and curious"]
- **Age appropriateness:** [e.g., Fun and safe for ages 5-10, nothing scary or violent]

### Visual References

| Reference | What to Take From It |
|-----------|---------------------|
| [e.g., Kirby games] | [e.g., Rounded shapes, pastel colors, cute enemies] |
| [e.g., Adventure Time] | [e.g., Simple character shapes, bold outlines, flat colors] |
| [e.g., Celeste] | [e.g., Pixel art style, expressive small sprites, vibrant backgrounds] |

### Keywords for Art Direction

> [e.g., Friendly • Colorful • Bouncy • Round • Soft • Playful • Magical]

---

## 2. Color Palette

### Primary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | [e.g., 🔵 Sky Blue] | `#[hex code]` | [e.g., Player character, main UI elements] |
| Secondary | [e.g., 🟡 Sunny Yellow] | `#[hex code]` | [e.g., Collectibles, highlights, score text] |
| Accent | [e.g., 🔴 Cherry Red] | `#[hex code]` | [e.g., Danger indicators, enemies, important buttons] |

### Background Colors

| Layer | Color | Hex | Usage |
|-------|-------|-----|-------|
| Sky / Far BG | [e.g., Light lavender] | `#[hex code]` | [e.g., Distant sky, creates depth] |
| Mid BG | [e.g., Soft green] | `#[hex code]` | [e.g., Far hills or clouds] |
| Near BG | [e.g., Medium green] | `#[hex code]` | [e.g., Close scenery, trees] |
| Ground/Platform | [e.g., Warm brown] | `#[hex code]` | [e.g., Walkable surfaces] |

### UI Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| UI Background | [e.g., Dark navy] | `#[hex code]` | [e.g., Menu panels, overlays] |
| UI Text | [e.g., White] | `#[hex code]` | [e.g., All readable text] |
| Text Outline | [e.g., Dark gray] | `#[hex code]` | [e.g., Text stroke for readability on any BG] |
| Button Fill | [e.g., Bright green] | `#[hex code]` | [e.g., Primary action buttons] |
| Button Hover | [e.g., Lighter green] | `#[hex code]` | [e.g., Hover/focus state] |
| Disabled | [e.g., Gray] | `#[hex code]` | [e.g., Inactive buttons] |

### Palette Rules

- **Do:** [e.g., Use high contrast between characters and backgrounds]
- **Do:** [e.g., Keep colors warm and inviting — no harsh neon]
- **Don't:** [e.g., Use pure black (#000000) — use a dark navy or charcoal instead]
- **Don't:** [e.g., Place same-lightness colors next to each other]

---

## 3. Shape Language

### Overall Approach

- **Corners:** [e.g., Rounded — everything feels soft and safe, minimum 4px radius]
- **Outlines:** [e.g., Thick (2-3px), dark outlines on all game objects for clarity]
- **Silhouettes:** [e.g., Every character/object should be identifiable from silhouette alone]

### Shape Associations

| Element | Shape Language | Reason |
|---------|---------------|--------|
| Player / friendly | [e.g., Round, soft, circles and ovals] | [e.g., Feels safe, approachable] |
| Enemies | [e.g., Slightly angular but still rounded] | [e.g., Looks mischievous, not terrifying] |
| Collectibles | [e.g., Simple geometric — stars, circles, diamonds] | [e.g., Easy to spot, satisfying to grab] |
| Platforms | [e.g., Rounded rectangles, organic edges] | [e.g., Looks natural, inviting to land on] |
| Dangers / spikes | [e.g., Pointy triangles, sharper edges] | [e.g., Visual signal: "this hurts!"] |
| UI elements | [e.g., Rounded rectangles, pill shapes] | [e.g., Friendly, easy to tap/click] |

---

## 4. Character Design Guidelines

### Proportions

- **Head-to-body ratio:** [e.g., 1:1 (chibi/cute style) — big head, small body]
- **Eye size:** [e.g., Large and expressive — eyes are 30-40% of the face]
- **Limb style:** [e.g., Simple, noodle-like arms and legs]
- **Overall height:** [e.g., 3-4 head heights tall for heroes]

### Expressions

Characters should communicate emotion clearly even at small sprite sizes:

| Emotion | How to Show It |
|---------|---------------|
| Happy/Idle | [e.g., Slight smile, gentle blink animation] |
| Running/Excited | [e.g., Wide eyes, open mouth, speed lines] |
| Hurt | [e.g., Squished eyes, small frown — NOT crying or scary] |
| Winning | [e.g., Arms up, big smile, sparkle effects] |

### Design Rules

- **Do:** [e.g., Make characters recognizable at 32×32 pixels]
- **Do:** [e.g., Use unique color per character for easy identification]
- **Do:** [e.g., Give each character one standout feature (hat, color, accessory)]
- **Don't:** [e.g., Add excessive detail that gets lost at game scale]
- **Don't:** [e.g., Make enemies genuinely scary — mischievous and silly is the goal]

---

## 5. Environment Design Guidelines

### Layering & Parallax

| Layer | Scroll Speed | Content | Detail Level |
|-------|-------------|---------|-------------|
| Far background | [e.g., 0.1× (very slow)] | [e.g., Sky, clouds, distant mountains] | [e.g., Low — soft shapes, muted colors] |
| Mid background | [e.g., 0.3-0.5×] | [e.g., Hills, trees, buildings] | [e.g., Medium — recognizable but not distracting] |
| Game layer | [e.g., 1× (matches camera)] | [e.g., Platforms, characters, items] | [e.g., High — crisp, clear, fully detailed] |
| Foreground | [e.g., 1.2-1.5× (faster)] | [e.g., Grass, particles, light effects] | [e.g., Low — atmospheric, semi-transparent] |

### Interactive vs. Decorative

Players need to instantly tell what they can interact with:

| Type | Visual Treatment |
|------|-----------------|
| **Walkable platforms** | [e.g., Solid colors, clear edges, dark outline] |
| **Hazards** | [e.g., Bright warning colors (red/orange), spiky shapes, subtle animation] |
| **Collectibles** | [e.g., Sparkle/glow effect, bobbing animation, stands out from background] |
| **Decorative only** | [e.g., Muted colors, no outline, lower contrast, behind game layer] |

### Environment Themes

| World / Level | Color Scheme | Key Elements | Mood |
|--------------|-------------|-------------|------|
| [e.g., Grassy Plains] | [e.g., Greens, blues, yellows] | [e.g., Rolling hills, flowers, butterflies] | [e.g., Cheerful, welcoming — tutorial area] |
| [e.g., Crystal Caves] | [e.g., Purples, teals, sparkles] | [e.g., Crystals, underground lakes, glowing mushrooms] | [e.g., Mysterious, magical] |
| [e.g., Sky Kingdom] | [e.g., Whites, light blues, golds] | [e.g., Clouds, floating islands, rainbows] | [e.g., Dreamy, peaceful] |

---

## 6. UI Design Guidelines

### Button Style

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    ▶ PLAY       │     │    ▶ PLAY       │     │    ▶ PLAY       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
     Normal                  Hover                  Pressed
  [solid fill]          [lighter fill +         [slightly smaller +
                         subtle glow]            darker fill]
```

- **Shape:** [e.g., Rounded rectangle, 16px border radius]
- **Min size:** [e.g., 180×50 px for comfortable tapping on mobile]
- **Label font:** [e.g., Bold, rounded sans-serif, ALL CAPS or Title Case]
- **Icon + text:** [e.g., Always pair important buttons with an icon for pre-readers]

### Font Guidelines

| Usage | Font Style | Size | Weight |
|-------|-----------|------|--------|
| Title / Logo | [e.g., Playful display font, custom or Fredoka One] | [e.g., 48-64px] | Bold |
| Menu buttons | [e.g., Rounded sans-serif] | [e.g., 24-32px] | Bold |
| HUD (score, time) | [e.g., Rounded monospace or sans-serif] | [e.g., 20-24px] | Bold |
| Body text / dialogs | [e.g., Clean sans-serif] | [e.g., 16-20px] | Regular |

### Icon Style

- **Style:** [e.g., Flat with subtle shading, matches character art style]
- **Size:** [e.g., 32×32 or 48×48 for HUD, 64×64 for menus]
- **Outline:** [e.g., Same dark outline as game art, 2px]
- **Meaning:** [e.g., Every icon must be understandable without text for young players]

### Feedback Animations

| Action | Animation | Duration |
|--------|-----------|----------|
| Button press | [e.g., Scale down to 90%, then bounce back to 100%] | [e.g., 150ms] |
| Collect item | [e.g., Item pops with particle burst, score number floats up] | [e.g., 300ms] |
| Take damage | [e.g., Screen flash (subtle), character blinks 3×] | [e.g., 1s] |
| Level complete | [e.g., Stars burst, character celebrates, screen wipe to results] | [e.g., 2s] |
| Menu transition | [e.g., Fade to black, then fade in] | [e.g., 500ms] |

---

## 7. Asset Specifications

| Asset Name | Dimensions | Format | States / Frames | Priority | Notes |
|-----------|-----------|--------|-----------------|----------|-------|
| [e.g., player_idle] | [e.g., 256×64 (4×64)] | PNG | [e.g., 4 frames] | High | [e.g., Looping, 8 FPS] |
| [e.g., player_run] | [e.g., 384×64 (6×64)] | PNG | [e.g., 6 frames] | High | [e.g., Looping, 10 FPS] |
| [e.g., enemy_walk] | [e.g., 192×48 (4×48)] | PNG | [e.g., 4 frames] | High | [e.g., Looping, 6 FPS] |
| [e.g., star_collect] | [e.g., 128×32 (4×32)] | PNG | [e.g., 4 frames] | Medium | [e.g., Sparkle loop, 8 FPS] |
| [e.g., tileset_grass] | [e.g., 256×256] | PNG | [e.g., 64 tiles (8×8 grid, 32px each)] | High | [e.g., Includes edges, corners, fills] |
| [e.g., bg_sky] | [e.g., 1280×720] | PNG | [e.g., 1 (static)] | Medium | [e.g., Parallax far layer] |
| [e.g., bg_mountains] | [e.g., 1920×400] | PNG | [e.g., 1 (seamless tile)] | Medium | [e.g., Parallax mid layer, tileable horizontally] |
| [e.g., btn_play] | [e.g., 200×60] | PNG | [e.g., normal, hover, pressed] | Medium | [e.g., 3 separate files or spritesheet] |
| [e.g., particle_sparkle] | [e.g., 64×16 (4×16)] | PNG | [e.g., 4 frames] | Low | [e.g., For collect effects] |
| [e.g., icon_heart] | [e.g., 32×32] | PNG | [e.g., full, empty] | Medium | [e.g., Lives display in HUD] |

---

## 8. Art Generation Prompt Template

When using AI art tools (e.g., DALL-E, Midjourney, Stable Diffusion) to generate assets:

### Character Prompt Template

```
[Art style] [character type] for a [genre] kids game.
[Shape language]: [description of proportions].
[Color]: [primary color scheme].
[Expression]: [emotion/mood].
[Action/Pose]: [what the character is doing].
[Background]: transparent/simple flat color.
[Style modifiers]: [e.g., pixel art, vector, hand-drawn, cel-shaded].
[Technical]: sprite sheet, [dimensions], game asset, clean edges, no artifacts.
```

**Example:**
```
Cute cartoon fox character for a 2D platformer kids game.
Chibi proportions with a big head and small body, 3 heads tall.
Orange and white color scheme with a blue scarf.
Happy expression with big round eyes.
Running pose, mid-stride with arms out.
Transparent background.
Flat vector style with thick dark outlines.
64×64 pixel sprite, game asset, clean edges, no artifacts.
```

### Environment Prompt Template

```
[Art style] [environment type] background for a [genre] kids game.
[Mood]: [description of feeling].
[Colors]: [palette description].
[Elements]: [list key objects in the scene].
[Layer]: [foreground / midground / background parallax layer].
[Technical]: [dimensions], seamless tileable, game asset.
```

### Tileset Prompt Template

```
[Art style] tileset for a [genre] kids game.
[Theme]: [environment type].
[Tiles needed]: [list: ground, grass top, dirt, platform, etc.].
[Grid]: [e.g., 32×32 per tile, 8×8 grid layout].
[Style]: [outline thickness, color approach].
[Technical]: [total dimensions], PNG, transparent background where applicable.
```

---

## 9. Placeholder Art Guidelines

Before final art is ready, use placeholders so development can proceed:

### Placeholder Standards

| Asset Type | Placeholder Approach |
|-----------|---------------------|
| Characters | [e.g., Colored rectangles with eyes drawn on — different color per character] |
| Platforms | [e.g., Solid colored rectangles with a 1px border] |
| Backgrounds | [e.g., Solid color gradient matching the palette] |
| Collectibles | [e.g., Simple colored circles with a letter label (S=star, C=coin)] |
| UI buttons | [e.g., Rounded rectangles with text labels, using final palette colors] |
| Enemies | [e.g., Red-tinted rectangles — clearly different from player] |

### Placeholder Rules

- **Do:** Match approximate size and hitbox of final assets
- **Do:** Use colors from the final palette so the feel is close
- **Do:** Label placeholders clearly (text on the shape or in filename)
- **Don't:** Spend time making placeholders look good — they're temporary
- **Don't:** Use placeholder art in any screenshots or shares without noting it

### Placeholder Color Code

| Color | Meaning |
|-------|---------|
| 🟦 Blue | Player / friendly |
| 🟥 Red | Enemy / danger |
| 🟩 Green | Platform / ground |
| 🟨 Yellow | Collectible / item |
| ⬜ White | UI element |
| 🟪 Purple | Special / interactive object |

---

## 10. Accessibility Notes

### Color Blind Friendly Design

- **Never rely on color alone** to convey information — always pair with shape, icon, or pattern
- **Test with color blindness simulators** (e.g., Coblis, Color Oracle) for Protanopia, Deuteranopia, and Tritanopia
- **Problematic pairings to avoid:**
  - Red/Green together for important distinctions
  - Blue/Purple for different item types
- **Safe approach:** Use color + shape + animation (e.g., enemy is red AND spiky AND pulsing)

### High Contrast Mode (if applicable)

| Element | Standard | High Contrast |
|---------|----------|--------------|
| Player outline | [e.g., 2px dark gray] | [e.g., 3px black] |
| Platform edges | [e.g., Subtle color change] | [e.g., Bold white outline] |
| Background | [e.g., Full-color gradient] | [e.g., Simplified, darker, less busy] |
| Collectibles | [e.g., Colored with sparkle] | [e.g., White glow added around item] |
| Text | [e.g., White with shadow] | [e.g., White with thick black outline] |

### General Accessibility

- **Minimum text size:** [e.g., 16px for readability on small screens]
- **Touch targets:** [e.g., Minimum 44×44 px for mobile buttons]
- **Animation safety:** [e.g., No rapid flashing (>3 flashes/sec), option to reduce motion]
- **Visual clarity:** [e.g., All interactive elements have clear visual distinction from decorative ones]

---

*This style guide ensures visual consistency across all assets. Reference it when creating or reviewing any art for the game.*
