import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationIcon from '@mui/icons-material/LocationOn';



export const LessonBottomNavigation = () => {
    const [value, setValue] = useState(0)




    return (
        <div>
            <BottomNavigation
                showLabels
                sx={{ width: "100%", position: "absolute", bottom: 0, }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >

                <BottomNavigationAction label="Restore" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationIcon />} />
            </BottomNavigation>


        </div>
    )
}
