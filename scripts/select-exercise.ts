import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exercisesDir = path.join(__dirname, '../src/exercises');
const attemptsDir = path.join(__dirname, '../src/attempts');

async function selectExercise() {
  if (!fs.existsSync(attemptsDir)) {
    console.error('\x1b[31mError: No attempts directory found!\x1b[0m');
    console.log(
      'Please run the script \x1b[33myarn create-attempt\x1b[0m before selecting an exercise.',
    );
    process.exit(1);
  }

  // Find latest attempt directory
  const attempts = fs
    .readdirSync(attemptsDir)
    .filter((dir) => dir.startsWith('attempt-'))
    .sort((a, b) => {
      const numA = parseInt(a.split('-')[1]);
      const numB = parseInt(b.split('-')[1]);
      return numB - numA;
    });

  if (attempts.length === 0) {
    console.error('\x1b[31mError: No attempts found!\x1b[0m');
    console.log(
      'Please run \x1b[33myarn create-attempt\x1b[0m first to create a new attempt directory.',
    );
    process.exit(1);
  }

  const latestAttempt = attempts[0];
  console.log(`Using latest attempt: ${latestAttempt}`);

  // Get available exercises
  const exercises = fs
    .readdirSync(exercisesDir)
    .filter((dir) => fs.statSync(path.join(exercisesDir, dir)).isDirectory());

  const { exercise } = await inquirer.prompt([
    {
      type: 'list',
      name: 'exercise',
      message: 'Select an exercise to work on:',
      choices: exercises,
    },
  ]);

  // Update main router to point to selected exercise
  const routerContent = `
import { createBrowserRouter } from 'react-router-dom';
import Problem from './attempts/${latestAttempt}/${exercise}/problem';
import Solution from './attempts/${latestAttempt}/${exercise}/solution';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Problem />,
  },
  {
    path: "/solution",
    element: <Solution />,
  },
]);
`;

  fs.writeFileSync(path.join(__dirname, '../src/router.tsx'), routerContent);

  console.log(`\x1b[32mSelected exercise: ${exercise}\x1b[0m`);
  console.log(`Updated router to use files from ${latestAttempt}`);
}

selectExercise();
