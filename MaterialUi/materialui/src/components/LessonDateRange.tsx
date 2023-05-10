import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { Stack, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers';
import { DatePicker, } from '@mui/x-date-pickers';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export const LessonDateRange = () => {
    const [value, setValue] = useState<DateRange<Dayjs>>([null, null])

    return (

        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: "Başlangıç", end: "Bitiş" }}>
                <DateRangePicker
                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                />
            </LocalizationProvider>
        </Stack>

    )
}
