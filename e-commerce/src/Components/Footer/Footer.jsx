import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
// import { Link } from 'react-router-dom'

const Footer = () => {
  // const [link, setLink] = useState("")

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      {/* <ul className="footer-links">
        <li onClick={()=> {setLink("company")}}><Link style={{ textDecoration: 'none'}} to='/company'>Company</Link>{link==="company"?<hr/>:<></>}</li>
        <li onClick={()=> {setLink("product")}}><Link style={{ textDecoration: 'none'}} to='/product'>Product</Link>{link==="product"?<hr/>:<></>}</li>
        <li onClick={()=> {setLink("offices")}}><Link style={{ textDecoration: 'none'}} to='/offices'>Offices</Link>{link==="offices"?<hr/>:<></>}</li>
        <li onClick={()=> {setLink("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{link==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setLink("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{link==="contact"?<hr/>:<></>}</li>
      </ul> */}
      
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div><div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
    
  );
};

export default Footer;
