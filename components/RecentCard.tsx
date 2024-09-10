import { Divider } from "@mui/material";
import Image from "next/image";

interface Props {
   el: {
      id: number;
      title: string;
      img: string;
      country: string;
      latestChaptersTime: string;
      latestChapterNum: string;
      latestChapterTitle: string;
      chaptersNum: number;
  } | any
}

export default function RecentCard({el}: Props) {
   return (
      <div>
         <div className="flex items-center gap-5 my-3">
            <div>
               <div className='w-20 h-28 relative rounded-md overflow-hidden'>
                  <Image
                     src={el.img}
                     alt={el.title}
                     fill={true}
                     quality={98}
                  />
               </div>
            </div>
            <div>
               <h3 className='dark:text-silver font-medium text-sm lg:text-base'>{el.title}</h3>
               <p className='text-sm lg:text-base dark:text-silver'>
                  {el.latestChapterNum}
                  <span className='text-xs dark:text-secondaryStart'>
                     {el.chaptersNum === 1 ? el.latestChapterTitle : ` + ще ${el.chaptersNum} розділи`}
                  </span>
               </p>
               <p className='text-xs dark:text-secondaryStart'>{el.country}</p>
               <span className='text-xs dark:text-secondaryStart'>{el.latestChaptersTime}</span>
            </div>
         </div>
         <Divider variant='fullWidth' />
      </div>
   )
}