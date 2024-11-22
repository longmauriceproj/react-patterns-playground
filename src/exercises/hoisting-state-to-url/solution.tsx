import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { people } from './data';

export default function Index() {
  const [searchParams] = useSearchParams();
  const [sortProp, desc] = searchParams.get('sort')?.split(':') ?? [];
  const sortedPeople = [...people].sort((a, b) => {
    return desc
      ? b[sortProp]?.localeCompare(a[sortProp])
      : a[sortProp]?.localeCompare(b[sortProp]);
  });

  return (
    <div className="mx-auto max-w-6xl py-8 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <SortableColumn prop="name">Name</SortableColumn>
                      <SortableColumn prop="title">Title</SortableColumn>
                      <SortableColumn prop="email">Email</SortableColumn>
                      <SortableColumn prop="role">Role</SortableColumn>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {sortedPeople.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SortableColumn({ prop, children }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [sortProp, desc] = searchParams.get('sort')?.split(':') ?? [];
  let newSort = null;

  if (sortProp !== prop) {
    newSort = prop;
  } else if (sortProp === prop && !desc) {
    newSort = `${prop}:desc`;
  }

  const newSearchParams = new URLSearchParams({ sort: newSort });

  return (
    <th
      scope="col"
      className="px-3 py-3.5 text-left text-sm text-gray-900 first:pl-4 first:sm:pl-6"
    >
      <Link
        to={
          newSort
            ? `${location.pathname}?${newSearchParams}`
            : `${location.pathname}`
        }
        className="group inline-flex font-semibold"
      >
        {children}
        <span
          className={`${
            sortProp === prop
              ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-300'
              : 'invisible text-gray-400 group-hover:visible'
          } ml-2 flex-none rounded`}
        >
          <ChevronDownIcon
            className={`${desc ? 'rotate-180' : ''} h-5 w-5`}
            aria-hidden="true"
          />
        </span>
      </Link>
    </th>
  );
}
