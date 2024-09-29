import { Button } from "./ui/button";
import { BookOpenText } from "lucide-react";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"


export default function BookActions() {
   return (
      <div className="flex flex-col gap-2 my-3">
         <Button variant="outline" className="w-full text-xs">
            <BookOpenText className="mr-2" size={16}/>
            Продовжити читати
            <span className="ml-2 text-xs">2/366</span>
         </Button>
         <Select>
            <SelectTrigger>
               <SelectValue placeholder="Улюблене"/>
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Списки</SelectLabel>
                  <SelectItem value="apple">Улюблене</SelectItem>
                  <SelectItem value="banana">В планах</SelectItem>
                  <SelectItem value="blueberry">Прочитано</SelectItem>
                  <SelectItem value="grapes">Читаю</SelectItem>
                  <SelectItem value="pineapple">Видалити зі списку</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   )
}