import ChapterHeader from "@/components/chapter-header";

export default function ChapterLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <ChapterHeader />
         {children}
      </>
   )
}