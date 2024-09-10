"use client"
import { useState

 } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"

export default function ThemeButton() {
   const { setTheme } = useTheme()
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div>
         <IconButton onClick={handleClick} color="inherit">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
         </IconButton>
         <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
               zIndex: "20",
            }}
         >
            <MenuItem onClick={() => { setTheme("light"); handleClose() }}>
               Light
            </MenuItem>
            <MenuItem onClick={() => { setTheme("dark"); handleClose() }}>
               Dark
            </MenuItem>
            <MenuItem onClick={() => { setTheme("system"); handleClose() }}>
               System
            </MenuItem>
         </Menu>
      </div>
   )
}
