'use client'

import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import { ChevronsUpDown, Menu } from "lucide-react";
import SearchBox from "./SearchBox";
import { Button } from "@/components/ui/button";
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { GiShintoShrineMirror, GiArtificialIntelligence } from "react-icons/gi"
import ThemeButton from "@/components/ui/theme-button";
import { User } from 'lucide-react';
import { useState } from "react";
import { FaCompass, FaFireAlt, FaNewspaper, FaQuestion, FaStar } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLayers } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";

export default function DrawerMenu() {
   const [contentCollapsible, setContentCollapsible] = useState<boolean>(false);
   const [otherCollapsible, setOtherCollapsible] = useState<boolean>(false);

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Menu size={18} />
         </SheetTrigger>
         <SheetContent className="dark:bg-charcoal">
            <SheetHeader>
               <SheetTitle>Меню</SheetTitle>
            </SheetHeader>
            <div>
               <div className="w-full flex items-center justify-between">
                  <SearchBox />
                  <ThemeButton />
               </div>
               <Button variant="default" className="hover:bg-[#1e88e5] text-white bg-[#42a5f5] w-full flex items-center justify-between rounded-sm my-2">
                  <span>Вхід/Реєстрація</span>
                  <User size={18} />
               </Button>
               <Collapsible
                  open={contentCollapsible}
                  onOpenChange={setContentCollapsible}
                  className="max-w-[350px] space-y-2"
               >
                  <div className="flex items-center justify-between space-x-4 px-4">
                     <h4 className="text-sm font-semibold">
                        Контент
                     </h4>
                     <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                           <ChevronsUpDown className="h-4 w-4" />
                           <span className="sr-only">Toggle</span>
                        </Button>
                     </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-2">
                     <ul className="bg-transparent text-[13px] w-full pl-4">
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <IoLayers className="mr-2" />
                              <span>Новели</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaFireAlt className="mr-2" />
                              <span>Популярне</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaStar className="mr-2" />
                              <span>Колекції</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <RxCountdownTimer className="mr-2" />
                              <span>Нещодавно</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaCompass className="mr-2" />
                              <span>Відгуки та рецензії</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <GiArtificialIntelligence className="mr-2" />
                              <span>Персонажі</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <GiShintoShrineMirror className="mr-2" />
                              <span>Видатництва</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaPeopleGroup className="mr-2" />
                              <span>Команди</span>
                           </button>
                        </li>
                     </ul>

                  </CollapsibleContent>
               </Collapsible>
               <Collapsible
                  open={otherCollapsible}
                  onOpenChange={setOtherCollapsible}
                  className="max-w-[350px] space-y-2"
               >
                  <div className="flex items-center justify-between space-x-4 px-4">
                     <h4 className="text-sm font-semibold">
                        Інше
                     </h4>
                     <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                           <ChevronsUpDown className="h-4 w-4" />
                           <span className="sr-only">Toggle</span>
                        </Button>
                     </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-2">
                     <ul className="bg-transparent text-[13px] w-full">
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaNewspaper className="fill-silver mr-2" />
                              <span>Новини</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <FaQuestion className="fill-silver mr-2" />
                              <span>Питання та відповіді</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center w-full py-2 px-4 hover:bg-neutral-700 transition-colors">
                              <IoMdMail className="fill-silver mr-2" />
                              <span>Зворотній зв&apos;язок</span>
                           </button>
                        </li>
                     </ul>
                  </CollapsibleContent>
               </Collapsible>

            </div>
         </SheetContent>
      </Sheet>
   )
}