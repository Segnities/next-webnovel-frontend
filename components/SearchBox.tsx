import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
   return (
      <div className="flex items-center gap-2">
         <FaSearch />
         <p>Пошук</p>
      </div>
   )
}