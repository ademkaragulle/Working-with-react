import React, { useState } from 'react'

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,

} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)


    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        // console.log(isExpanded)
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion> */}

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third Section</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corporis, dolor repellat impedit architecto soluta modi minima eligendi eveniet, distinctio saepe? Aspernatur numquam reiciendis laborum amet quibusdam quam aliquid officia?</AccordionDetails>
            </Accordion>
        </div >
    )
}
