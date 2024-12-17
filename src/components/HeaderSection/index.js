import React, { useState } from "react"

import {useNavigate} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'

import { FcGlobe } from "react-icons/fc"

import { FaBars } from "react-icons/fa6";

import { IoSearchOutline } from "react-icons/io5"

import { HiOutlineUser } from "react-icons/hi2"

import { PiShoppingCartLight } from "react-icons/pi"

import { IoExitOutline } from "react-icons/io5"

import { setSearchValue } from '../../redux/productSlice'

import { logout } from '../../redux/authSlice'


import './index.css'

const HeaderSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quantity = useSelector((store) => {return store.cartReducer.cartQuantity})
    const {searchValue} = useSelector((store) => {return store.productState})
    
    const onhandleHomeClick = () => {
        navigate('/')
    }
    const onhandleUserClick = () => {
        navigate('/user')
    }
    const onhandleCartClick = () => {
       navigate('/cart')
    }

    const handleSearchValue = (event) => {
        dispatch(setSearchValue(event.target.value))
    }

    const onhandleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className="header-holder">
            <div className='logo-holder' onClick={() => onhandleHomeClick()}>
                <h1 className='app-name'>SH<FcGlobe className="title-icon"/>PPIFY</h1>
                </div>  
                <nav className='sm-navbar'>
                    <button className="menu-button" onClick={toggleMenu}>
                    <FaBars size="1.5rem"/>
                    </button>
                    {isOpen && (
                    <ul className="dropdown-menu">
                    <li className="menu-item" onClick={()=>onhandleCartClick()}>
                    <PiShoppingCartLight size="1.5rem"/>
                    <a href="#section2" onClick={toggleMenu}>Cart</a>
                    </li>
                    <li className="menu-item" onClick={()=>onhandleUserClick()}>
                    <HiOutlineUser size="1.5rem" />    
                    <a href="#section1" onClick={toggleMenu}>User</a>
                    </li>
                    <li className="menu-item" onClick={() =>onhandleLogout()}>
                    <IoExitOutline size="1.5rem" 
                    />
                    <a href="#section3" onClick={toggleMenu}>Logout</a>
                </li>
                </ul>
                )}

                </nav>
                <nav className="icons-row">
                    <div className='searchbar-holder'>
                    <input type="text" className='search-bar'
                    placeholder="Search for Products" value={searchValue}
                    onChange={handleSearchValue}
                    />
                    <IoSearchOutline className="search-icon"/>
                    </div>
                    <div className="cart-holder" onClick={()=>onhandleCartClick()}>
                    <PiShoppingCartLight size="1.5rem"/>
                    <p className="cart-quantity">{quantity}</p>
                    </div>
                    <HiOutlineUser size="1.5rem" onClick={()=>onhandleUserClick()}/>
                    <IoExitOutline size="1.5rem" 
                    onClick={() =>onhandleLogout()}/>
            </nav>
        </header>
    )
}

export default HeaderSection