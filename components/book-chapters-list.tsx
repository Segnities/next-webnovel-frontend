import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";
import { OrderItem } from "@/store/features/content-sorting/contentSortingSlice";
import Link from "next/link";
import SearchInput from "./ui/search-input";
import { Separator } from "./ui/separator";

const sortOrderOptions: OrderItem[] = [
   { id: 'desc', label: 'За спаданням', value: 'desc' },
   { id: 'asc', label: 'За зростанням', value: 'asc' }
];

export default function BookChaptersList() {
   return (
      <div className="flex flex-col gap-2 rounded-lg border border-zinc-400 dark:border-zinc-600 mt-4">
         <Separator className="w-full h-px text-zinc-400 dark:text-zinc-600" />
         <div className="flex flex-col gap-2 px-1">
            <div className="flex items-center justify-between py-2 px-1">
               <Select defaultValue={sortOrderOptions[0].value}>
                  <SelectTrigger className="max-w-36">
                     <SelectValue placeholder="Улюблене" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        {sortOrderOptions.map((option) => (
                           <SelectItem key={option.id} value={option.value}>{option.label}</SelectItem>
                        ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
               <SearchInput />
            </div>
            <Separator className="w-full h-px text-zinc-400 dark:text-zinc-600" />
            <div className="scroll-y-auto overflow-y-auto max-h-[740px]">
               <div className="flex flex-col gap-2 px-1">
                  {
                     Array.from({ length: 442 }).map((_, index) => (
                        <div key={index} className="flex items-center justify-between">
                           <Link href={`#`}>
                              <p className="text-base hover:underline underline-offset-4">Том 1 - Розділ {index + 1} - <span className="text-secondaryStart text-sm">Хіба це не мав бути епілог?</span></p>
                           </Link>
                           <span className="text-sm">00:00:00</span>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}