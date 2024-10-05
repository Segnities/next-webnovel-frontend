import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import SearchInput from "./ui/search-input";

export default function ChapterList() {
   return (
      <ScrollArea className="my-4 max-h-[600px] overflow-y-auto no-scrollbar">
         <div className="flex flex-col gap-2">
            {
               Array.from({ length: 442 }).map((_, index) => (
                  <div key={index} className="flex items-center justify-between border border-secondary p-2 rounded-md">
                     <Link href={`#`}>
                        <p className="text-base hover:underline underline-offset-4 truncate">Том 1 - Розділ {index + 1} - <span className="text-secondaryStart text-sm">Хіба це не мав бути епілог?</span></p>
                     </Link>
                  </div>
               ))
            }
         </div>
      </ScrollArea>
   )
}