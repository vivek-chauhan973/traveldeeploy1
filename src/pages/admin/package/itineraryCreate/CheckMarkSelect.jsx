import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';

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

export default function MultipleSelectCheckmarks({ packageCategories }) {
    const [personName, setPersonName] = React.useState([]);
    // console.log("package badges show is here",packageCategories)
    const [snames, setNames] = useState([]);

    useEffect(() => {
        const categoriesArray = packageCategories?.map(item => item.category);
        setNames(categoriesArray || []);
    }, [packageCategories]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
        {snames && (
            <FormControl sx={{ width: '35vw', height: "40px",'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border:'1px solid black' } }}>
                <Select
                    sx={{ fontSize: "12px", height: "40px" }}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {snames.map((name) => (
                        <MenuItem sx={{fontSize:'15px'}} key={name} value={name}>
                            <Checkbox style={{
                                color: "black",
                                width: 20,
                                height: 20,
                                margin: 4
                            }} checked={personName.indexOf(name) > -1} />
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )}
    </div>
    );
}
