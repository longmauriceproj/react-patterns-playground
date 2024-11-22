import type { Category, Post } from './types';

const categories: Category[] = ['all', 'technology', 'design', 'development'];

const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    category: 'technology',
    content: 'React is a popular JavaScript library...',
    author: 'Jane Smith',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'UI Design Principles',
    category: 'design',
    content: 'When designing user interfaces...',
    author: 'John Doe',
    date: '2024-03-14',
  },
];

export { categories, posts };
