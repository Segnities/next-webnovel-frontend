import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function BgLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className={"w-full min-h-screen dark:bg-richBlack bg-ghostWhite lg:mt-16 py-6" + ' ' + montserrat.className}>
         {children}
      </main>
   )
}