'use client'

import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaChartLine, FaListUl } from "react-icons/fa";
import RecentBox from "../RecentBox";
import SearchBox from "../SearchBox";
import UnAuthUserSection from "../UnAuthUserSection";
import LogoSection from "../LogoSection";

export default function HeaderContentLg() {
   return (
      <div className="lg:flex items-center justify-around hidden gap-4 w-full">
         <LogoSection />
         <div className="flex items-center ml-4 gap-5 mr-6">
            <Link href="" className="flex items-center gap-2">
               <FaChartLine />
               <p>Популярне</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <FaListUl />
               <p>Новели</p>
            </Link>
            <SearchBox />
            <RecentBox />
            <span className="flex items-center gap-2 cursor-pointer">
               <BsThreeDots />
            </span>
         </div>
         <UnAuthUserSection />
      </div>
   )
}