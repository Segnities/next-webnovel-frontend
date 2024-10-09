'use client'

import { Separator } from "@/components/ui/separator";
import lastUpdatedChapters from "@/data/lastUpdatedChapters/lastUpdatedChapters.json";
import { useState } from 'react';
import RecentCard from './recent-card';

export default function RecentlyUpdatedChaptersList() {
   const [visibleItems, setVisibleItems] = useState<number>(10);
   const handleLoadMore = () => {
      setVisibleItems(prev => prev + 10);
   }

   return (
      <section>
         <h3 className='text-xl dark:text-silver my-1'>Останні оновлення</h3>
         <Separator />
         <div>
            {
               lastUpdatedChapters.slice(0, visibleItems).map(el => (
                  <RecentCard key={el.id} el={el} />
               ))
            }
         </div>
         <button className='my-2 w-full bg-lightGray dark:bg-gray-700 p-3 border-md dark:text-silver text-base rounded-lg'>Показати ще</button>
      </section>
   )
}