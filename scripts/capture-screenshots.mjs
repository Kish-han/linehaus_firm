import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";

const execFileAsync = promisify(execFile);
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDir = "C:\\Users\\kisha\\.gemini\\antigravity\\brain\\7609dae9-4902-4bce-9af2-b88127d5535c\\screenshots";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
  // 1. Desktop 1440x900
  { name: "home-desktop-1440", url: "http://localhost:3000/", width: 1440, height: 900 },
  { name: "studio-desktop-1440", url: "http://localhost:3000/studio", width: 1440, height: 900 },
  { name: "projects-desktop-1440", url: "http://localhost:3000/projects", width: 1440, height: 900 },
  { name: "project-detail-desktop-1440", url: "http://localhost:3000/projects/courtyard-residence-bhadravati", width: 1440, height: 900 },
  { name: "services-desktop-1440", url: "http://localhost:3000/services", width: 1440, height: 900 },
  { name: "contact-desktop-1440", url: "http://localhost:3000/contact", width: 1440, height: 900 },

  // 2. Desktop 1280x800
  { name: "home-desktop-1280", url: "http://localhost:3000/", width: 1280, height: 800 },

  // 3. Tablet 768x1024
  { name: "home-tablet-768", url: "http://localhost:3000/", width: 768, height: 1024 },
  { name: "projects-tablet-768", url: "http://localhost:3000/projects", width: 768, height: 1024 },

  // 4. Mobile 390x844 (iPhone 14/15)
  { name: "home-mobile-390", url: "http://localhost:3000/", width: 390, height: 844 },
  { name: "studio-mobile-390", url: "http://localhost:3000/studio", width: 390, height: 844 },
  { name: "projects-mobile-390", url: "http://localhost:3000/projects", width: 390, height: 844 },
  { name: "project-detail-mobile-390", url: "http://localhost:3000/projects/courtyard-residence-bhadravati", width: 390, height: 844 },
  { name: "services-mobile-390", url: "http://localhost:3000/services", width: 390, height: 844 },
  { name: "contact-mobile-390", url: "http://localhost:3000/contact", width: 390, height: 844 },

  // 5. Mobile 360x800 (Android compact)
  { name: "home-mobile-360", url: "http://localhost:3000/", width: 360, height: 800 },
];

async function capture() {
  console.log(`Starting headless Chrome capture of ${targets.length} viewports to:\n${outputDir}\n`);

  for (const t of targets) {
    const filename = `${t.name}.png`;
    const filepath = path.join(outputDir, filename);

    const args = [
      "--headless=new",
      `--screenshot=${filepath}`,
      `--window-size=${t.width},${t.height}`,
      "--hide-scrollbars",
      "--disable-gpu",
      "--no-sandbox",
      "--virtual-time-budget=2000",
      t.url,
    ];

    try {
      console.log(`Capturing ${t.name} (${t.width}x${t.height}) from ${t.url}...`);
      await execFileAsync(chromePath, args);
      const stat = fs.statSync(filepath);
      console.log(`  -> Saved ${filename} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`  -> Failed capturing ${t.name}:`, err.message);
    }
  }

  console.log("\nAll captures complete.");
}

capture();
