import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeft } from "lucide-react";

export default function ChapterBack() {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <span className="flex items-center gap-2 cursor-pointer">
               <ArrowLeft />
            </span>
         </PopoverTrigger>
         <PopoverContent>
            <ul>
               <li>
                  <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Головна
                  </button>
               </li>
               <li>
                  <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Закладки
                  </button>
               </li>
               <li>
                  <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Каталог
                  </button>
               </li>
            </ul>
         </PopoverContent>
      </Popover>
   )
}