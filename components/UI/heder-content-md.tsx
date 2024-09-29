'use client'

import { Bell, Bookmark, Layers } from 'lucide-react';
import DrawerMenu from "../drawer-menu";
import LogoSection from "../logo-section";

export default function HeaderContentMd() {
   return (
      <div className="lg:hidden flex items-center justify-between w-full h-full px-8 shadow-md">
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Bookmark size={18}/>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Layers size={18}/>
         </div>
         <LogoSection />
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <Bell size={18}/>
         </div>
         <DrawerMenu />
      </div>
   );
}