import React from 'react';
import styled from 'styled-components';
import {SiGeeksforgeeks, SiCodechef,SiLeetcode} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Sidebar = styled.div`
    position: fixed;
    bottom: 20%;
    right: 5%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 37px 11px;
    /* background-color: #6b7df1; */
    border: 1px solid #827979;
    border-radius: 40px;
    gap: 14px;
    &:hover {
        box-shadow: 0 0 30px 4px rgba(0,0,0,0.6);
        filter: brightness(1.8);
    }

    @media (max-width: 500px) {
        padding: 7px 24px;
        flex-direction: row;
        bottom: 27px;
        right: 29%;
    }
    
`

const SidebarIcon = styled.a`
    border: 1px solid #848484;
    color: #c2c2c2;
    padding: 7px;
    font-size: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        background-color: #854CE6;
    }
    @media (max-width: 768px) {
        font-size: 10px;
    }
    @media (max-width: 500px) {
        font-size: 7px;
        padding: 5px;
    }
    
`

const StickySidebar = () => {
  return (
    <Sidebar>
      <SidebarIcon href={Bio.leetcode} target="_blank" ><SiLeetcode /></SidebarIcon>
      <SidebarIcon href={Bio.codechef} target="_blank"><SiCodechef /></SidebarIcon>
      <SidebarIcon href={Bio.gfg} target="_blank" ><SiGeeksforgeeks/></SidebarIcon>
      <SidebarIcon href={Bio.github} target="_blank" ><FaGithub/></SidebarIcon>
    </Sidebar>
  );
}

export default StickySidebar;
