import { Search } from "lucide-react";

export default function SearchInput() {
   return (
      <div className="mt-3 mb-4 relative">
         <div className="absolute flex items-center justify-center w-8 h-full">
            <Search className="left-1 text-secondaryStart" size={18} />
         </div>
         <input type="text" className="w-full bg-transparent border-secondaryStart rounded-md pl-8 pr-4 py-1 text-darkerGray dark:text-secondaryStart focus:outline-none border" placeholder="Пошук по назві" />
      </div>
   )
}