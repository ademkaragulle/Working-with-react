import React from 'react'
import { CircularProgress, Stack, LinearProgress } from '@mui/material'

export const LessonProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color='secondary' />
            <CircularProgress color='success' />


            <CircularProgress variant='determinate' value={25} />


            < LinearProgress />
            < LinearProgress color='success' />
            < LinearProgress color='error' variant='determinate' value={25} />
        </Stack>
    )
}
