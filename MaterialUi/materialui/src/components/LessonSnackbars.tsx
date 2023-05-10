import React, { useState } from 'react'
import { Snackbar, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const LessonSnackbars = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)


    const handleClick = () => {
        setOpenSnackbar(true)
        setTimeout(() => {
            setOpenSnackbar(false)
        }, 3000);
    }
    const handleClose = () => {
        setOpenSnackbar(false)
    }
    const action = (
        <React.Fragment>
            <Button color='warning' size='small' onClick={handleClose} >Undo</Button>
            <IconButton sx={{ color: "white" }} onClick={handleClose}><CloseIcon /></IconButton>
        </React.Fragment>
    )

    return (
        <div>
            <Button onClick={handleClick}>Snackbarı aç</Button>
            <Snackbar
                open={openSnackbar}
                message="Hata mesajı aldınız."
                action={action}
                // SetTimeOut için aşağıdaki property kullanılıyor
                // autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
            />
        </div>
    )
}
