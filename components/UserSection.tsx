'use client'

import { useMediaQuery } from "@mui/material";
import { MaterialUISwitch } from "./UI/MaterialUISwitch";
import { useState } from "react";

export default function UserSection() {
   const [isDarkMode, setIsDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'));
   const handleToggleSwitch = () => {
      const darkMode = document.body.classList.contains('dark');

      if (darkMode) {
         setIsDarkMode(false);
         document.body.classList.remove('dark');
         document.body.classList.add('light');
      } else {
         setIsDarkMode(true);
         document.body.classList.remove('light');
         document.body.classList.add('dark');
      }
   }

   return (
      <div className="flex items-center gap-3">
         <MaterialUISwitch onClick={handleToggleSwitch} checked={isDarkMode} />
         <button className="bg-blue-300 rounded-md text-white p-2">
            <span>Вхід | Авторизація</span>
         </button>
      </div>
   );
}