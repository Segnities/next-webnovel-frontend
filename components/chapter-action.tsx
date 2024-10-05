import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import { Bookmark, Settings } from 'lucide-react';
import ThemeButton from "./ui/theme-button";
import ChapterSettings from "./chapter-settings";

export default function ChapterAction() {
   return (
      <div className="flex justify-between items-center gap-x-5">
         <Bookmark className="cursor-pointer" />
         <ThemeButton />
         <div>
            <Sheet>
               <SheetTrigger asChild>
                  <Settings className="cursor-pointer" />
               </SheetTrigger>
               <SheetContent className="lg:min-w-[42vw] min-w-[100vw]">
                  <SheetHeader>
                     <SheetTitle>Налаштування</SheetTitle>
                  </SheetHeader>
                  <ChapterSettings />
               </SheetContent>
            </Sheet>
         </div>
      </div>
   )
}