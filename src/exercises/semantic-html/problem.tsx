// problem.tsx
import { useState } from 'react';
import type { Category } from './types';
import { categories, posts } from './data';

const BlogPost = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredPosts = posts.filter((post) =>
    selectedCategory === 'all' ? true : post.category === selectedCategory,
  );

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-2xl font-bold">My Tech Blog</div>
        <div className="relative">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer p-2"
          >
            Menu
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg">
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-gray-100">Home</div>
                <div className="px-4 py-2 hover:bg-gray-100">About</div>
                <div className="px-4 py-2 hover:bg-gray-100">Contact</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded px-4 py-2 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="rounded-lg border p-4">
            <div className="mb-2 text-xl font-bold">{post.title}</div>
            <div className="mb-2 text-gray-600">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="text-gray-700">{post.content}</div>
            <div className="mt-4">
              <div className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm">
                {post.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
