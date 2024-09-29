"use client"
import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeButton() {
   const { setTheme } = useTheme()

   return (
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:bg-transparent">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Змінити тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-charcoal">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center">
          <Sun className="mr-2 h-4 w-4" />
          Світла
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center">
          <Moon className="mr-2 h-4 w-4" />
          Темна
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center">
          <Laptop className="mr-2 h-4 w-4" />
          Системна
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   )
}
