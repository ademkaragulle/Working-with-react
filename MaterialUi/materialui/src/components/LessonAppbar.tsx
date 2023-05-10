import React, { useState } from 'react'

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem

} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';


export const LessonAppbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const openControl = Boolean(anchorEl)
    // console.log(openControl)




    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
        // console.log(e.currentTarget)
    }


    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <Typography sx={{ marginRight: "auto" }} variant='h6' component="div">
                        Header Örneği
                    </Typography>
                    <Stack direction="row">
                        <Button sx={{ color: 'white' }}>Anasayfa</Button>
                        <Button sx={{ color: 'white' }}>Hakkımızda</Button>
                        <Button sx={{ color: 'white' }}>Ürünler</Button>
                        <Button sx={{ color: 'white' }} onClick={handleClick}>İndirimdekiler</Button>
                    </Stack>
                    <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                        <MenuItem onClick={handleClose} >Kitaplar</MenuItem>
                        <MenuItem onClick={handleClose} >Defterler</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}
