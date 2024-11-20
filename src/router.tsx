import { createBrowserRouter } from 'react-router-dom';
import NoExerciseSelected from './components/NoExerciseSelected';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NoExerciseSelected />,
  },
]);
