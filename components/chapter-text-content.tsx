export default function ChapterTextContent({ text }: { text: string }) {
   return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
   )
}