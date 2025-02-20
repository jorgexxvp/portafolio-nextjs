'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '../ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative overflow-auto">
        {children}
      </div>
    </ThemeProvider>
  );
};
