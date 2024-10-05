'use client';


import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import ChapterAction from "./chapter-action";
import ChapterBack from "./chapter-back";
import ChapterImg from "./chapter-img";
import ChapterNav from "./chapter-nav";


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
            <ChapterBack />
            <ChapterImg />
            <ChapterNav />
         </div>
         <ChapterAction />
      </header>
   )
}