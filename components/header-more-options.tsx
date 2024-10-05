'use client'

import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { BsThreeDots } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function HeaderMoreOptions() {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <span className="flex items-center gap-2 cursor-pointer">
               <BsThreeDots />
            </span>
         </PopoverTrigger>
         <PopoverContent className="dark:bg-zinc-950">
            <nav aria-label="news question-answers feedback">
               <ul className="text-sm">
                  <li>
                     <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="mr-3">
                           <FaNewspaper className="dark:fill-silver fill-gunmetal" />
                        </span>
                        <span>Новини</span>
                     </button>
                  </li>
                  <li>
                     <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="mr-3">
                           <FaQuestion className="dark:fill-silver fill-gunmetal" />
                        </span>
                        <span>Питання та відповіді</span>
                     </button>
                  </li>
                  <li>
                     <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="mr-3">
                           <IoMdMail className="dark:fill-silver fill-gunmetal" />
                        </span>
                        <span>Зворотній зв&apos;язок</span>
                     </button>
                  </li>
               </ul>
            </nav>
         </PopoverContent>
      </Popover>
   )
}