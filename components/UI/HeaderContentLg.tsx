'use client'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaChartLine, FaListUl, FaNewspaper } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import LogoSection from "../LogoSection";
import RecentBox from "../RecentBox";
import SearchBox from "../SearchBox";
import UnAuthUserSection from "../UnAuthUserSection";
import { useAppSelector } from "@/store/hooks";

export default function HeaderContentLg() {
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
   const themeState = useAppSelector(state => state.theme.themeColor);
   const isDarkThemeState = themeState === 'dark'
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handlePopoverClose = () => {
      setAnchorEl(null);
   };
   const isPopoverOpen = Boolean(anchorEl);
   const popoverId = isPopoverOpen ? 'another-popover' : undefined;

   return (
      <div className="lg:flex items-center justify-around hidden gap-4 w-full">
         <LogoSection />
         <div className="flex items-center ml-4 gap-5 mr-6">
            <Link href="" className="flex items-center gap-2">
               <FaChartLine />
               <p>Популярне</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
               <FaListUl />
               <p>Новели</p>
            </Link>
            <SearchBox />
            <RecentBox />
            <span className="flex items-center gap-2 cursor-pointer" aria-describedby={popoverId} onClick={handleClick}>
               <BsThreeDots />
            </span>
            <Popover
               id={popoverId}
               open={isPopoverOpen}
               anchorEl={anchorEl}
               onClose={handlePopoverClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
            >
               <nav aria-label="news question-answers feedback">
                  <List 
                     sx={{
                        backgroundColor: isDarkThemeState ? '#414549' : '#ffffff', 
                        color: isDarkThemeState ? '#BFBFBF' : '#212529',
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
                              <FaQuestion className="dark:fill-silver fill-gunmetal"/>
                           </ListItemIcon>
                           <ListItemText primary="Питання та відповіді" />
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              <IoMdMail className="dark:fill-silver fill-gunmetal"/>
                           </ListItemIcon>
                           <ListItemText primary="Зворотній зв'язок" />
                        </ListItemButton>
                     </ListItem>
                  </List>
               </nav>
            </Popover>
         </div>
         <UnAuthUserSection />
      </div>
   )
}