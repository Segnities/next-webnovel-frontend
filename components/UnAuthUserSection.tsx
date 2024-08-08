'use client'

import { useMediaQuery } from "@mui/material";
import { IoPerson } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { HiMoon } from "react-icons/hi2";

import { useState } from "react";
import Link from "next/link";

export default function UnAuthUserSection() {
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
      <div className="flex items-center lg:gap-6">
         <button onClick={handleToggleSwitch}>
            {
               isDarkMode ? (
                  <HiMoon className="w-4 h-4"/>
               ) : (
                  <LuSunMedium className="w-4 h-4 fill-sky-400/20"/>
               )
            }
         </button>
         <Link href="">
            <IoPerson className="dark:text-silver text-gunmetal cursor-pointer" />
         </Link>
      </div>
   );
}