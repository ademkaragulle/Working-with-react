import React from 'react'
import { Stack, TextField, InputAdornment } from
    '@mui/material';
import { useState } from 'react'


export const LessonTextField = () => {
    const [value, setValue] = useState('')
    return (



        // label="Ad"
        // variant='outlined/filled/standard'
        // size='small'
        // color='error'
        // helperText="Lütfen İsminizi Giriniz." 


        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField label="Ad" />
                    <TextField label="Ad" variant='outlined' />
                    <TextField label="Ad" variant='filled' />
                    <TextField label="Ad" variant='standard' />

                    <TextField
                        label="Ad"
                        variant='outlined'
                        size='small'
                        color='error' />


                    <TextField
                        label="Ad"
                        variant='outlined'
                        helperText="Lütfen İsminizi Giriniz." />


                    <TextField
                        type='password'
                        label="Ad"
                        variant='outlined'
                        helperText="Lütfen Şifrenizi Giriniz." />


                    <TextField
                        disabled
                        type='password'
                        label="Ad"
                        variant='outlined'
                        helperText="Lütfen Şifrenizi Giriniz."
                    />


                    <TextField
                        inputProps={{ readOnly: true }}
                        type='password'
                        label="Ad"
                        variant='outlined'
                        helperText="Lütfen Şifrenizi Giriniz."
                    />


                    <TextField
                        InputProps={{
                            startAdornment:
                                <InputAdornment position='start'>TL</InputAdornment>

                        }}
                        label="toplam"
                        variant='outlined'
                    />


                    <TextField
                        InputProps={{
                            endAdornment:
                                <InputAdornment position='end'>TL</InputAdornment>

                        }}
                        label="toplam"
                        variant='outlined'
                    />

                </Stack>
                <Stack direction="row">
                    <TextField
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        value={value}
                        type='password'
                        label='Password'
                        variant='outlined'
                        helperText={!value ? 'Lütfen şifrenizi giriniz' : 'Şifrenizi Kimseyle paylaşmayın'}
                    />
                </Stack>
            </Stack>
        </div>
    )
}
