import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'


const Navbar = () => {
  const [showlinks,setShowLinks]=useState(false);
    return (
      <nav  >
     <div className='nav-center' >
      <div className='nav-header' >
          <h1>logo</h1>
          <button className='nav-toggle'  onClick={()=>{setShowLinks(!showlinks)}}  >
           <FaBars/>
          </button>
      </div>

     <div className={`${showlinks ? 'links-container show-container':'links-container'}`} >
          <ul className='links' >
          <li >
           <a href="#" >home</a>
          </li>
          <li>
          <a href="#" >about</a>
          </li>
          <li>
          <a href="#" >contact</a>
          </li>
          <li>
          <a href="#" >products</a>
          </li>
          </ul>
          <ul className='social-icons' >
              <li>

                  <a href="https://www.twitter.com" >
                      <FaTwitter></FaTwitter>
                  </a>
                  <a href="https://www.twitter.com" >
                      <FaTwitter></FaTwitter>
                  </a>
              </li>
          </ul>
          </div>
     </div>
      </nav>
  );
}

export default Navbar