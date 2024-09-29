import { IoEnterOutline } from "react-icons/io5";

import Link from "next/link";
import ThemeButton from "./ui/theme-button";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"

export default function UnAuthUserSection() {
   return (
      <div className="flex items-center lg:gap-6">
         <ThemeButton />
         <Link href="">
            <TooltipProvider>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <IoEnterOutline size={21} />
                  </TooltipTrigger>
                  <TooltipContent>
                     <p>Увійти / Зареєструватися</p>
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         </Link>
      </div>
   );
}