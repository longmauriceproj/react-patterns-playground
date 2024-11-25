import { FolderIcon } from '@heroicons/react/24/solid';

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <FolderIcon className="size-6 text-sky-500" />
            Home
          </span>
        </li>
      </ul>
    </div>
  );
}
