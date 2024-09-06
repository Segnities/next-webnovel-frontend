'use client'

import { useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { FaSortDown } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Popper from "@mui/material/Popper";
import RadioGroup from "@mui/material/RadioGroup";

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
            className="dark:text-silver cursor-pointer flex items-center justify-between min-w-48 relative text-sm px-4 py-[2px] border rounded-sm"
            aria-describedby={id}
            type="button"
            onClick={handleClick}
         >
            <span><GoSortDesc /></span>
            <span>{selectedSortOption}</span>
            <span><FaSortDown size={10} /></span>
         </button>
         <Popper
            sx={{
               with: "280px",
               top: "8px",
            }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            className="z-20"
         >
            <div className="dark:bg-charcoal dark:text-silver bg-white p-2 rounded-md border top-3">
               <RadioGroup
                  aria-labelledby="sorting-radio-buttons-group-label"
                  defaultValue={selectedSortOption}
                  name="sorting-options-group"
               >
                  <MenuList dense>
                     {
                        sortingOptions.map(el => (
                           <MenuItem key={el}>
                              <FormControlLabel value={el} control={<Radio className="" />} label={el} />
                           </MenuItem>
                        ))
                     }
                  </MenuList>
               </RadioGroup>
               <Divider variant="fullWidth" />
               <RadioGroup
                  aria-labelledby="main-sorting-radio-buttons-group-label"
                  defaultValue={mainSortOption}
                  name="main-sorting-options-group"
               >
                  {
                     mainSortingOptions.map(el => (
                        <MenuItem key={el}>
                           <FormControlLabel value={el} control={<Radio />} label={el} />
                        </MenuItem>
                     ))
                  }
               </RadioGroup>
            </div>
         </Popper>
      </div>
   )
}