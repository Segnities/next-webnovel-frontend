'use client';

import { ArrowRight, BookText, Sheet, Tag } from 'lucide-react';
import { GiPlanetConquest } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { Separator } from './ui/separator';
import { useState } from 'react';
import ContentDrawer from './ui/content-drawer';

import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

interface FilterItem {
   id: string;
   icon: IconType | LucideIcon;
   label: string;
 }

const filterItems: FilterItem[] = [
   { id: 'genres', icon: BookText, label: 'Жанри' },
   { id: 'tags', icon: Tag, label: 'Теги' },
   { id: 'translation', icon: MdOutlineTranslate, label: 'Статус перекладу' },
   { id: 'country', icon: GiPlanetConquest, label: 'Країна' },
];

export default function FilterBox() {
   const [drawerOpen, setDrawerOpen] = useState<null | string>(null);
   const [selectedFilterItem, setSelectedFilterItem] = useState<FilterItem | null>(null);
 
   const openDrawerContent = (item:FilterItem) => {
      setDrawerOpen(item.id);
      setSelectedFilterItem(item);

   }

   const closeDrawerContent = () => {
      setDrawerOpen(null);
      setSelectedFilterItem(null);
   }

   return (
      <div className="mt-3 space-x-1 w-11/12 top-24 h-fit sticky dark:bg-eerieBlack bg-white p-2 rounded-md dark:text-silver">
         <div className="w-full relative">
            <div className='space-y-4 text-center text-lg font-medium'>Фільтри</div>
            <Separator className='my-2' />
            <ul className='my-3 flex flex-col gap-y-4'>
               {
                  filterItems.map((item) => (
                     <li
                        key={item.id}
                        className='flex items-center justify-between cursor-pointer rounded-md hover:bg-neutral-500 py-1 px-2 transition-colors duration-100'
                        onClick={() => openDrawerContent(item)}
                     >
                        <div className='flex items-center gap-x-3'>
                           <span>
                              <item.icon size={20} />
                           </span>
                           <span className='text-sm'>{item.label}</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                           <span className='text-xs truncate  max-w-[100px]'>Будь-який</span>
                           <span><ArrowRight size={18} /></span>
                        </div>
                     </li>
                  ))
               }
            </ul>
         </div>
         {
            drawerOpen ? (
               <ContentDrawer isOpen={Boolean(drawerOpen)} onClose={closeDrawerContent}>
                  <div className="text-lg dark:text-silver font-medium">{selectedFilterItem?.label}</div>
               </ContentDrawer>
            ) : null
         }
      </div>
   )
}