import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exercisesDir = path.join(__dirname, "../src/exercises");

async function selectExercise() {
  const exercises = fs
    .readdirSync(exercisesDir)
    .filter((dir) => fs.statSync(path.join(exercisesDir, dir)).isDirectory());

  const { exercise } = await inquirer.prompt([
    {
      type: "list",
      name: "exercise",
      message: "Select an exercise to work on:",
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

  fs.writeFileSync(path.join(__dirname, "../src/router.tsx"), routerContent);

  console.log(`Selected exercise: ${exercise}`);
}

selectExercise();
