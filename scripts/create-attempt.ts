import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const attemptsDir = path.join(__dirname, "../src/attempts");

async function createAttempt() {
  const attempts = fs.readdirSync(attemptsDir);
  const nextNum = attempts.length + 1;
  const newAttemptDir = path.join(attemptsDir, `attempt-${nextNum}`);

  // Copy exercises structure to new attempt
  fs.mkdirSync(newAttemptDir, { recursive: true });
  copyDir(path.join(__dirname, "../src/exercises"), newAttemptDir);

  console.log(`Created attempt ${nextNum} at ${newAttemptDir}`);
}

function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

createAttempt();
