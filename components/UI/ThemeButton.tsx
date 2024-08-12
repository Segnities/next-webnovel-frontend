'use client'

import { toDarkTheme, toLightTheme } from "@/store/features/theme/themeSlice";
import { useAppDispatch } from "@/store/hooks";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { LuSunMedium } from "react-icons/lu";

export default function ThemeButton() {
   const [isDarkMode, setIsDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'));
   const dispatch = useAppDispatch();
   const handleToggleSwitch = () => {
      const darkMode = document.body.classList.contains('dark');

      if (darkMode) {
         setIsDarkMode(false);
         dispatch(toLightTheme());
      } else {
         setIsDarkMode(true);
         dispatch(toDarkTheme());
      }
   }
   return (
      <button onClick={handleToggleSwitch}>
      {
         isDarkMode ? (
            <HiMoon className="w-4 h-4"/>
         ) : (
            <LuSunMedium className="w-4 h-4 fill-sky-400/20"/>
         )
      }
   </button>
   )
}