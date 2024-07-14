import React, { useEffect, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ packageBadges }) {
  const [snames, setNames] = useState([]);
  const [personName, setPersonName] = useState([]);

  useEffect(() => {
    const BadgesArray = packageBadges?.map(item => item.badge);
    setNames(BadgesArray || []);
  }, [packageBadges]);

  const theme = useTheme();

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 4) {
      setPersonName(value);
    }
  };

  return (
    <div>
      {snames && (
        <FormControl sx={{ width: '35vw', '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' } }}>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            sx={{ height: 'auto' }}
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} sx={{ fontSize: '12px', height: '0' }} />
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
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}
