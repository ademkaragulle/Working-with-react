import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material'

export const LessonButtonGroup = () => {
    return (


        //Button Group
        // variant='outlined/contained/text'
        // orientation='vertical'

        <div>
            <Stack direction="row">
                <ButtonGroup variant='contained'>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
                <ButtonGroup variant='text'>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
                <ButtonGroup variant='text' orientation='vertical'>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
                <ButtonGroup 
                variant='text' orientation='vertical' size='small' color='error'>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
            </Stack>
        </div>
    )
}
