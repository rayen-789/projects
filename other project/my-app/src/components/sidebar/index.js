import React from 'react'
import {Icon,SidebarContainer,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SideElements'
function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}  >
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" >
                          About
                    </SidebarLink>
                    <SidebarLink to="discover" >
                          Discover
                    </SidebarLink>
                    <SidebarLink to="services" >
                          Services
                    </SidebarLink>
                    <SidebarLink to="signup" >
                          Signup
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
        
    )
}

export default Sidebar
