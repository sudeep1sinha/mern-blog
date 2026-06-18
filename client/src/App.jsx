import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import AddNewBlog from './pages/add_blog'
import Home from './pages/home'

function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route  path='/add-blog' element={<AddNewBlog />}/>
        <Route />
      </Routes>
    </div>
  )
}

export default App
