import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, NavSocialButton,ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import {SiDash, SiLeetcode} from 'react-icons/si';

import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <SiDash size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <NavSocialButton href={Bio.github} target="_blank"><GrGithub /></NavSocialButton>
          <NavSocialButton href={Bio.linkedin} target="_blank"><BsLinkedin /></NavSocialButton>
          <NavSocialButton href={Bio.leetcode} target="_blank"><SiLeetcode /></NavSocialButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
              <div style={{display:'flex'}}>
                <NavSocialButton href={Bio.github} target="_blank"><GrGithub /></NavSocialButton>
                <NavSocialButton href={Bio.linkedin} target="_blank"><BsLinkedin /></NavSocialButton>
                <NavSocialButton href={Bio.leetcode} target="_blank"><SiLeetcode /></NavSocialButton>
              </div>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar