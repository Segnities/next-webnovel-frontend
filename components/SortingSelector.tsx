'use client'

import { useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { FaSortDown } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const mainSortingOptions = [
   "За спаданням",
   "За зростанням"
];

const sortingOptions = [
   "За популярністю",
   "За рейтингом",
   "За кількістю переглядів",
   "За кількістю розділів",
   "За датою виходу",
   "За датою оновлення",
   "За датою додавання",
   "За назвою (А-Я)",
];

export default function SortingSelector() {
   const [selectedSortOption, setSelectedSortOption] = useState<string>(sortingOptions[0]);
   const [mainSortOption, setMainSortOption] = useState<string>(mainSortingOptions[0]);

   return (
      <Popover>
         <PopoverTrigger asChild>
            <button
               className="dark:text-silver cursor-pointer flex items-center justify-between min-w-48 relative text-sm px-4 py-[2px] border rounded-sm"
               type="button"
            >
               <span><GoSortDesc /></span>
               <span>{selectedSortOption}</span>
               <span><FaSortDown size={10} /></span>
            </button>
         </PopoverTrigger>
         <PopoverContent className="p-1 z-20">
            <div className="dark:bg-eerieBlack bg-white">
               <RadioGroup
                  defaultValue={selectedSortOption}
                  onValueChange={setSelectedSortOption}
                  className="space-y-1"
               >
                  <ul className="p-2">
                     {sortingOptions.map((el) => (
                        <li key={el} className="flex items-center space-x-2 py-2">
                           <RadioGroupItem value={el} id={el} />
                           <Label htmlFor={el}>{el}</Label>
                        </li>
                     ))}
                  </ul>
               </RadioGroup>
               <Separator className="my-2" />
               <RadioGroup
                  defaultValue={mainSortOption}
                  onValueChange={setMainSortOption}
                  className="space-y-1 p-2"
               >
                  {mainSortingOptions.map((el) => (
                     <div key={el} className="flex items-center space-x-2">
                        <RadioGroupItem value={el} id={el} />
                        <Label htmlFor={el}>{el}</Label>
                     </div>
                  ))}
               </RadioGroup>
            </div>
         </PopoverContent>
      </Popover>
   )
}