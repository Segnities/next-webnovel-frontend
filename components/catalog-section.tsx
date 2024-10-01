import { Search } from "lucide-react";

import CatalogCardsList from "./catalog-card-list";
import PopoverSortingSelector from "./popover-sorting-selector";
import ContainerOffset from "./ui/container-offset";
import SearchInput from "./ui/search-input";

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
               <div className="hidden md:block">
                  <PopoverSortingSelector />
               </div>
            </div>
            <SearchInput />
            <CatalogCardsList list={list} />
         </section>
      </ContainerOffset>
   )
}