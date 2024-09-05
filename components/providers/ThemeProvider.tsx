'use client'

import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { blue, grey } from '@mui/material/colors';
import { useAppSelector } from '@/store/hooks';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: blue,
      secondary: grey,
   },
});

const lightTheme = createTheme({
   palette: {
      mode: 'light',
      primary: blue,
      secondary: grey,
   },
});

export default function ThemeProvider({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const { themeColor } = useAppSelector(state => state.theme)
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

   return (
      <MUIThemeProvider theme={themeColor === "dark" ? darkTheme : lightTheme}>
         {children}
      </MUIThemeProvider>
   )
}