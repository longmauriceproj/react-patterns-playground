import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const attemptsDir = path.join(__dirname, '../src/attempts');
const exercisesDir = path.join(__dirname, '../src/exercises');

async function createAttempt() {
  // Create attempts directory if it doesn't exist
  if (!fs.existsSync(attemptsDir)) {
    fs.mkdirSync(attemptsDir, { recursive: true });
  }

  const attempts = fs.readdirSync(attemptsDir);
  const nextNum = attempts.length + 1;
  const newAttemptDir = path.join(attemptsDir, `attempt-${nextNum}`);

  // Copy exercises structure to new attempt
  fs.mkdirSync(newAttemptDir, { recursive: true });
  copyDir(exercisesDir, newAttemptDir);

  // Reset router to NoExerciseSelected
  const routerContent = `
import { createBrowserRouter } from 'react-router-dom';
import NoExerciseSelected from './components/NoExerciseSelected';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NoExerciseSelected />,
  }
]);
`;

  fs.writeFileSync(path.join(__dirname, '../src/router.tsx'), routerContent);

  console.log(`\x1b[32mCreated attempt ${nextNum} at ${newAttemptDir}\x1b[0m`);
  console.log(
    '\nRun \x1b[33myarn select-exercise\x1b[0m to choose an exercise to work on',
  );
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
