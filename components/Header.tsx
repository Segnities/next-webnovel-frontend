'use client'

import Link from "next/link";

import { BsThreeDots } from "react-icons/bs";
import { FaChartLine, FaListUl, FaOctopusDeploy, FaSearch } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";

import { MaterialUISwitch } from "./UI/MaterialUISwitch";


export default function Header() {
   return (
      <header className="w-full h-16 flex items-center justify-around bg-blue-100">
         <section className="flex items-center gap-4">
            <FaOctopusDeploy />
            <h1>{"renovel lib".toUpperCase()}</h1>
         </section>
         <div className="flex items-center ml-4 gap-5">
            <Link href="" className="flex items-center gap-2">
               <FaChartLine />
               <p>Популярне</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <FaListUl />
               <p>Новели</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <FaSearch />
               <p>Пошук</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <RxCountdownTimer />
               <p>Нещодавно</p>
            </Link>
            <span className="flex items-center gap-2 cursor-pointer">
               <BsThreeDots />
            </span>
         </div>
         <div className="flex items-center gap-3">
            <MaterialUISwitch/>
            <button className="bg-blue-300 rounded-md text-white p-2">
               <span>Вхід | Авторизація</span>
            </button>
         </div>
      </header>
   )
}