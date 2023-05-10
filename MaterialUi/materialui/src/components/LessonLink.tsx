import React from 'react'
import { Link, Box, } from '@mui/material'

export const LessonLink = () => {
    return (
        <Box>
            <Link href='https://www.canboz.com' >Web siteme git.</Link>
            <Link href='https://www.canboz.com' target='_' color="error">Web siteme git.</Link>
            <Link href='https://www.canboz.com' target='_' color="error" variant='body2'>Web siteme git.</Link>
            <Link href='https://www.canboz.com' underline='none'>Web siteme git.</Link>
            <Link href='https://www.canboz.com' underline='hover'>Web siteme git.</Link>
            <Link href='https://www.canboz.com' underline='hover' component="button" onClick={()=>{console.log('adem')}}>Web siteme git.</Link>
        </Box>
    )
}
