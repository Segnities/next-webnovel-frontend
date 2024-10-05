'use client'

import ChapterTextContent from "./chapter-text-content";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ChapterContent({ content }: { content: string }) {
   return (
      <main className="container mx-auto">
         <h1 className="text-2xl text-center font-bold my-5 ml-6">Розділ 1. Хіба це не повинен був бути епілог?</h1>
         <ChapterTextContent text={content} />
         <Separator className="w-full h-px text-zinc-400 dark:text-zinc-600" />
         <div className="flex items-center justify-between mt-5 mb-4">
            <Button variant="outline" className="px-8 py-3 rounded-2xl">Назад</Button>
            <Button variant="outline" className="px-8 py-3 rounded-2xl">Наступний</Button>
         </div>
      </main>
   )
}