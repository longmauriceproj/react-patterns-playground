// scripts/reset-attempts.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const attemptsDir = path.join(__dirname, '../src/attempts');

async function resetAttempts() {
  // Check if attempts directory exists
  if (!fs.existsSync(attemptsDir)) {
    console.log(
      '\x1b[33mNo attempts directory found. Nothing to reset.\x1b[0m',
    );
    return;
  }

  // Get confirmation before deleting
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message:
        '\x1b[31mWarning: This will delete all attempt directories. Are you sure?\x1b[0m',
      default: false,
    },
  ]);

  if (!confirm) {
    console.log('\x1b[33mReset cancelled.\x1b[0m');
    return;
  }

  // Delete attempts directory
  fs.rmSync(attemptsDir, { recursive: true, force: true });

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

  console.log('\x1b[32mSuccessfully reset all attempts!\x1b[0m');
  console.log('\nRun \x1b[33myarn create-attempt\x1b[0m to start fresh');
}

resetAttempts();
