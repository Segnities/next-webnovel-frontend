import { IoEnterOutline } from "react-icons/io5";

import Link from "next/link";
import ThemeButton from "./ui/ThemeButton";
import { Tooltip } from "@mui/material";

export default function UnAuthUserSection() {
   return (
      <div className="flex items-center lg:gap-6">
         <ThemeButton />
         <Link href="">
            <Tooltip title="Увійти / Зареєструватися">
               <IoEnterOutline size={21} />
            </Tooltip>
         </Link>
      </div>
   );
}