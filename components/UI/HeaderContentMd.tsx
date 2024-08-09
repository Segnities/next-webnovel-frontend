import { FaBookmark, FaListUl } from "react-icons/fa"
import LogoSection from "../LogoSection";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx"

export default function HeaderContentMd() {
   return (
      <div className="lg:hidden flex items-center justify-between w-full h-full px-8 shadow-md">
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <FaBookmark className="text-xl"/>
            <span className="text-sm">Закладки</span>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <FaListUl className="text-xl" />
            <span className="text-sm">Новели</span>
         </div>
         <LogoSection />
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <MdNotifications className="text-xl"/>
            <span className="text-sm">Повідомлення</span>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <RxHamburgerMenu className="text-xl"/>
            <span className="text-sm">Меню</span>
         </div>
      </div>
   )
}