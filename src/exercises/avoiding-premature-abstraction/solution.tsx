import { FormEvent, useState } from 'react';
import { tabs } from './data';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { TabsProps, LoadingButtonProps } from './types';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

function cn(...inputs: string[]): string {
  return twMerge(clsx(inputs));
}

async function fakeNetworkRequest() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

function Spinner() {
  return (
    <div role="status">
      <div className="h-4 w-4 animate-spin self-center rounded-[50%] border-[2px] border-solid border-white border-t-gray-800"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function LoadingButton({ isLoading, children, className }: LoadingButtonProps) {
  return (
    <button className={cn('relative', className)}>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
      <span className={classNames(isLoading ? 'invisible' : '')}>
        {children}
      </span>
    </button>
  );
}

function Newsletter() {
  const [isLoading, setIsLoading] = useState(false);

  async function signUp(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    await fakeNetworkRequest();
    setIsLoading(false);
  }

  return (
    <>
      <h1 className="text-2xl font-semibold">Sign up for our newsletter</h1>
      <form onSubmit={signUp} className="mt-4 flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="you@acme.com"
          className="mt-1 rounded border border-gray-300 px-2 py-1 focus:outline-indigo-400"
        />
        <div className="mt-4">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="group relative rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </LoadingButton>
        </div>
      </form>
    </>
  );
}

function Invoice() {
  const [isLoading, setIsLoading] = useState(false);

  async function sendNow(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    await fakeNetworkRequest();
    setIsLoading(false);
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">Invoice #123</h1>
      <form onSubmit={sendNow} className="mt-4 flex flex-col">
        <p className="mt-4 text-sm">You're about to send an invoice for $300</p>
        <div className="mt-4 flex flex-row-reverse gap-x-4">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="relative rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Send now
          </LoadingButton>
          <button
            type="button"
            data-autofocus
            className="rounded-md bg-amber-50 px-3.5 py-2.5 text-sm font-semibold text-amber-600 shadow-sm hover:bg-amber-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function Tabs({ selectedTab, setSelectedTab }: TabsProps) {
  return (
    <div aria-label="Tabs" className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          aria-current={tab === selectedTab ? 'page' : undefined}
          className={classNames(
            tab === selectedTab
              ? 'bg-gray-100 text-gray-700'
              : 'text-gray-500 hover:text-gray-700',
            'rounded-md px-3 py-2 text-sm font-medium',
          )}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-y-4">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'Newsletter Sign Up' && <Newsletter />}
      {selectedTab === 'Invoice' && <Invoice />}
    </div>
  );
}
