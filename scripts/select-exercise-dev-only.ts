import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exercisesDir = path.join(__dirname, '../src/exercises');

async function selectExercise() {
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
import Problem from './exercises/${exercise}/problem';
import Solution from './exercises/${exercise}/solution';

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
}

selectExercise();
