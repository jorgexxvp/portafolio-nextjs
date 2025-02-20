'use client';

import { FC } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>;
};
