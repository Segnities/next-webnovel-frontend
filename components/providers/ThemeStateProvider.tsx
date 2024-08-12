'use client'

import { useAppSelector } from "@/store/hooks";

export default function ThemeStateProvider({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   const themeColor = useAppSelector(state => state.theme.themeColor)
   return ( 
      <body className={themeColor}>
         {children}
      </body>
   )
}