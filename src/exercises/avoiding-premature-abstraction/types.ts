type Tab = 'Newsletter Sign Up' | 'Invoice';

interface TabsProps {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
}

type LoadingButtonProps = {
  isLoading: boolean;
  children: React.ReactNode;
  className: string;
} & React.ComponentProps<'button'>;

export type { Tab, TabsProps, LoadingButtonProps };
