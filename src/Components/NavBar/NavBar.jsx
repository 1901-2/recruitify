import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'> 
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blueColor">
                <strong>Recrutify</strong></h1>
        </div>

        <div className="menu flex gap-8">
           <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Job'}>Jobs</Link>
            </li> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Companies'}>Companies</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/About'}>About</Link>
            </li> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Contact'}>Contact</Link>
            </li> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Blog'}>Blog</Link>
            </li> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Login'}>Login</Link>
            </li> 
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <Link to={'/Register'}>Register</Link>
            </li> 
        </div>

        </div>
    )
}

export default NavBar
