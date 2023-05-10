import React, { useState } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from '@mui/material'

export const LessonDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setDialogOpen(!dialogOpen)}>Dialogu Aç</Button>
            <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false) }}>
                <DialogTitle>Hangisini Seviyorsun</DialogTitle>
                <DialogContent>
                    <DialogContentText>Frontend frameworklerinden hangisini daha çok seviyoesunuz.</DialogContentText>
                    <DialogActions>
                        <Button onClick={() => { setDialogOpen(false) }}>Angular</Button>
                        <Button onClick={() => { setDialogOpen(false) }}>React</Button>
                        <Button onClick={() => { setDialogOpen(false) }}>Vue</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
