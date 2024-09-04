import { FaSearch } from "react-icons/fa";

import CatalogCardsList from "./CatalogCardsList";
import ContainerOffset from "./UI/ContainerOffset";

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
            <div className="flex items-center justify-between mb-1">
               <h2 className="text-xl font-medium dark:text-silver">{title}</h2>
               <div></div>
            </div>
            <div className="mb-4 relative">
               <div className="absolute flex items-center justify-center w-8 h-full">
                  <FaSearch className=" left-1 text-secondary" />
               </div>
               <input type="text" className="w-full bg-transparent border-secondary rounded-md pl-8 pr-4 py-1 text-darkerGray dark:text-secondary focus:outline-none border" />
            </div>
            <CatalogCardsList list={list} />
         </section>
      </ContainerOffset>
   )
}