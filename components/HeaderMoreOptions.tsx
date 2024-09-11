'use client'

import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function HeaderMoreOptions() {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <span className="flex items-center gap-2 cursor-pointer">
               <BsThreeDots />
            </span>
         </PopoverTrigger>
         <PopoverContent>
            <nav aria-label="news question-answers feedback">
               <List
                  sx={{
                     fontSize: "14px"
                  }}
               >
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <FaNewspaper className="dark:fill-silver fill-gunmetal" />
                        </ListItemIcon>
                        <ListItemText primary="Новини" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <FaQuestion className="dark:fill-silver fill-gunmetal" />
                        </ListItemIcon>
                        <ListItemText primary="Питання та відповіді" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <IoMdMail className="dark:fill-silver fill-gunmetal" />
                        </ListItemIcon>
                        <ListItemText primary="Зворотній зв'язок" />
                     </ListItemButton>
                  </ListItem>
               </List>
            </nav>
         </PopoverContent>
      </Popover>
   )
}