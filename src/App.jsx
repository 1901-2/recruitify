import React from 'react'
import Navbar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer';
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Job from './pages/Job'
import Companies from './pages/Companies'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  
  return (
    <div className='w-[85%] m-auto bg-white'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path='/Job' element = {<Job/>}/>
        <Route path='/Companies' element = {<Companies/>}/>
        <Route path='/About' element = {<About/>}></Route>
        <Route path='/Blog' element = {<Blog/>}></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/Register' element = {<Register/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
