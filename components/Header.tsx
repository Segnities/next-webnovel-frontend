import HeaderContentLg from "./ui/HeaderContentLg";
import HeaderContentMd from "./ui/HeaderContentMd";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Header() {
   return (
      <header className={"dark:bg-gunmetal dark:text-silver w-full h-16 flex items-center justify-around bg-white shadow-md lg:shadow-lg border-slate-100/35 fixed bottom-0 lg:top-0 z-30" + ' ' + montserrat.className}>
         <>
            <HeaderContentLg />
            <HeaderContentMd />
         </>
      </header>
   )
}