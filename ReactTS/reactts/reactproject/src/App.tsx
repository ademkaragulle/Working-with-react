// import { useState } from 'react'
import './App.css'
import ContextExample from './assets/components/ContextExample'
import EventActions from './assets/components/EventActions'
import Home from './assets/components/Home'
import Instructor from './assets/components/Instructor'
import InstructorList from './assets/components/InstructorList'
import LoginCheck from './assets/components/LoginCheck'
import ReducerExemple from './assets/components/ReducerExemple'
import RefExemple from './assets/components/RefExemple'
import Request from './assets/components/Request'
import { ThemeContextProvider } from './assets/components/ThemeContext'


function App() {
  // const [count, setCount] = useState(0)

  const instructor = {
    firstName: 'Adem',
    lastName: 'Karagülle'
  }


  const instructorList = [
    {
      firstName: 'Adem',
      lastName: 'Karagülle'
    },
    {
      firstName: 'Zeynep',
      lastName: 'Karagülle'
    },
    {
      firstName: 'Fatma',
      lastName: 'Karagülle'
    }
  ]

  return (
    <>
      <div className='app'>
        {/* <Home name="Adem Karagülle" courseNumber={15} isBest />
        <Home name={10} /> Yanlış
        <Instructor instructorNameLastName={instructor} />
        <InstructorList instructorNameLastNameList={instructorList} />
        <Request status="error" />
        <EventActions /> */}
        {/* <LoginCheck /> */}
        {/* <ReducerExemple /> */}
        {/* <ThemeContextProvider>
          <ContextExample />
        </ThemeContextProvider> */}
        <RefExemple />
      </div>
    </>
  )
}

export default App
