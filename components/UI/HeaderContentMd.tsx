'use client'

import { Accordion, AccordionDetails, AccordionSummary, Button, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { FaBookmark, FaNewspaper, FaQuestion } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { RxCountdownTimer, RxHamburgerMenu } from "react-icons/rx";
import LogoSection from "../LogoSection";
import SearchBox from "../SearchBox";
import ThemeButton from "./ThemeButton";

import { useAppSelector } from "@/store/hooks";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { BsThreeDots } from "react-icons/bs";
import { FaCompass, FaFireAlt, FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiArtificialIntelligence, GiShintoShrineMirror } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { IoLayers, IoPerson } from "react-icons/io5";

export default function HeaderContentMd() {
   const [openDrawer, setOpenDrawer] = useState<boolean>(false);
   const [openNestedCatalog, setOpenNestedCatalog] = useState<boolean>(false);
   const themeState = useAppSelector(state => state.theme.themeColor);
   const isDarkThemeState = themeState === 'dark';

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpenDrawer(newOpen);
   };

   const toggleNestedCatalog = () => {
      setOpenNestedCatalog(prevState => !prevState);
   }

   return (
      <div className="lg:hidden flex items-center justify-between w-full h-full px-8 shadow-md">
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <FaBookmark className="text-lg" />
            <span className="text-sm">Закладки</span>
         </div>
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <IoLayers className="text-lg" />
            <span className="text-sm">Новели</span>
         </div>
         <LogoSection />
         <div className="flex flex-col items-center justify-center cursor-pointer">
            <MdNotifications className="text-lg" />
            <span className="text-sm">Повідомлення</span>
         </div>
         <button className="flex flex-col items-center justify-center cursor-pointer" onClick={toggleDrawer(true)}>
            <RxHamburgerMenu className="text-lg" />
            <span className="text-sm">Меню</span>
         </button>
         <Drawer
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{
            }}>
            <div className="w-[60vw] p-3">
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
               <Accordion sx={{
                  backgroundColor: "transparent",
                  fontSize: "13px"
               }}>
                  <AccordionSummary
                     expandIcon={<ArrowDownwardIcon />}
                     aria-controls="panel-catalog-content"
                     id="panel-catalog-header"
                  >
                     <Typography>Каталог</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <List
                        sx={{ width: '100%', maxWidth: 260, backgroundColor: "transparent" }}
                        component="nav"
                        aria-labelledby="nested-list-catalog"
                     >
                        <ListItemButton>
                           <ListItemIcon>
                              <IoLayers />
                           </ListItemIcon>
                           <ListItemText primary="Новели" />
                        </ListItemButton>
                        <ListItemButton>
                           <ListItemIcon>
                              <FaFireAlt />
                           </ListItemIcon>
                           <ListItemText primary="Популярне" />
                        </ListItemButton>
                        <ListItemButton>
                           <ListItemIcon>
                              <FaStar />
                           </ListItemIcon>
                           <ListItemText primary="Колекції" />
                        </ListItemButton>
                        <ListItemButton>
                           <ListItemIcon>
                              <RxCountdownTimer />
                           </ListItemIcon>
                           <ListItemText primary="Нещодавно" />
                        </ListItemButton>
                        <ListItemButton>
                           <ListItemIcon>
                              <FaCompass />
                           </ListItemIcon>
                           <ListItemText primary="Відгуки та рецензії" />
                        </ListItemButton>
                        <ListItemButton onClick={toggleNestedCatalog}>
                           <ListItemIcon>
                              <BsThreeDots />
                           </ListItemIcon>
                           <ListItemText primary="Більше" />
                           {openNestedCatalog ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openNestedCatalog} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <GiArtificialIntelligence />
                                 </ListItemIcon>
                                 <ListItemText primary="Персонажі" />
                              </ListItemButton>
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <GiShintoShrineMirror />
                                 </ListItemIcon>
                                 <ListItemText primary="Видатництва" />
                              </ListItemButton>
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <FaPeopleGroup />
                                 </ListItemIcon>
                                 <ListItemText primary="Команди" />
                              </ListItemButton>
                           </List>
                        </Collapse>
                     </List>
                  </AccordionDetails>
               </Accordion>
               <Accordion sx={{
                  marginTop: "8px",
                  backgroundColor: "transparent",
                  fontSize: "13px"
               }}>
                  <AccordionSummary
                     expandIcon={<ArrowDownwardIcon />}
                     aria-controls="panel-another-content"
                     id="panel2-header"
                  >
                     <Typography>Інше</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <List
                        sx={{
                           backgroundColor: 'transparent',
                           fontSize: "13px",
                           maxWidth: "260px"
                        }}
                        component="nav"
                     >
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemIcon>
                                 <FaNewspaper className="fill-silver" />
                              </ListItemIcon>
                              <ListItemText primary="Новини" />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemIcon>
                                 <FaQuestion className="fill-silver" />
                              </ListItemIcon>
                              <ListItemText primary="Питання та відповіді" />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemIcon>
                                 <IoMdMail className="fill-silver" />
                              </ListItemIcon>
                              <ListItemText primary="Зворотній зв'язок" />
                           </ListItemButton>
                        </ListItem>
                     </List>
                  </AccordionDetails>
               </Accordion>
            </div>
         </Drawer>
      </div>
   );
}