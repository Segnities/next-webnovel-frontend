import HeaderContentLg from "./ui/header-content-lg";
import HeaderContentMd from "./ui/heder-content-md";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Header() {
   return (
      <header className={"dark:bg-zinc-950 bg-white border border-zink-400 dark:text-silver w-full h-16 flex items-center justify-around shadow-md lg:shadow-lg border-slate-100/35 sticky bottom-0 lg:top-0 z-30" + ' ' + montserrat.className}>
         <>
            <HeaderContentLg />
            <HeaderContentMd />
         </>
      </header>
   )
}