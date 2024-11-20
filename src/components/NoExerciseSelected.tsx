export default function NoExerciseSelected() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">No Exercise Selected</h1>
        <p className="text-gray-600">
          Run{' '}
          <code className="rounded bg-gray-100 px-2 py-1">
            yarn select-exercise
          </code>{' '}
          to begin
        </p>
      </div>
    </div>
  );
}
