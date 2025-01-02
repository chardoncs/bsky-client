import * as Ariakit from '@ariakit/react';

export const TabList = ({ children, label }: { children: React.ReactNode; label: string }) => {
  return (
    <Ariakit.TabList
      // hide scrollbars
      className="flex flex-row max-w-full overflow-x-scroll scrollbar-hide border-b border-gray-200 dark:border-gray-800"
      aria-label={label}
    >
      {children}
    </Ariakit.TabList>
  );
};