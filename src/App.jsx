import React from 'react'
import  './App.css'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
    </Routes>
    </div>
  )
}

export default App;