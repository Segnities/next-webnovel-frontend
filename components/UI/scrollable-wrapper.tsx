import { ScrollArea } from "./scroll-area";

export default function ScrollableWrapper({
   children,
   scrollable = true,
   className
}: Readonly<{
   children: React.ReactNode;
   scrollable: boolean;
   className?: string;
}>) {
   if (scrollable) {
      return (
         <div className={className + ' overflow-y-scroll'}>
            {children}
         </div>
      )
   }
   return (
      <>
         {children}
      </>
   )
}