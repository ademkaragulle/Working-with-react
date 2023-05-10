import React, { useState } from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
export const LessonDrawer = () => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    return (
        <>
            <IconButton size='large' onClick={() => setIsOpen1(true)}>
                <MenuIcon />
            </IconButton>
            <IconButton size='large' onClick={() => setIsOpen2(true)}>
                <MenuIcon />
            </IconButton>
            <IconButton size='large' onClick={() => setIsOpen3(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={isOpen1} onClose={() => setIsOpen1(false)}>
                <Box width='250px' textAlign="center">
                    <Typography component="div" variant='h6'>Soldaki Panel</Typography>
                </Box>
            </Drawer>
            <Drawer open={isOpen2} anchor='right' onClose={() => setIsOpen2(false)}>
                <Box width='250px' textAlign="center">
                    <Typography component="div" variant='h6'>Sağdaki Panel</Typography>
                </Box>
            </Drawer>
            <Drawer open={isOpen3} anchor='bottom' onClose={() => setIsOpen3(false)}>
                <Box width='250px' textAlign="center">
                    <Typography component="div" variant='h6'>Aşağıdaki Panel</Typography>
                </Box>
            </Drawer>
        </>
    )
}
