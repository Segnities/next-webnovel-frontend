'use client';

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";
import { Lato, Merriweather, Nunito, Open_Sans, PT_Serif, Roboto, Source_Sans_3 } from 'next/font/google';
import { Slider } from "./ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ weight: ['400', '700'], subsets: ['latin'] });
const ptSerif = PT_Serif({ weight: ['400', '700'], subsets: ['latin'] });

const fonts = {
   Roboto: roboto,
   'Open Sans': openSans,
   Lato: lato,
   Merriweather: merriweather,
   Nunito: nunito,
   'Source Sans 3': sourceSans3,
   'PT Serif': ptSerif,
};


export default function ChapterSettings() {
   return (
      <div className="flex flex-col gap-y-5 mt-8">
         <div>
            <span className="text-xl">Шрифт</span>
            <Select>
               <SelectTrigger className="w-full rounded-2xl mt-3">
                  <SelectValue placeholder="За замовчуванням" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     {
                        Object.keys(fonts).map(font => (
                           <SelectItem key={font} value={font} className="text-lg">{font}</SelectItem>
                        ))
                     }
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div className="flex flex-col gap-y-3">
            <span className="text-xl">Відступ</span>
            <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
               <RadioGroup defaultValue="on" className="flex items-center">
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="on" id="r1" />
                     <Label htmlFor="r1">Включено</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="off" id="r2" />
                     <Label htmlFor="r2">Виключено</Label>
                  </div>
               </RadioGroup>
            </div>
         </div>
         <div className="flex flex-col gap-y-3">
            <span className="text-xl">Вирівнювання тексту</span>
            <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
               <RadioGroup defaultValue="left" className="flex items-center">
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="left" id="r3" />
                     <Label htmlFor="r3">По лівому краю</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="width" id="r4" />
                     <Label htmlFor="r4">По ширині</Label>
                  </div>
               </RadioGroup>
            </div>
         </div>
         <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
            <p className="text-xl">Розмір шрифту</p>
            <span></span>
            <Slider defaultValue={[14]} min={12} max={36} step={1} className="mt-3" />
         </div>
         <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
            <p className="text-xl">Висота рядків</p>
            <span></span>
            <Slider defaultValue={[1.2]} min={1} max={2} step={0.1} className="mt-3" />
         </div>
         <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
            <p className="text-xl">Відступ між абзацами</p>
            <span></span>
            <Slider defaultValue={[14]} max={40} step={1} className="mt-3" />
         </div>
         <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
            <p className="text-xl">Ширина контейнера</p>
            <span></span>
            <Slider defaultValue={[14]} max={40} step={1} className="mt-3" />
         </div>
      </div>
   )
}