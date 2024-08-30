import { FaEye } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import newsData from "@/data/news/news.json";

export default function NewsList() {
   return (
      <div>
         {
            newsData.map(el => (
               <div key={el.id} className="grid grid-cols-6 gap-2 my-2 dark:text-silver">
                  <span className="text-sm col-span-4 overflow-hidden text-ellipsis whitespace-nowrap lead-tight">{el.title}</span>
                  <div className="flex items-center col-span-2 justify-self-end text-secondary">
                     <div className="flex items-center gap-x-3">
                        <span className="text-xs">{el.views}</span>
                        <span className="text-xs"><FaEye /></span>
                     </div>
                     <div className="ml-2 flex items-center gap-x-3">
                        <span className="text-xs">{el.comments}</span>
                        <span className="text-xs"><FaComments /></span>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
   );
}