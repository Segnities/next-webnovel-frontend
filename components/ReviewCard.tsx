import Image from "next/image";
import { MdReviews } from "react-icons/md";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { PiSmileyMehFill } from "react-icons/pi";
import { PiSmileySadFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

interface Props {
   el: {
      id: number;
      img: string;
      title: string;
      body: string;
      views: string;
      likes: string;
      type: {
          id: number;
          title: string;
      };
  }
}

export default function ReviewCard({el}: Props) {
   const getTypeOfReviewIcon = (id: number) => {
      if (id === 1) {
         return <PiSmileyMeltingFill fill="green" />
      } else if (id === 2) {
         return <PiSmileyMehFill fill="grey" />
      } else if (id === 3) {
         return <PiSmileySadFill fill="red" />
      }
   }
   return (
      <div key={el.id} className="rounded-md dark:bg-eerieBlack bg-white relative">
               <div className="relative w-full h-20 overflow-clip rounded-t-md">
                  <Image
                     src={el.img}
                     alt={el.title}
                     fill={true}
                     quality={95}
                     className="object-cover"
                  />
               </div>
               <div className="p-2">
                  <div className="flex items-center gap-x-4">
                     <div className="flex items-center text-sm text-secondary">
                        <MdReviews /> <span>Відгук</span>
                     </div>
                     <div className="flex items-center text-sm text-secondary">
                        {getTypeOfReviewIcon(el.type.id)}<span>{el.type.title}</span>
                     </div>
                  </div>
                  <div className="mt-2 my-8">
                     <div className="leading-tight text-base font-medium dark:text-silver">{el.title}</div>
                     <p className="line-clamp-5 leading-tight max-h-24 text-sm mt-2 dark:text-primary">{el.body}</p>
                  </div>
                  <div className="w-11/12 absolute bottom-3 flex items-center justify-between mt-3 text-sm text-secondary">
                     <div className="flex items-center gap-x-3">
                        <div className="flex items-center gap-x-1">
                           <FaEye />
                           <span>{el.views}</span>
                        </div>
                        <div className="flex items-center gap-x-1">
                           <BiSolidLike />
                           <span>{el.likes}</span>
                        </div>
                     </div>
                     <div className="text-sm">
                        {Math.floor(Math.random() * 9) + ' годин тому'}
                     </div>
                  </div>
               </div>
            </div>
   )
}