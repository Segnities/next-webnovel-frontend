import Image from "next/image";
import { PiTrophyFill } from "react-icons/pi";

interface Props {
   idx: number;
   el: {
      id: number;
      img: string;
      title: string;
      country: string;
   }
}

export default function RatingCard({ idx, el }: Props) {
   const generateTrophy = () => {
      if (idx === 0) {
         return <PiTrophyFill className="text-yellow-400 text-2xl"/>
      } else if (idx === 1) {
         return <PiTrophyFill className="text-silver text-xl"/>
      } else if (idx === 2) {
         return <PiTrophyFill className="text-bronze text-lg"/>
      } else {
         return null;
      }
   }
   return (
      <div className="grid grid-cols-6 items-center mt-3 gap-3">
         <span className={`${idx < 3 ? 'text-3xl' : "text-xl"} ${idx < 3 ? 'font-semibold' : 'font-normal'} col-span-1 dark:text-silver`}>{idx + 1}</span>
         <div className='col-span-1 relative'>
            <div className="absolute -top-3 -right-3">
              {generateTrophy()}
            </div>
            <Image
               src={el.img}
               alt={el.title}
               width={80}
               height={80}
               style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px"
               }}
               quality={90}
            />
         </div>
         <div className='col-span-3 ml-2'>
            <h4 className={`line-clamp-2 leading-tight max-h-14 text-[1rem] lg:text-[0.875rem] font-semibold mt-1 dark:text-primaryStart`}>{el.title}</h4>
            <p className='text-xs text-secondaryStart mt-1'>{el.country}</p>
         </div>
      </div>
   )
}