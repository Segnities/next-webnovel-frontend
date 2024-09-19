'use client'

import { Bell, Bookmark, Layers } from 'lucide-react';
import DrawerMenu from "../DrawerMenu";
import LogoSection from "../logo-section";

export default function HeaderContentMd() {
   return (
      <div className="lg:hidden flex items-center justify-between w-full h-full px-8 shadow-md">
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Bookmark size={24}/>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Layers size={24}/>
         </div>
         <LogoSection />
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Bell size={24}/>
         </div>
         <DrawerMenu />
      </div>
   );
}