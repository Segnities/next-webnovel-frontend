'use client'

import { useEffect } from "react"

export default function Foo() {
   useEffect(() => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
         document.body.classList.add('dark');
       } else {
         document.body.classList.add('light');
       }
   }, [])
   return (
      <div></div>
   )
}