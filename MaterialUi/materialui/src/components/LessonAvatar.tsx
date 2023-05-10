import React from 'react'
import { Stack, AvatarGroup, Avatar } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';


export const LessonAvatar = () => {
    return (
        <>
            {/* <Stack direction="row">
                <AvatarGroup spacing={5}>
                    <Avatar src='https://randomuser.me/api/portraits/women/56.jpg' />
                    <Avatar src='https://randomuser.me/api/portraits/men/56.jpg' />
                </AvatarGroup>
            </Stack> */}
            <Stack direction="row" spacing={4}>
                <AvatarGroup>
                    <Avatar sx={{ marginRight: "10px" }} src='https://randomuser.me/api/portraits/women/56.jpg' />
                    <Avatar src='https://randomuser.me/api/portraits/men/56.jpg' />
                </AvatarGroup>
                <AvatarGroup max={4}>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                    <Avatar sx={{ marginRight: "10px", bgcolor: "primary.light", width: 50, height: 50 }}>Adem</Avatar>
                    <Avatar variant='square' sx={{ marginRight: "10px", bgcolor: "primary.success", width: 50, height: 50 }}>Zeynep</Avatar>
                </AvatarGroup>
            </Stack>
        </>
    )
}
