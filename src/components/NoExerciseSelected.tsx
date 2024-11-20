import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function NoExerciseSelected() {
  const handleCopyClick = () => {
    navigator.clipboard.writeText('yarn select-exercise');
    alert('Copied to clipboard!');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">No Exercise Selected</h1>
        <p className="flex items-center gap-x-1 text-gray-600">
          Run{' '}
          <code className="rounded bg-gray-100 px-2 py-1">
            yarn select-exercise
          </code>{' '}
          <button
            type="button"
            onClick={handleCopyClick}
            className="rounded-md bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <DocumentDuplicateIcon className="h-6 w-6" aria-hidden="true" />
          </button>{' '}
          to begin
        </p>
      </div>
    </div>
  );
}
