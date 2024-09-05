'use client'

import { useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { FaSortDown } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { Popper, RadioGroup } from "@mui/material";

const mainSortingOptions = [
   "За спаданням",
   "За зростанням"
];

const sortingOptions = [
   "За популярністю",
   "За рейтингом",
   "За кількістю переглядів",
   "За кількістю розділів",
   "За датою виходу",
   "За датою оновлення",
   "За датою додавання",
   "За назвою (А-Я)",
];

export default function SortingSelector() {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
   };
   const [selectedSortOption, setSelectedSortOption] = useState<string>(sortingOptions[0]);
   const [mainSortOption, setMainSortOption] = useState<string>(mainSortingOptions[0]);
   const open = Boolean(anchorEl);
   const id = open ? 'sorting-popper' : undefined;

   return (
      <div>
         <button
            className="cursor-pointer flex items-center justify-between min-w-48 relative text-sm px-4 py-[2px] border rounded-sm"
            aria-describedby={id}
            type="button"
            onClick={handleClick}
         >
            <span><GoSortDesc /></span>
            <span>{selectedSortOption}</span>
            <span><FaSortDown size={10} /></span>
         </button>
         <Popper sx={{ with: "320px" }} open>
            <RadioGroup
               aria-labelledby="sorting-radio-buttons-group-label"
               defaultValue={selectedSortOption}
               name="sorting-options-group"
            >
               {
                  
               }
            </RadioGroup>
         </Popper>
      </div>
   )
}