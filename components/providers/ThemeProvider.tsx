'use client'

import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useEffect, useMemo } from 'react';


export default function ThemeProvider({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode: prefersDarkMode ? 'dark' : 'light',
            },
         }),
      [prefersDarkMode],
   );
   
   return (
      <MUIThemeProvider theme={theme}>
         {children}
      </MUIThemeProvider>
   )
}