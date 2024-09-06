'use client'

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import { MdContentPaste } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { useState } from 'react';

export default function FiltersSection() {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false); 

   return (
      <div className='mt-3 w-11/12 top-24 h-fit sticky dark:bg-eerieBlack bg-white p-2 rounded-md dark:text-silver'>
         <span className='text-lg font-medium'>Фільтри</span>
         <MenuList>
            <MenuItem>
               <ListItemIcon>
                  <IoMdPricetags fontSize="small" />
               </ListItemIcon>
               <ListItemText>Жанри</ListItemText>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Будь-які
               </Typography>
               <MdKeyboardArrowRight fontSize="small" />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <MdContentPaste fontSize="small" />
               </ListItemIcon>
               <ListItemText>Статус перекладу</ListItemText>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Будь-які
               </Typography>
               <MdKeyboardArrowRight fontSize="small" />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <IoMdPricetags fontSize="small" />
               </ListItemIcon>
               <ListItemText>Статус перекладу</ListItemText>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Будь-які
               </Typography>
               <MdKeyboardArrowRight fontSize="small" />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <IoMdPricetags fontSize="small" />
               </ListItemIcon>
               <ListItemText>Рік видавництва</ListItemText>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Будь-які
               </Typography>
               <MdKeyboardArrowRight fontSize="small" />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <IoMdPricetags fontSize="small" />
               </ListItemIcon>
               <ListItemText>Країна</ListItemText>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Будь-які
               </Typography>
               <MdKeyboardArrowRight fontSize="small" />
            </MenuItem>
         </MenuList>
         <button className="w-full px-2 py-1 border rounded-sm">Скинути усі фільтри</button>
      </div>
   )
}