import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { FaCopyright, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='max-width '>
        {/* <div className='grid grid-two-column container'>
          <div>
            <p className='grid-p'>Ready to get started ?<br />
              talk to us today</p>
          </div>
          <div>
            <NavLink to='/'>
              <button className='btn footer-btn'>get started</button>
            </NavLink>
          </div>
        </div> */}

        {/* footer */}

        <footer>
          <div>
            <div className='grid grid-four-column footer'>
              <div className='footer-about'>
                <h3 className='channel-name'>RohiTECH</h3>
                <p className='channel-para'> reference site about Lorem Ipsum, giving information on its origins, </p>
              </div>
              <div className='subscribe'>
                <h3>subscribe to get important updates</h3>
                <NavLink to='https://www.youtube.com/channel/UCMabFsjOmRjVLL4kX0DqfFA' target='_blank'>
                  <button className='btn'>Subscribe</button>
                </NavLink>
              </div>
              <div className='web-link'>
                <h3>Follow Us</h3>
                <NavLink to='https://www.instagram.com/rohitprajapati0001/'>
                  <FaInstagram className='instagram' />
                </NavLink>
                <NavLink to='https://github.com/Rohit1prajapati'>
                  <FaGithub className='github' />
                </NavLink>
                <NavLink to='https://www.youtube.com/channel/UCMabFsjOmRjVLL4kX0DqfFA'>
                  <FaYoutube className='youtube' />
                </NavLink>
              </div>
              <div className=''>
                <h3>Contact us</h3>
                <p>+9154000145155</p>
              </div>
            </div>
          </div>
          {/* footer-bttom-part */}
          <div className='footer-bttom-part'>
            <hr />
            <div className='grid grid-two-column'>
              <p> <FaCopyright /> Copyright RohiTECH.   @{new Date().getFullYear()}</p>

              <div>
                <h4>privacy Policy.</h4>
                <h4>Terms & Condition.</h4>
              </div>
            </div>
          </div>
        </footer>


      </div >
    </>
  )
}

export default Footer