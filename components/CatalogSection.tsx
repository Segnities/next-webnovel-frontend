import { Search } from "lucide-react";

import CatalogCardsList from "./CatalogCardsList";
import SortingSelector from "./SortingSelector";
import ContainerOffset from "./ui/ContainerOffset";

interface Props {
   title: string;
   list: {
      id: number;
      title: string;
      rate: string;
      img: string;
      country: string;
   }[]
}

export default function CatalogSection(props: Props) {
   const {
      title,
      list
   } = props;
   return (
      <ContainerOffset>
         <section className="p-1">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-medium dark:text-silver">{title}</h2>
               <div>
                  <SortingSelector />
               </div>
            </div>
            <div className="mt-3 mb-4 relative">
               <div className="absolute flex items-center justify-center w-8 h-full">
                  <Search className=" left-1 text-secondaryStart" />
               </div>
               <input type="text" className="w-full bg-transparent border-secondaryStart rounded-md pl-8 pr-4 py-1 text-darkerGray dark:text-secondaryStart focus:outline-none border" placeholder="Пошук по назві" />
            </div>
            <CatalogCardsList list={list} />
         </section>
      </ContainerOffset>
   )
}