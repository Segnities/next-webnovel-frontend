'use client';

import { useAppSelector, useAppDispatch } from "@/store/hooks";
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
import { ScrollArea } from "./ui/scroll-area";
import { setContainerWidth, setFontFamily, setFontSize, setLineHeight, setParagraphSpacing, setTextAlign, setAbstractSpacing } from "@/store/features/chapter-settings/chapterSettingsSlice";

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
   const { containerWidth, fontSize, lineHeight, textAlignLeft: textAlign, paragraphSpacing, abstractSpacing } = useAppSelector(state => state.chapterSettings);
   const dispatch = useAppDispatch();
   
   return (
      <ScrollArea className="w-full h-full pr-6 mt-8" >
         <div className="flex flex-col gap-y-5 mt-8">
            <div>
               <span className="text-xl">Шрифт</span>
               <Select onValueChange={(value) => dispatch(setFontFamily(value))}>
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
                  <RadioGroup defaultValue={abstractSpacing ? 'on' : 'off'} className="flex items-center" onValueChange={(value) => dispatch(setAbstractSpacing(value === 'on'))}>
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
                  <RadioGroup defaultValue="left" className="flex items-center" onValueChange={() => dispatch(setTextAlign(!textAlign))}>
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
               <span className="text-base">{fontSize}px</span>
               <Slider defaultValue={[fontSize]} min={12} max={36} step={1} className="mt-3" onValueChange={value => dispatch(setFontSize(value[0]))} />
            </div>
            <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
               <p className="text-xl">Висота рядків</p>
               <span className="text-base">{lineHeight}</span>
               <Slider defaultValue={[lineHeight]} min={1} max={2} step={0.1} className="mt-3" onValueChange={(value => dispatch(setLineHeight(value[0])))} />
            </div>
            <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
               <p className="text-xl">Відступ між абзацами</p>
               <span className="text-base">{paragraphSpacing}px</span>
               <Slider defaultValue={[paragraphSpacing]} min={5} max={35} step={1} className="mt-3" onValueChange={(value => dispatch(setParagraphSpacing(value[0])))} />
            </div>
            <div className="flex flex-col p-3 rounded-lg border dark:border-silver">
               <p className="text-xl">Ширина контейнера</p>
               <span className="text-base">{containerWidth}%</span>
               <Slider defaultValue={[containerWidth]} min={40} max={100} step={1} className="mt-3" onValueChange={(value => dispatch(setContainerWidth(value[0])))} />
            </div>
         </div>
         <div className="my-10"/>
      </ScrollArea>
   )
}