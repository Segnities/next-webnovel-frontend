'use client';

import { BookText } from 'lucide-react';
import { Tag } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { MdOutlineTranslate } from "react-icons/md";
import { GiPlanetConquest } from "react-icons/gi";
import { Separator } from './ui/separator';

export default function FiltersSection() {
   return (
      <div className="mt-3 space-x-1 w-11/12 top-24 h-fit sticky dark:bg-eerieBlack bg-white p-2 rounded-md dark:text-silver">
         <div className='space-y-4 text-center text-lg font-medium'>Фільтри</div>
         <Separator className='my-2' />
         <ul className='my-3 flex flex-col gap-y-4'>
            <li className='flex items-center justify-between cursor-pointer rounded-md hover:bg-neutral-500 py-1 px-2 transition-colors duration-100'>
               <div className='flex items-center gap-x-3'>
                  <span>
                     <BookText size={20} />
                  </span>
                  <span className='text-sm'>Жанри</span>
               </div>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs truncate  max-w-[100px]'>Будь-який</span>
                  <span><ArrowRight size={18} /></span>
               </div>
            </li>
            <li className='flex items-center justify-between cursor-pointer rounded-md hover:bg-neutral-500 py-1 px-2 transition-colors duration-100'>
               <div className='flex items-center gap-x-3'>
                  <span>
                     <Tag size={20} />
                  </span>
                  <span className='text-sm'>Теги</span>
               </div>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs truncate  max-w-[100px]'>Будь-які</span>
                  <span><ArrowRight size={18} /></span>
               </div>
            </li>
            <li className='flex items-center justify-between cursor-pointer rounded-md hover:bg-neutral-500 py-1 px-2 transition-colors duration-100'>
               <div className='flex items-center gap-x-3'>
                  <span>
                     <MdOutlineTranslate size={20} />
                  </span>
                  <span className='text-sm'>Статус перекладу</span>
               </div>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs truncate  max-w-[100px]'>Будь-який</span>
                  <span><ArrowRight size={18} /></span>
               </div>
            </li>
            <li className='flex items-center justify-between cursor-pointer rounded-md hover:bg-neutral-500 py-1 px-2 transition-colors duration-100'>
               <div className='flex items-center gap-x-3'>
                  <span>
                     <GiPlanetConquest size={20} />
                  </span>
                  <span className='text-sm'>Країна</span>
               </div>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs truncate max-w-[100px]'>Будь-яка</span>
                  <span><ArrowRight size={18} /></span>
               </div>
            </li>
         </ul>
      </div>
   )
}