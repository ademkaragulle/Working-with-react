import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'

export const LessonCard = () => {
    return (
        <Card sx={{
            width: '350px',
        }}>
            <CardMedia
                component="img"
                image='https://source.unsplash.com/random/'
                height="150px"
            />
            <CardContent>
                <Typography variant='h5' component="div">
                    Başlığım
                </Typography>
                <Typography variant='body2' component="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos nemo aperiam soluta magni quasi id, at nulla est, ipsum delectus consequatur? Asperiores perferendis in, impedit voluptatum explicabo corrupti sunt.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='error'>temizle</Button>
                <Button>Kaydet</Button>
            </CardActions>
        </Card>
    )
}
