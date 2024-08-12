'use client'

import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { FaBookmark, FaListUl } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoSection from "../LogoSection";
import SearchBox from "../SearchBox";
import ThemeButton from "./ThemeButton";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IoPerson } from "react-icons/io5";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function HeaderContentMd() {
   const [openDrawer, setOpenDrawer] = useState<boolean>(false);
   const [openNestedCatalog, setOpenNestedCatalog] = useState<boolean>(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpenDrawer(newOpen);
   };

   const toggleNestedCatalog = () => {
      setOpenNestedCatalog(prevState => !prevState);
   }

   return (
      <div className="lg:hidden flex items-center justify-between w-full h-full px-8 shadow-md">
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <FaBookmark className="text-xl" />
            <span className="text-sm">Закладки</span>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <FaListUl className="text-xl" />
            <span className="text-sm">Новели</span>
         </div>
         <LogoSection />
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <MdNotifications className="text-xl" />
            <span className="text-sm">Повідомлення</span>
         </div>
         <button className="flex flex-col items-center justify-center cursor-pointer" onClick={toggleDrawer(true)}>
            <RxHamburgerMenu className="text-xl" />
            <span className="text-sm">Меню</span>
         </button>
         <Drawer
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{
            }}>
            <div className="w-[65vw] p-3">
               <div className="w-full flex items-center justify-around">
                  <ThemeButton />
                  <SearchBox />
               </div>
               <Button variant="contained"
                  sx={{
                     width: "100%",
                     color: "white",
                     margin: "1rem 0",
                     backgroundColor: "#42a5f5",
                     dispay: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     borderRadius: "0.4rem",
                     ":hover": {
                        backgroundColor: "#1e88e5"
                     }
                  }}
               >
                  <span>Вхід | Реєстрація</span>
                  <IoPerson />
               </Button>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ArrowDownwardIcon />}
                     aria-controls="panel-catalog-content"
                     id="panel-catalog-header"
                  >
                     <Typography>Каталог</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <List
                        sx={{ width: '100%', maxWidth: 360, backgroundColor: "transparent" }}
                        component="nav"
                        aria-labelledby="nested-list-catalog"
                     >
                        <ListItemButton>
                           <ListItemIcon>
                              <SendIcon />
                           </ListItemIcon>
                           <ListItemText primary="Sent mail" />
                        </ListItemButton>
                        <ListItemButton>
                           <ListItemIcon>
                              <DraftsIcon />
                           </ListItemIcon>
                           <ListItemText primary="Drafts" />
                        </ListItemButton>
                        <ListItemButton onClick={toggleNestedCatalog}>
                           <ListItemIcon>
                              <InboxIcon />
                           </ListItemIcon>
                           <ListItemText primary="Inbox" />
                           {openNestedCatalog ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openNestedCatalog} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <StarBorder />
                                 </ListItemIcon>
                                 <ListItemText primary="Starred" />
                              </ListItemButton>
                           </List>
                        </Collapse>
                     </List>
                  </AccordionDetails>
               </Accordion>
            </div>
         </Drawer>
      </div>
   );
}