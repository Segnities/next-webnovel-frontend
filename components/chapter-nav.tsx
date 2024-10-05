import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import SearchInput from "./ui/search-input";
import ChapterList from "./chapter-list";

export default function ChapterNav() {
   return (
      <>
         <nav className="lg:hidden flex items-center justify-between">
            <div>
               <CircleChevronLeft className='cursor-pointer' />
            </div>
            <div className="cursor-pointer px-2 text-xs">
               Том 1 Глава 1
            </div>
            <div>
               <CircleChevronRight className='cursor-pointer' />
            </div>
         </nav>
         <nav className="hidden w-full lg:flex gap-x-4 items-center justify-between">
            <div className="flex flex-col">
               <div className="text-base">Герой FFF-рангу </div>
               <div className="lg:max-w-56 text-xs truncate text-secondary-foreground dark:text-silver">Розділ 1. Хіба це не повинен був бути епілог?</div>
            </div>
            <div className="flex items-center gap-x-4">
               <div className="cursor-pointer">
                  <CircleChevronLeft className='cursor-pointer' />
               </div>
               <div className="cursor-pointer px-6 py-1 rounded-sm border border-secondary">
                  <Sheet>
                     <SheetTrigger asChild>
                        <span>Том 1 Глава 1</span>
                     </SheetTrigger>
                     <SheetContent side="left" className="lg:min-w-[42vw] min-w-[100vw]" >
                        <SheetHeader>
                           <SheetTitle>Список розділів</SheetTitle>
                           <SearchInput placeholder="Пошук номеру розділу" />
                        </SheetHeader>
                        <div className="flex flex-col gap-y-2">
                           <ChapterList />
                        </div>
                     </SheetContent>
                  </Sheet>
               </div>
               <div className="cursor-pointer">
                  <CircleChevronRight className='cursor-pointer' />
               </div>
            </div>
         </nav>
      </>
   )
}