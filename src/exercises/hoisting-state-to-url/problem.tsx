import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { people } from './data';

export default function UserTable() {
  const [sort, setSort] = useState(null);
  const [sortProp, desc] = sort?.split(':') || [];
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
                      <SortableColumn
                        currentSort={sort}
                        prop="name"
                        onClick={(prop) => setSort(prop)}
                      >
                        Name
                      </SortableColumn>
                      <SortableColumn
                        currentSort={sort}
                        prop="title"
                        onClick={(prop) => setSort(prop)}
                      >
                        Title
                      </SortableColumn>
                      <SortableColumn
                        currentSort={sort}
                        prop="email"
                        onClick={(prop) => setSort(prop)}
                      >
                        Email
                      </SortableColumn>
                      <SortableColumn
                        currentSort={sort}
                        prop="role"
                        onClick={(prop) => setSort(prop)}
                      >
                        Role
                      </SortableColumn>
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

function SortableColumn({ currentSort, prop, onClick, children }) {
  const [sortProp, desc] = currentSort?.split(':') || [];
  let newSort;

  if (prop !== sortProp) {
    newSort = prop;
  } else if (sortProp === prop && !desc) {
    newSort = `${prop}:desc`;
  } else {
    newSort = null;
  }

  return (
    <th
      scope="col"
      className="px-3 py-3.5 text-left text-sm text-gray-900 first:pl-4 last:pr-4 sm:first:pl-6 sm:last:pr-6"
    >
      <button
        onClick={() => onClick(newSort)}
        className="font group inline-flex font-semibold"
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
            className={`${
              prop === sortProp && desc ? 'rotate-180' : ''
            } h-5 w-5`}
            aria-hidden="true"
          />
        </span>
      </button>
    </th>
  );
}
