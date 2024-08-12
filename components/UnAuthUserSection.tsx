
import { IoPerson } from "react-icons/io5";

import Link from "next/link";
import ThemeButton from "./UI/ThemeButton";

export default function UnAuthUserSection() {
   return (
      <div className="flex items-center lg:gap-6">
         <ThemeButton/>
         <Link href="">
            <IoPerson className="dark:text-silver text-gunmetal cursor-pointer" />
         </Link>
      </div>
   );
}