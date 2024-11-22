// problem.tsx
import { useState } from 'react';
import type {
  Category,
  NavigationMenuProps,
  CategoryFiltersProps,
  BlogPostCardProps,
} from './types';
import { categories, posts } from './data';

const NavigationMenu = ({ isOpen, onToggle }: NavigationMenuProps) => (
  <nav className="relative">
    <button
      onClick={onToggle}
      className="cursor-pointer p-2"
      aria-expanded={isOpen}
      aria-controls="navigation-menu"
      aria-label="Navigation menu"
    >
      Menu
    </button>
    {isOpen && (
      <ul
        id="navigation-menu"
        className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg"
        role="menu"
      >
        {['Home', 'About', 'Contact'].map((item) => (
          <li key={item} role="none">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    )}
  </nav>
);

const CategoryFilters = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) => (
  <section className="mb-6" aria-label="Category filters">
    <nav aria-label="Blog categories">
      <ul className="flex gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className={`cursor-pointer rounded px-4 py-2 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter by ${category} category`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

const BlogPostCard = ({ post }: BlogPostCardProps) => (
  <article className="rounded-lg border p-4">
    <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
    <p className="mb-2 text-gray-600">
      <span className="sr-only">Written by</span>
      By {post.author} on{' '}
      <time dateTime={post.date}>
        {new Date(post.date).toLocaleDateString()}
      </time>
    </p>
    <p className="text-gray-700">{post.content}</p>
    <footer className="mt-4">
      <span
        className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm"
        aria-label={`Category: ${post.category}`}
      >
        {post.category}
      </span>
    </footer>
  </article>
);

const BlogPost = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredPosts = posts.filter((post) =>
    selectedCategory === 'all' ? true : post.category === selectedCategory,
  );

  return (
    <main className="mx-auto max-w-4xl p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Tech Blog</h1>
        <NavigationMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      </header>

      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <section aria-label="Blog posts" className="grid gap-6">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
};

export default BlogPost;
