import React, { useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShopeContext } from '../Context/ShopeContext';

const Navbar = () => {
    const [menu, setmenu] = useState('shop')
    const {getTotalitem} = useContext(ShopeContext)
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setmenu("shop") }}><NavLink  style={{ textDecoration: 'none' }} to="/">Shope</NavLink>{menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("mens") }}><NavLink style={{ textDecoration: 'none' }} to="/mens">Men</NavLink>{menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("women") }}><NavLink style={{ textDecoration: 'none' }} to="/women">Women</NavLink>{menu === 'women' ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("kids") }}><NavLink style={{ textDecoration: 'none' }} to="/kids">Kids</NavLink>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
             <NavLink to="/login"><button>Login</button></NavLink>
              <NavLink to="/cart"><img src={cart_icon} alt="" /></NavLink>
                
                <div className="nav-count">{getTotalitem()}</div>
            </div>
        </div>
    )
}

export default Navbar