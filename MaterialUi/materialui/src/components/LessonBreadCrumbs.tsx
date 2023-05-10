import React from 'react'
import { Breadcrumbs, Link } from '@mui/material'

export const LessonBreadCrumbs = () => {
    return (
        <Breadcrumbs separator="-" maxItems={2}>
            <Link> Anasayfa</Link >
            <Link>Blog</Link>
            <Link>Adem Karagülle</Link>
            <Link>Adem Karagülle</Link>
            <Link>Adem Karagülle</Link>
        </Breadcrumbs >
    )
}
