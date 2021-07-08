import React from 'react'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/" >
                      dolla
                  </NavLogo>
                  <MobileIcon onClick={toggle} >
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">
                           About
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="discover">
                           discover
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services">
                           services
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="signup">
                           signup
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signup' >
                              sign in
                      </NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
