type Category = 'all' | 'technology' | 'design' | 'development';

interface Post {
  id: number;
  title: string;
  category: Category;
  content: string;
  author: string;
  date: string;
}

interface NavigationMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: Category;
  onCategorySelect: (category: Category) => void;
}

interface BlogPostCardProps {
  post: Post;
}

export type {
  Category,
  Post,
  NavigationMenuProps,
  CategoryFiltersProps,
  BlogPostCardProps,
};
