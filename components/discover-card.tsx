'use client';

import Image from "next/image";
import { DiscoverNovel } from "@/types/discover-novels";
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react";
import Link from "next/link";

interface Props {
   item: DiscoverNovel
}

export default function DiscoverCard({ item }: Props) {
   const [imageLoaded, setImageLoaded] = useState<boolean>(false);
   const handleImageLoad = () => {
      setImageLoaded(true);
   };
   const SkeletonImage = () => {
      return (
         <div className="relative w-20 h-36 md:w-24 md:h-40 lg:w-32 lg:h-48 rounded-lg overflow-hidden">
            {!imageLoaded && (
               <Skeleton className="absolute top-0 left-0 w-full h-full rounded-lg" />
            )}
            <Image
               src={item.img}
               alt={item.title.slice(0, 15)}
               fill={true}
               quality={98}
               loading="lazy"
               onLoad={handleImageLoad}
               className={imageLoaded ? 'opacity-100' : 'opacity-0'}
            />
         </div>
      )
   }

   return (
      <Link href={`/book/${item.slug}`}>
         <section className='flex flex-col items-center justify-between text-start cursor-pointer'>
            <div className='relative'>
               <SkeletonImage />
            </div>
            <h3 className='line-clamp-2 leading-tight max-h-14 text-[0.8rem] md:text-[0.925rem] font-semibold mt-1 dark:text-primaryStart'>{item.title.slice(0, 32)}</h3>
            <span className='text-secondaryStart self-start text-[0.75rem] md:text-[0.875rem]'>
               {item.country && item.country.title ? item.country.title : <Skeleton className="h-4 w-[250px]" />}
            </span>
         </section>
      </Link>
   )
}