// generate-icons.js — Creates app icons for iPad home screen
// Run: node generate-icons.js

const sharp = require('sharp');
const path = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#66BB6A"/>
      <stop offset="100%" stop-color="#388E3C"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
    <radialGradient id="ballGrad" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E8E8E8"/>
    </radialGradient>
  </defs>

  <!-- Background: rounded green square -->
  <rect width="512" height="512" rx="96" ry="96" fill="url(#bg)"/>

  <!-- Subtle field lines -->
  <line x1="256" y1="80" x2="256" y2="432" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>
  <circle cx="256" cy="256" r="80" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>

  <!-- Soccer ball -->
  <circle cx="256" cy="240" r="130" fill="url(#ballGrad)" stroke="#888" stroke-width="3"/>

  <!-- Pentagon pattern - center -->
  <polygon points="256,200 280,215 272,242 240,242 232,215" fill="#333" stroke="#444" stroke-width="1.5"/>

  <!-- Pentagon pattern - top -->
  <polygon points="256,152 268,162 264,176 248,176 244,162" fill="#333" stroke="#444" stroke-width="1"/>

  <!-- Pentagon pattern - top right -->
  <polygon points="310,178 322,188 318,202 302,202 298,188" fill="#333" stroke="#444" stroke-width="1"/>

  <!-- Pentagon pattern - bottom right -->
  <polygon points="298,262 310,272 306,286 290,286 286,272" fill="#333" stroke="#444" stroke-width="1"/>

  <!-- Pentagon pattern - bottom left -->
  <polygon points="226,262 238,272 234,286 218,286 214,272" fill="#333" stroke="#444" stroke-width="1"/>

  <!-- Pentagon pattern - top left -->
  <polygon points="202,178 214,188 210,202 194,202 190,188" fill="#333" stroke="#444" stroke-width="1"/>

  <!-- Ball shine highlight -->
  <ellipse cx="225" cy="200" rx="35" ry="25" fill="rgba(255,255,255,0.45)"/>

  <!-- "GOL" text at bottom -->
  <text x="256" y="420" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="80" font-weight="900" fill="#FFD700" stroke="#8B6914" stroke-width="4">GOL</text>

  <!-- Subtle top shine overlay -->
  <rect width="512" height="256" rx="96" ry="96" fill="url(#shine)"/>
</svg>`;

async function generate() {
    const svgBuffer = Buffer.from(svg);
    const outputDir = path.join(__dirname, 'assets', 'art');

    // 180x180 - Apple Touch Icon
    await sharp(svgBuffer)
        .resize(180, 180)
        .png()
        .toFile(path.join(outputDir, 'icon-180.png'));
    console.log('✅ Created icon-180.png (apple-touch-icon)');

    // 512x512 - Web Manifest / high-res
    await sharp(svgBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(outputDir, 'icon-512.png'));
    console.log('✅ Created icon-512.png (web manifest)');

    // 192x192 - Web Manifest standard
    await sharp(svgBuffer)
        .resize(192, 192)
        .png()
        .toFile(path.join(outputDir, 'icon-192.png'));
    console.log('✅ Created icon-192.png (web manifest)');

    // 32x32 - Favicon
    await sharp(svgBuffer)
        .resize(32, 32)
        .png()
        .toFile(path.join(outputDir, 'favicon-32.png'));
    console.log('✅ Created favicon-32.png');

    console.log('\n🎉 All icons generated in assets/art/');
}

generate().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
