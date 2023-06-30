import {FaTwitter,FaYoutube,FaLinkedinIn} from 'react-icons/Fa';
import {FiInstagram} from 'react-icons/Fi';
import { ImFacebook} from 'react-icons/Im';
import {GiChefToque} from 'react-icons/Gi';
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
    <div className="container contain">
      <div className="sec-footer first">
        <div className="logo-sec">
        <h1>Tasty Bites</h1>
        <GiChefToque className='chef'/>
        </div>
         <span>With over 3 lakh listed restaurants, explore the best food around Indias . Most loved & trusted food app- making hungry customers happy since 2008!</span>
      </div>
      <div className="sec-footer">
      <h3>About Us</h3>
<ul>
<li><a href="">Home</a></li>
<li><a href="">Services</a></li>
<li><a href="">Menu</a></li>
<li><a href="">Reviews</a></li>
</ul>

      </div>

      <div className="sec-footer">
      <h3>Learn More</h3>
<ul>
<li>Privacy</li>
<li>Security</li>
<li>Terms</li>
<li>Sitemap</li>
</ul>

      </div>
      <div className="sec-footer">
        <h3>Social Links</h3>
        <div className="links">
        <ImFacebook className="link"/>
        <FaLinkedinIn className="link"/>
        <FaYoutube className="link"/>
        <FiInstagram className="link"/>
        <FaTwitter className="link"/>
        </div>
        <div className="play-store">
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"/>
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
      </div></div>
    </div></div>
  )
}

export default Footer
