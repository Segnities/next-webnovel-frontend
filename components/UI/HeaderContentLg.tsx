import Link from "next/link";
import { FaFireAlt } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";

import LogoSection from "../LogoSection";
import RecentBox from "../RecentBox";
import SearchBox from "../SearchBox";
import UnAuthUserSection from "../UnAuthUserSection";
import HeaderMoreOptions from "../HeaderMoreOptions";

export default function HeaderContentLg() {
   return (
      <div className="lg:flex items-center justify-around hidden gap-4 w-full">
         <LogoSection />
         <div className="flex items-center ml-4 gap-5 mr-6">
            <Link href="" className="flex items-center gap-2">
               <FaFireAlt />
               <p>Популярне</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <IoLayers />
               <p>Новели</p>
            </Link>
            <SearchBox />
            <RecentBox />
            <HeaderMoreOptions/>
         </div>
         <UnAuthUserSection />
      </div>
   )
}