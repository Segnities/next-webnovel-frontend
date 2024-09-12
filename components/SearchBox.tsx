import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
   return (
      <div className="flex items-center gap-2 cursor-pointer dark:text-silver">
         <FaSearch />
         <p>Пошук</p>
      </div>
   )
}