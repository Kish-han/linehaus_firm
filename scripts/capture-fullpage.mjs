import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";

const execFileAsync = promisify(execFile);
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDir = "C:\\Users\\kisha\\.gemini\\antigravity\\brain\\7609dae9-4902-4bce-9af2-b88127d5535c\\screenshots";

const fullPageTargets = [
  { name: "home-fullpage-1440", url: "http://localhost:3000/", width: 1440, height: 4200 },
  { name: "projects-fullpage-1440", url: "http://localhost:3000/projects", width: 1440, height: 2200 },
  { name: "project-detail-fullpage-1440", url: "http://localhost:3000/projects/courtyard-residence-bhadravati", width: 1440, height: 3200 },
  { name: "studio-fullpage-1440", url: "http://localhost:3000/studio", width: 1440, height: 2600 },
  { name: "services-fullpage-1440", url: "http://localhost:3000/services", width: 1440, height: 2600 },
  { name: "contact-fullpage-1440", url: "http://localhost:3000/contact", width: 1440, height: 2000 },
  { name: "home-fullpage-mobile-390", url: "http://localhost:3000/", width: 390, height: 6000 },
];

async function captureFull() {
  console.log(`Starting full-page captures...`);
  for (const t of fullPageTargets) {
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
      console.log(`Capturing ${t.name}...`);
      await execFileAsync(chromePath, args);
      const stat = fs.statSync(filepath);
      console.log(`  -> Saved ${filename} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`  -> Failed ${t.name}:`, err.message);
    }
  }
  console.log("Full-page captures complete.");
}

captureFull();
