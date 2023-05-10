import React from 'react'
import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, FormHelperText } from '@mui/material'
import { useState } from 'react'
export const LessonRadioGroup = () => {

    const [value, setValue] = useState('')
    // console.log(value)
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)

    // }

    return (
        <div>
            <FormControl>
                <FormLabel>Maaş Beklentiniz</FormLabel>
                <RadioGroup
                    row
                    name='expected-salary'
                    value={value} onChange={(e) => setValue(e.target.value)}>
                    <FormControlLabel
                        label='2000$'
                        value='2000'
                        color='secondary'
                        control={<Radio color='error' />} />
                    <FormControlLabel
                        label='3000$'
                        value='3000'
                        color='secondary'
                        control={<Radio color='error' />} />
                    <FormControlLabel
                        label='4000$'
                        value='4000'
                        color='secondary'
                        control={<Radio color='error' />} />
                </RadioGroup>
                <FormHelperText>Yanlış Seçim</FormHelperText>
            </FormControl>
        </div>
    )
}
