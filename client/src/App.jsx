import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavaBar from './components/NavaBar'
import Register from './components/Register'

export default function App() {
  return (
      <BrowserRouter>
      <NavaBar/>
      <Routes>
        
        <Route path ='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}
