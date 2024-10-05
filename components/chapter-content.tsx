'use client'

import ChapterTextContent from "./chapter-text-content";
import { useAppSelector } from "@/store/hooks";

export default function ChapterContent({ content }: { content: string }) {
   return (
      <main className="container mx-auto">
         <h1 className="text-2xl text-center font-bold my-5 ml-6">Розділ 1. Хіба це не повинен був бути епілог?</h1>
         <ChapterTextContent text={content} />
      </main>
   )
}