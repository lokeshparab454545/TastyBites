import {BsFillPersonFill,BsFillCartFill} from 'react-icons/Bs';
import {HiMenu} from 'react-icons/Hi';
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);

const toggle = () => {
setNavToggle(!navToggle);
}


  return (
    <nav className='container contain'>
      <div className="logo">
        <img src="/assets/logo.png"/>
      </div>
      <div className={(navToggle) ? "nav-links" : "nav-links-active"}>  
        <ul className='nav-ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#review">Reviews</a></li>
            </ul>
      </div>

      <div className="nav-button">
      <div className="button">
          <BsFillPersonFill/>
    </div>

    <div className="button">
          <BsFillCartFill/>
          </div>
          <div className="menu" onClick={()=>toggle()}>
    <HiMenu/>
    </div>
      </div>
      

    
    </nav>
  )
}

export default Navbar
