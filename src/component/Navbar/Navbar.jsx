import { HiMenu } from 'react-icons/hi';
import './Navbar.css'
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);

  const toggle = () => {
    setNavToggle(!navToggle);
  }


  return (
    <nav className='container contain'>
      <div className="logo">
        <img src="/assets/logo.png" />
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
          <i class="ri-user-3-fill"></i>
        </div>

        <div className="button">
          <i class="ri-shopping-cart-2-fill"></i>
        </div>
        <div className="menu" onClick={() => toggle()}>
          <i class="ri-menu-line"></i>
        </div>
      </div>



    </nav>
  )
}

export default Navbar
