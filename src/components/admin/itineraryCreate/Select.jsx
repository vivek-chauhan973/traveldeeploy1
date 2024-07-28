import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectChip({itinerary, packageBadges, onSelectedBadgesChange }) {
  const [snames, setNames] = useState([]);

  useEffect(() => {
    const BadgesArray = packageBadges?.map(item => item.badge);
    setNames(BadgesArray || []);
  }, [packageBadges]);

  
  const theme = useTheme();
  const [selectedBadges, setSelectedBadges] = useState([]);
  useEffect(()=>{
    setSelectedBadges(itinerary?.badges || []);

  },[itinerary])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.length <= 4) {
      setSelectedBadges(
        typeof value === 'string' ? value.split(',') : value,
      );
      onSelectedBadgesChange(value);
    }
  };
// console.log("selected Badges :: ",selectedBadges)
  return (
    <div>
      {snames && (
        <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' } }}>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            sx={{ height: 'auto' }}
            value={selectedBadges}
            onChange={handleChange}
            input={<OutlinedInput sx={{
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderColor: "gray !important",
                borderWidth: "1px !important",
                height: "auto"
              },
            }} id="select-multiple-chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Box sx={{ display: 'flex', alignItems: 'center' }} key={value}>
                    <Checkbox checked={selectedBadges.includes(value)} />
                    {value}
                  </Box>
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {snames.map((name) => (
              <MenuItem
                key={name}
                value={name}
                sx={{ fontSize: '15px' }}
                style={{ fontWeight: selectedBadges.includes(name) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular }}
              >
                <Checkbox checked={selectedBadges.includes(name)} />
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}
