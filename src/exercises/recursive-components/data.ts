import type { Node } from './types';

const nodes: Node[] = [
  {
    id: 1,
    name: 'Home',
    nodes: [
      {
        id: 2,
        name: 'Movies',
        nodes: [
          {
            id: 7,
            name: 'Action',
            nodes: [
              {
                id: 12,
                name: '2000s',
                nodes: [
                  { id: 16, name: 'Gladiator.mp4' },
                  { id: 17, name: 'The-Dark-Knight.mp4' },
                ],
              },
              { id: 13, name: '2010s', nodes: [] },
            ],
          },
          {
            id: 8,
            name: 'Comedy',
            nodes: [
              {
                id: 14,
                name: '2000s',
                nodes: [{ id: 18, name: 'Superbad.mp4' }],
              },
            ],
          },
          {
            id: 9,
            name: 'Drama',
            nodes: [
              {
                id: 15,
                name: '2000s',
                nodes: [{ id: 19, name: 'American-Beauty.mp4' }],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Music',
        nodes: [
          { id: 10, name: 'Rock', nodes: [] },
          { id: 11, name: 'Classical', nodes: [] },
        ],
      },
      { id: 4, name: 'Pictures', nodes: [] },
      { id: 5, name: 'Documents', nodes: [] },
      { id: 6, name: 'passwords.txt' },
    ],
  },
];

export { nodes };
