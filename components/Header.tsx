'use client'

import Link from "next/link";

import { BsThreeDots } from "react-icons/bs";
import { FaChartLine, FaListUl } from "react-icons/fa";
import LogoSection from "./LogoSection";
import RecentBox from "./RecentBox";
import SearchBox from "./SearchBox";
import UserSection from "./UserSection";


export default function Header() {
   return (
      <header className="dark:bg-[#212529] dark:text-[#BFBFBF] w-full h-16 flex items-center justify-around bg-blue-100">
         <LogoSection/>
         <div className="flex items-center ml-4 gap-5">
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
         <UserSection/>
      </header>
   )
}