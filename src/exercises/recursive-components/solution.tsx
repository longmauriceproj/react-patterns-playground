import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid';
import type { FilesystemItemProps } from './types';
import { nodes } from './data';

function FilesystemItem({ node }: FilesystemItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="-m-1 p-1">
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {node.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              node.nodes.length === 0 ? 'ml-[22px]' : ''
            }`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul>
        {nodes.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
}

// Flat data structure solution

// type FlatNode = {
//   id: number;
//   name: string;
//   nodeIds?: number[];
// };

// const nodes: Record<number, FlatNode> = {
//   1: { id: 1, name: 'Home', nodeIds: [2, 3, 4, 5, 6] },
//   2: { id: 2, name: 'Movies', nodeIds: [7, 8, 9] },
//   3: { id: 3, name: 'Music', nodeIds: [10, 11] },
//   4: { id: 4, name: 'Pictures', nodeIds: [] },
//   5: { id: 5, name: 'Documents', nodeIds: [] },
//   6: { id: 6, name: 'passwords.txt' },
//   7: { id: 7, name: 'Action', nodeIds: [12, 13] },
//   8: { id: 8, name: 'Comedy', nodeIds: [14] },
//   9: { id: 9, name: 'Drama', nodeIds: [15] },
//   10: { id: 10, name: 'Rock', nodeIds: [] },
//   11: { id: 11, name: 'Classical', nodeIds: [] },
//   12: { id: 12, name: '2000s', nodeIds: [16, 17] },
//   13: { id: 13, name: '2010s', nodeIds: [] },
//   14: { id: 14, name: '2000s', nodeIds: [18] },
//   15: { id: 15, name: '2000s', nodeIds: [19] },
//   16: { id: 16, name: 'Gladiator.mp4' },
//   17: { id: 17, name: 'The-Dark-Knight.mp4' },
//   18: { id: 18, name: 'Superbad.mp4' },
//   19: { id: 19, name: 'American-Beauty.mp4' },
// };

// function FilesystemItem({
//   nodeId,
//   nodes,
// }: {
//   nodeId: number;
//   nodes: Record<number, FlatNode>;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const node = nodes[nodeId];

//   return (
//     <li key={node.id}>
//       <span className="flex items-center gap-1.5 py-1">
//         {node.nodeIds !== undefined && node.nodeIds.length > 0 && (
//           <button onClick={() => setIsOpen(!isOpen)} className="-m-1 p-1">
//             <ChevronRightIcon
//               className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
//             />
//           </button>
//         )}

//         {node.nodeIds !== undefined ? (
//           <FolderIcon
//             className={`size-6 text-sky-500 ${
//               node.nodeIds.length === 0 ? 'ml-[22px]' : ''
//             }`}
//           />
//         ) : (
//           <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
//         )}
//         {node.name}
//       </span>

//       {isOpen && node.nodeIds !== undefined && (
//         <ul className="pl-6">
//           {node.nodeIds.map((childId) => (
//             <FilesystemItem nodeId={childId} nodes={nodes} key={childId} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// export default function LandingPage() {
//   return (
//     <div className="mx-auto max-w-sm p-8">
//       <ul>
//         <FilesystemItem nodeId={1} nodes={nodes} />
//       </ul>
//     </div>
//   );
// }
