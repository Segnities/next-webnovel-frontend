import Image from "next/image";
import MUIBorderLinearProgress from "./UI/MUIBorderLinearProgress";

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
            <h3 className="line-clamp-2 leading-tight max-h-14 text-[1rem] lg:text-[0.875rem] font-semibold mt-1 dark:text-primary">{item.title}</h3>
            <span className="dark:dark:text-primary text-secondarycursor-pointer text-base lg:text-xs">Глава {item.lastChapter} - {percent}%</span>
            <div className="max-w-[95%]">
               <MUIBorderLinearProgress variant="determinate" value={percent} />
            </div>
         </div>
      </section >
   );
}