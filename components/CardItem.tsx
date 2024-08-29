import Image from "next/image";

interface Props {
   item: {
      img: string;
      title: string;
      lastChapter: string;
   }
}

export default function Cardtem({ item }: Props) {
   return (
      <section className='flex flex-col items-center justify-between text-start'>
         <div className='relative'>
            <div className="relative w-20 h-36 md:w-24 md:h-40 lg:w-32 lg:h-48 rounded-lg overflow-hidden">
               <Image
                  src={item.img}
                  alt={item.title.slice(0, 15)}
                  fill={true}
                  quality={98}
               />
            </div>
         </div>
         <h3 className='line-clamp-2 leading-tight max-h-14 text-[0.8rem] md:text-[0.925rem] font-semibold mt-1 dark:text-primary'>{item.title.slice(0, 32)}</h3>
         <span className='text-secondary self-start text-[0.75rem] md:text-[0.875rem]'>Україна</span>
      </section>
   )
}