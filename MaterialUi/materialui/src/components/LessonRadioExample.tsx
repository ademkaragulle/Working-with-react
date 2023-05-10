import React from 'react'
import {
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    FormHelperText,
    Button
} from '@mui/material'
import { useState } from 'react'

export const LessonRadioExample = () => {
    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)


    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value === 'canboz') {
            setHelperText('Seçiminiz Can Boz')
            setError(false)
        } else if (value === 'ofCourseCanBoz') {
            setHelperText('Seçiminiz Tabiki de Can Boz')
            setError(false)
        } else {
            setHelperText('Lütfen Seçim Yapınız')
            setError(true)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl error={error}>
                    <FormLabel>En Kapsamlı Frontend Eğitimini Veren Kim?</FormLabel>
                    <RadioGroup onChange={handleRadioChange}>
                        <FormControlLabel label="Can Boz" value="canboz" control={<Radio />} />
                        <FormControlLabel label="Tabiki Can Boz" value="ofCourseCanBoz" control={<Radio />} />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button type='submit' variant='outlined'>Gönder</Button>
                </FormControl>
            </form>
        </div>
    )
}
