# React Patterns Playground

A hands-on learning repository for React patterns, best practices, and common challenges. Practice component composition, state management, performance optimization, and more through guided exercises.

## Prerequisites

The exercises in this project are designed to be completed using React and TypeScript. You'll be most productive if you already have a basic understanding of React and its core concepts. Please refer to the [official React documentation](https://react.dev/) if you're new to React. Their [tutorial](https://react.dev/learn) is a great place to start.

Make sure you have Node.js and yarn installed:

- Node.js (v18+ recommended)
- Yarn Classic (v1.22.22)

## Setup

```bash
# Clone repository
git clone https://github.com/yourusername/react-patterns-playground.git
cd react-patterns-playground

# Install dependencies
yarn install

# Create your first attempt
yarn create-attempt

# Select an exercise
yarn select-exercise

# Start development server
yarn dev

# Reset your attempts
yarn reset-attempts

```

## Getting Started

1. Run `yarn create-attempt`. Previous attempts are preserved for reference.
2. Run `yarn select-exercise`
3. Choose exercise from the menu
4. Start development server with `yarn dev`
5. Open browser at http://localhost:5173
6. Navigate to the exercise directory in `src/attempts/your-latest-attempt/exercise-name/` and review the instructions in the `README.md` file
7. Edit the `problem.tsx` file in `src/attempts/your-latest-attempt/exercise-name/`

If you wish to reset your attempts, run `yarn reset-attempts`.

If you wish to see the solution, add `/solution` to the URL (e.g. http://localhost:5173/solution).

DO NOT modify the files in the `exercise` directory. These are the templates for new attempts.

## Exercise List

- Avoiding Premature Abstraction
- Component Breakdown
- Hoisting State to the URL
- Refactoring a Nested Component
- Recursive Components
- Semantic HTML
- State Synchronization with useEffect

## Project Structure

```
src/
├── exercises/       # Exercise templates
└── attempts/        # Your practice attempts

scripts/
├── create-attempt.ts    # Creates new attempt directory
├── reset-attempts.ts    # Resets all attempts
└── select-exercise.ts   # Exercise selection utility
```

## Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn create-attempt`: Create new practice attempt
- `yarn reset-attempts`: Reset all practice attempts
- `yarn select-exercise`: Choose exercise to work on
- `yarn format`: Format code with Prettier
- `yarn lint`: Run ESLint

For development only:

- `yarn select-exercise:dev`: Choose exercise to display when updating or adding an exercise

## Contributing

If you'd like to contribute new exercises:

1. Create new directory in `src/exercises/`
2. Include:
   - `problem.tsx`: Exercise starter code
   - `solution.tsx`: Example solution
   - `README.md`: Exercise instructions
3. Add exercise to `exercises` array in `exercises/index.ts`
4. Run `yarn select-exercise:dev` and select the new exercise to ensure it displays in the development server

## License

MIT
