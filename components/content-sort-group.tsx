'use client'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { OrderItem, setSortOption, setSortOrder, SortingItem } from "@/store/features/content-sorting/contentSortingSlice";
import { useAppDispatch } from "@/store/hooks";
import { useState } from "react";

const sortOrderOptions: OrderItem[] = [
   { id: 'desc', label: 'За спаданням', value: 'desc' },
   { id: 'asc', label: 'За зростанням', value: 'asc' }
];

const sortingOptions: SortingItem[] = [
   { id: 'popularity', label: 'За популярністю', value: 'popularity' },
   { id: 'rating', label: 'За рейтингом', value: 'rating' },
   { id: 'views', label: 'За кількістю переглядів', value: 'views' },
   { id: 'chapters', label: 'За кількістю розділів', value: 'chapters' },
   { id: 'releaseDate', label: 'За датою виходу', value: 'releaseDate' },
   { id: 'updateDate', label: 'За датою оновлення', value: 'updateDate' },
   { id: 'addDate', label: 'За датою додавання', value: 'addDate' },
   { id: 'titleAZ', label: 'За назвою (А-Я)', value: 'titleAZ' },
];

export default function ContentSortGroup() {
   const [selectedSortOption, setSelectedSortOption] = useState<string>(sortingOptions[0].value);
   const [orderSortOption, setOrderSortOption] = useState<string>(sortOrderOptions[0].value);
   const dispatch = useAppDispatch();

   const handleSortOptionChange = (option: SortingItem) => {
      dispatch(setSortOption(option));
      setSelectedSortOption(option.value);
   };

   const handleSortOrderChange = (option: OrderItem) => {
      dispatch(setSortOrder(option));
      setOrderSortOption(option.value);
   };

   return (
      <div className="dark:bg-eerieBlack bg-white">
         <RadioGroup
            defaultValue={selectedSortOption}
            onValueChange={(value) => {
               const option = sortingOptions.find(option => option.value === value);
               if (option) handleSortOptionChange(option);
            }}
            className="space-y-1"
         >
            <ul className="p-2">
               {sortingOptions.map((el) => (
                  <li key={el.id} className="flex items-center space-x-2 py-2">
                     <RadioGroupItem value={el.value} id={el.id} />
                     <Label htmlFor={el.id}>{el.label}</Label>
                  </li>
               ))}
            </ul>
         </RadioGroup>
         <Separator className="my-2" />
         <RadioGroup
            defaultValue={orderSortOption}
            onValueChange={(value) => {
               const option = sortOrderOptions.find(option => option.value === value);
               if (option) handleSortOrderChange(option);
            }}
            className="space-y-1 p-2"
         >
            {sortOrderOptions.map((el) => (
               <div key={el.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={el.value} id={el.id} />
                  <Label htmlFor={el.id}>{el.label}</Label>
               </div>
            ))}
         </RadioGroup>
      </div>
   )
}