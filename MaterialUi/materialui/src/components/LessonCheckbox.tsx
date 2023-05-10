import React from 'react'
import { useState } from 'react';
import {
  Box,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormLabel,
  FormGroup,
  FormHelperText
} from '@mui/material';

export const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState<boolean>(false)
  const [knowlegde, setKnowlegde] = useState<string[]>([])


  const handleKnowledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowlegde.indexOf(e.target.value)

    if (index === -1) {
      setKnowlegde([...knowlegde, e.target.value])
    }
    else {
      setKnowlegde(knowlegde.filter((item) => item !== e.target.value))
    }
  }
  // console.log(knowlegde)
  return (
    <div>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup row>
              <FormControlLabel disabled label="İlkokul" control={<Checkbox />} />
              <FormControlLabel label="Lise" control={<Checkbox defaultChecked />} />
              <FormControlLabel label="Üniversite" control={<Checkbox />} />
            </FormGroup>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup row>
              {/* <FormControlLabel label="Kullanım Koşullarını Kabul Ediyorum. (!isAccept)" control={<Checkbox checked={isAccept} onChange={() => setIsAccept(!isAccept)} />} /> */}
              <FormControlLabel label="Kullanım Koşullarını Kabul Ediyorum. (e.target.checked)" control={<Checkbox checked={isAccept} onChange={(e) => setIsAccept(e.target.checked)} />} />
            </FormGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Frontend de Neleri Biliyorsun?</FormLabel>
            <FormGroup row>
              <FormControlLabel
                value="react"
                label=" React JS"
                control={<Checkbox
                  checked={knowlegde.includes('react')}
                  onChange={handleKnowledgeChange} />}
              />
              <FormControlLabel
                value="angular"
                label=" Angular"
                control={<Checkbox
                  checked={knowlegde.includes('angular')}
                  onChange={handleKnowledgeChange} />}
              />
              <FormControlLabel
                value="vue"
                label=" Vue JS"
                control={<Checkbox
                  checked={knowlegde.includes('vue')}
                  onChange={handleKnowledgeChange} />}
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </div >
  )
}

