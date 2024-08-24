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
            <Image
               src={item.img}
               width={150}
               height={150}
               alt={item.title.slice(0, 15)}
               style={{
                  width: "144px",
                  height: "178px",
                  borderRadius: "10px"
               }}
               quality={95}
            />
         </div>
         <h3 className='line-clamp-2 leading-tight max-h-14 text-[0.875rem] md:text-[1rem] font-semibold mt-1 dark:text-primary'>{item.title.slice(0, 32)}</h3>
         <span className='text-secondary self-start text-[0.75rem] md:text-[0.875rem]'>Україна</span>
      </section>
   )
}