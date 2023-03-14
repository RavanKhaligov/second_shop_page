import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu,AiOutlineShoppingCart} from "react-icons/ai"
function Header({allProducts}) {
    const [isOpen,setIsOpen] = useState(false)
    const [openDropdown,setOpenDropdown] = useState(false)
  return (
    <header>
        <div className='inner-header'>
            <div className='flex main-flex'>
                {/* Icon text side */}
                <div className='logo'>
                    <img src="https://themewagon.github.io/famms/images/logo.png" alt="logo"/>
                </div>
                <div>
                    {/* Hambuerger menu clicker */}
                    <div className='hamburger-menu' onClick={() =>setIsOpen(!isOpen)}>
                        <button>
                            <AiOutlineMenu/>
                        </button>
                    </div>
                    {/* Main menu  */}
                    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                        <ul className='navbar-menu flex'>
                            <li className='menu-item'>
                                <Link to = '/' className='menu-link'>Home</Link>
                            </li>
                            <li className='menu-item' onClick={() => setOpenDropdown(!openDropdown)}>
                                <Link to='/about' className='menu-link'>About</Link>
                            
                            </li>
                            <li className='menu-item'>
                                <Link to='/products' className='menu-link'>Products</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/blog' className='menu-link'>Blog</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to = '/basket' className='menu-link flex'>
                                    <span>{allProducts.length}</span>
                                    <AiOutlineShoppingCart/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header