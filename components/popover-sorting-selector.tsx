'use client';

import { useAppSelector } from "@/store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FaSortDown } from "react-icons/fa";
import { GoSortDesc } from "react-icons/go";
import ContentSortGroup from "./content-sort-group";

export default function PopoverSortingSelector() {
   const { label } = useAppSelector(state => state.contentSorting.sortOption);

   return (
      <Popover>
         <PopoverTrigger asChild>
            <button
               className="dark:text-silver cursor-pointer flex items-center justify-between min-w-48 relative text-sm px-4 py-[2px] border rounded-sm"
               type="button"
            >
               <span><GoSortDesc /></span>
               <span>{label}</span>
               <span><FaSortDown size={10} /></span>
            </button>
         </PopoverTrigger>
         <PopoverContent className="p-1 z-20">
            <ContentSortGroup />
         </PopoverContent>
      </Popover>
   )
}