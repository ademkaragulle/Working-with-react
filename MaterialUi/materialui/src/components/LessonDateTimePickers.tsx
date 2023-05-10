import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { Stack, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export const LessonDateTimePickers = () => {
    const [value, setValue] = useState<null | Dayjs>(null)
    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                    label="Date"
                /> */}
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                // renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Stack>
    )
}
