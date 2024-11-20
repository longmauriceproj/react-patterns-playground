# React Patterns Playground

A hands-on learning repository for React patterns, best practices, and common challenges. Practice component composition, state management, performance optimization, and more through guided exercises.

## Prerequisites

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
```

## Project Structure

```
src/
├── exercises/       # Exercise templates
└── attempts/        # Your practice attempts

scripts/
├── create-attempt.ts    # Creates new attempt directory
└── select-exercise.ts   # Exercise selection utility
```

## Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn create-attempt`: Create new practice attempt
- `yarn select-exercise`: Choose exercise to work on
- `yarn format`: Format code with Prettier
- `yarn lint`: Run ESLint

## Starting a New Exercise

1. Run `yarn select-exercise`
2. Choose exercise from the menu
3. Start development server with `yarn dev`
4. Open browser at http://localhost:5173

## Creating Multiple Attempts

Each attempt creates a fresh copy of exercises:

```bash
yarn create-attempt  # Creates attempt-1
yarn create-attempt  # Creates attempt-2
```

Previous attempts are preserved for reference.

## Contributing

If you'd like to contribute new exercises:

1. Create new directory in `src/exercises/`
2. Include:
   - `problem.tsx`: Exercise starter code
   - `solution.tsx`: Example solution
   - `README.md`: Exercise instructions

## License

MIT
