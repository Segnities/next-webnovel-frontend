"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { createTheme, ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles';
import { type ThemeProviderProps } from "next-themes/dist/types"
import { blue, grey } from '@mui/material/colors';

const getMuiTheme = (mode: 'light' | 'dark') => 
  createTheme({
    palette: {
      mode: mode,
      primary: blue,
      secondary: grey,
    },
  });

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme } = useTheme(); 

  const appliedTheme = React.useMemo(() => {
    return resolvedTheme === 'dark' ? getMuiTheme('dark') : getMuiTheme('light');
  }, [resolvedTheme]);

  return (
    <NextThemesProvider {...props}>
      <MUIThemeProvider theme={appliedTheme}>
        {children}
      </MUIThemeProvider>
    </NextThemesProvider>
  )
}