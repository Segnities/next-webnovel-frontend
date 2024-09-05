import { FaOctopusDeploy } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="hidden lg:flex justify-between items-center p-4 font-medium dark:text-silver dark:bg-eerieBlack bg-white">
         <div>
            <p>У випадках порушення авторських прав - звертайтеся на пошту - <span className="underline underline-offset-4">info@webuanovels.net</span></p>
            <div>
               <ul className="flex items-center gap-x-4 underline underline-offset-4">
                  <li>Зворотній зв&apos;язок</li>
                  <li>Для правовласників</li>
                  <li>Угода користувача</li>
                  <li>DMCA</li>
                  <li>Каталог</li>
                  <li>Ліцензія</li>
               </ul>
            </div>
         </div>
         <div>
            <FaOctopusDeploy className="lg:text-4xl text-3xl" />
         </div>
      </footer>
   );
}