import React from 'react'
import "./Navbar.css"
import {FaCarSide} from "react-icons/fa6";
import {RxAvatar} from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 
    const navigate = useNavigate();

    const toLogin = ()=>{
        return navigate("/login")
    }

    const toHomePage = () => {
        return navigate("/")
    }
const toDealerPage = () => {
  return navigate("/dealer")
}

 const toAddCar = () => {
  return navigate("/inventory")
 }
const toOEM = () => {
  return navigate("/oem")
}

  return (
    <div className='navbar'>
       <div className='logo'>
        <p onClick={toHomePage} >........<FaCarSide /></p>
        <p onClick={toHomePage} >BuyCar</p>
       </div>
       <div className='nav-menu'>
           <ul>
            <li onClick={toOEM}>OEM Specs</li>
            <li onClick={toAddCar}>Add Car</li>
            <li onClick={toDealerPage}>Dealer Section</li>
            <li onClick={toLogin}><RxAvatar fontSize={"25px"} /> Login/Signup</li>
           </ul>
       </div>
    </div>
  )
}

export default Navbar;
