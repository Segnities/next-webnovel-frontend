'use client'

import ChapterTextContent from "./chapter-text-content";
import { useAppSelector } from "@/store/hooks";

export default function ChapterContent({ content }: { content: string }) {
   const containerWidth = useAppSelector(state => state.chapterSettings)
   return (
         <main className="container mx-auto" style={{width: `${containerWidth}%`}}>
            <h1 className="text-2xl font-bold my-2 ml-6">Розділ 1. Хіба це не повинен був бути епілог?</h1>
            <ChapterTextContent text={content} />
         </main>
   )
}