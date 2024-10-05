'use client';

import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import { ArrowLeft, Bookmark, CircleChevronLeft, CircleChevronRight, Settings } from 'lucide-react';
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
        w-full h-14 flex items-center justify-between px-3 shadow-md lg:shadow-lg 
        border-slate-100/35 sticky transition-all duration-300 z-30
        ${montserrat.className}
        ${isVisible ? 'lg:top-0' : 'lg:-top-14'}
      `}
      >
         <div className="flex items-center justify-between gap-x-3 w-1/2">
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
            <nav className="lg:hidden flex items-center justify-between">
               <div>
                  <CircleChevronLeft className='cursor-pointer' />
               </div>
               <div className="cursor-pointer px-2 text-xs">
                  Том 1 Глава 1
               </div>
               <div>
                  <CircleChevronRight className='cursor-pointer' />
               </div>
            </nav>
            <nav className="hidden w-full lg:flex gap-x-4 items-center justify-between">
               <div className="flex flex-col">
                  <div className="text-base">Герой FFF-рангу </div>
                  <div className="text-sm text-secondary">FFF class trash hero</div>
               </div>
               <div className="flex items-center gap-x-4">
                  <div className="cursor-pointer">
                     Назад
                  </div>
                  <div className="cursor-pointer px-6 py-1 rounded-sm border border-secondary">
                     Том 1 Глава 1
                  </div>
                  <div className="cursor-pointer">
                     Далі
                  </div>
               </div>
            </nav>
         </div>
         <div className="flex justify-between items-center gap-x-5">
            <Bookmark className="cursor-pointer" />
            <ThemeButton />
            <div>
               <Sheet>
                  <SheetTrigger asChild>
                     <Settings className="cursor-pointer" />
                  </SheetTrigger>
                  <SheetContent className="lg:min-w-[42vw] min-w-[100vw]">
                     <SheetHeader>
                        <SheetTitle>Налаштування</SheetTitle>
                     </SheetHeader>
                     <ChapterSettings />
                  </SheetContent>
               </Sheet>
            </div>
         </div>
      </header>
   )
}