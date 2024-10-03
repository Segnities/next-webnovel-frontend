'use client';

import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import {
   Sheet,
   SheetContent,
   SheetTrigger
} from "@/components/ui/sheet";
import { ArrowLeft, Settings } from 'lucide-react';
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import ChapterSettings from "./chapter-settings";
import ThemeButton from "./ui/theme-button";


const montserrat = Montserrat({ subsets: ['latin'] })

export default function ChapterHeader() {
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   const controlHeader = () => {
      if (typeof window !== 'undefined') {
         if (window.scrollY > lastScrollY) {
            setIsVisible(false);
         } else {
            setIsVisible(true);
         }
         setLastScrollY(window.scrollY);
      }
   };

   useEffect(() => {
      if (typeof window !== 'undefined') {
         window.addEventListener('scroll', controlHeader);

         return () => {
            window.removeEventListener('scroll', controlHeader);
         };
      }
   }, [lastScrollY]);

   return (
      <header
         className={`
        dark:bg-zinc-950 bg-white border border-zinc-400 dark:text-silver 
        w-full h-12 flex items-center justify-between px-3 shadow-md lg:shadow-lg 
        border-slate-100/35 sticky transition-all duration-300 z-30
        ${montserrat.className}
        ${isVisible ? 'top-0' : '-top-12'}
      `}
      >
         <div className="flex items-center justify-between gap-x-3 w-1/4">
            <Popover>
               <PopoverTrigger asChild>
                  <span className="flex items-center gap-2 cursor-pointer">
                     <ArrowLeft />
                  </span>
               </PopoverTrigger>
               <PopoverContent>
                  <ul>
                     <li>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                           Головна
                        </button>
                     </li>
                     <li>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                           Закладки
                        </button>
                     </li>
                     <li>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                           Каталог
                        </button>
                     </li>
                  </ul>
               </PopoverContent>
            </Popover>
            <div className="flex flex-col items-center">
               <div className="text-secondary text-sm">FFF-class trashero</div>
               <div className="text-base dark:text-silver">Герой FFF-рангу</div>
            </div>
         </div>
         <div className="flex justify-between items-center gap-x-5">
            <ThemeButton />
            <div>
               <Sheet>
                  <SheetTrigger asChild>
                     <Settings className="cursor-pointer" />
                  </SheetTrigger>
                  <SheetContent>
                     <ChapterSettings />
                  </SheetContent>
               </Sheet>
            </div>
         </div>
      </header>
   )
}