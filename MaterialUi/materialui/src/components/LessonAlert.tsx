import React from 'react'
import { Alert, AlertTitle, Stack } from '@mui/material'
export const LessonAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                Lesson Alert
            </Alert>
            <Alert severity='warning'>
                <AlertTitle>Warning</AlertTitle>
                Lesson Alert
            </Alert>
            <Alert severity='info'>
                <AlertTitle>Info</AlertTitle>
                Lesson Alert
            </Alert>
            <Alert severity='success'>
                <AlertTitle>Success</AlertTitle>
                Lesson Alert
            </Alert>
        </Stack>
    )
}
