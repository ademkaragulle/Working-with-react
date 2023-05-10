import React from 'react'
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
  return (
    <Stack spacing={4}>

      <Stack direction='row' spacing={2}>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='text' color='warning'>Orange</Button>
        <Button variant='text' color='secondary'>Purple</Button>
        <Button variant='text' color='success'>Green</Button>
        <Button variant='text' color='error'>Red</Button>
        <Button variant='text' color='primary'>Blue</Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='outlined' color='warning'>Orange</Button>
        <Button variant='outlined' color='secondary'>Purple</Button>
        <Button variant='outlined' color='success'>Green</Button>
        <Button variant='outlined' color='error'>Red</Button>
        <Button variant='outlined' color='primary'>Blue</Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='warning'>Orange</Button>
        <Button variant='contained' color='secondary'>Purple</Button>
        <Button variant='contained' color='success'>Green</Button>
        <Button variant='contained' color='error'>Red</Button>
        <Button variant='contained' color='primary'>Blue</Button>
      </Stack>

      <Stack direction='row' spacing={2} display='block'>
        <Button size='small' variant='outlined' color='primary'>Button</Button>
        <Button size='medium' variant='outlined' color='primary'>Button</Button>
        <Button size='large' variant='outlined' color='primary'>Button</Button>
      </Stack>

      <Stack direction='row' spacing={2}>

        <Button variant='contained' endIcon={<AddIcon />} >Add</Button>
        <Button variant='contained' startIcon={<AddIcon />} onClick={() => alert('Clicked')}>Add</Button>
      </Stack>
    </Stack>
  )
}
