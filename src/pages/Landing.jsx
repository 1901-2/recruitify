import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Search from '../Components/SearchDiv/Search'
import Jobs from '../Components/JobDiv/Jobs'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/FooterDiv/Footer'

const Landing = () => {
  return (
    <div>

<NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>  
    </div>
  )
}

export default Landing