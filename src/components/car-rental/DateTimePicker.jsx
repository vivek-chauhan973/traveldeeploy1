import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CustomContainer = ({ children }) => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        {children}
    </div>
);

export default function DateTimePickerValue({ open, setDate }) {
    const [value, setValue] = React.useState(dayjs());

    React.useEffect(() => {
        setDate(value);
    }, [value, setDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomContainer>
                <DateTimePicker
                    open={open}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    // renderInput={(params) => <TextField {...params} />}
                />
            </CustomContainer>
        </LocalizationProvider>
    );
}

// ==================Rakesh Calender===================================

// import * as React from 'react';
// import dayjs from 'dayjs';
// import { Grid } from '@mui/material'; // Import Grid for responsive layout
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// export default function DateTimePickerValue() {
//   const [value, setValue] = React.useState(dayjs()); 

//   const handleDateChange = (newValue) => {
//     setValue(newValue); // Update state on date change
//   };
// //   console.log(value)

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Grid container spacing={2}> {/* Responsive Grid container */}
//         <Grid item xs={12}> {/* Responsive Grid item */}
//           <DateTimePicker
//             label="Date & Time picker"
//             value={value}
//             onChange={handleDateChange}
//             className="m-5 ml-12 shadow-xl shadow-slate-100"
//           />
//         </Grid>
//       </Grid>
//     </LocalizationProvider>
//   );
// }

// ========================Second Calender=================================

// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// const DateTimePickerValue = () => {
//   const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//         <DateTimePicker
//           label="Uncontrolled picker"
//           defaultValue={dayjs('2022-04-17T15:30')}
//         />
//         <DateTimePicker
//           label="Controlled picker"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }