import Image from "next/image";
import RadixLinearProgress from "./ui/radix-linear-progress";

interface Props {
   item: {
      id: number;
      img: string;
      title: string;
      chapters: number;
      lastChapter: number;
   },
   percent: number;
}

export default function itemItem({ item, percent }: Props) {
   return (
      <section className="flex items-center justify-between p-2 gap-4 rounded-md bg-ghostWhite shadow-sm dark:bg-charcoal cursor-pointer hover:bg-cloudyLavender transition-colors duration-100">
         <Image
            src={item.img}
            alt={item.title}
            width={56}
            height={78}
            style={{
               width: "56px",
               height: "79px",
               borderRadius: "5px"
            }
            }
         />
         < div className="flex flex-col gap-1" >
            <h3 className="line-clamp-2 leading-tight max-h-14 text-[0.915rem] lg:text-[0.875rem] font-semibold mt-1 dark:text-primaryStart">{item.title}</h3>
            <span className="dark:dark:text-primaryStart text-secondaryStart cursor-pointer text-xs lg:text-sm">Глава {item.lastChapter} - {percent}%</span>
            <div className="max-w-[95%]">
               <RadixLinearProgress value={percent} />
            </div>
         </div>
      </section >
   );
}