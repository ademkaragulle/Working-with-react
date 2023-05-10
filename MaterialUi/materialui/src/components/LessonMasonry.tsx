import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import { Masonry } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const height = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80]

export const LessonMasonry = () => {
    return (
        <Masonry columns={3} spacing={2}>
            {height.map((height, index) => {
                return <Paper key={index} >
                    <Accordion sx={{ minHeight: height }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Accordion {index + 1}
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor.
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            })}
        </Masonry>
    )
}
