import {StyledTitle, StyledSubTitle, Avatar, ButtonPosition2, colors, StyledFormArea, StyledFormButton, StyledFormArea2} from "./../componentes/styles";

//icono perfil
import icono_perfil from './../assets/icono_perfil.webp';

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <IconContext.Provider value={{ color: '#000000' }}>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} className="Faicon" /> 
            </Link>    
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
            <ul className='nav-menu-items' onClick={showSidebar}>
            
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose  />
                </Link>
            </li>
            <li className='user-profile'>
                <Avatar image={icono_perfil}></Avatar>
                <p className="user-profile__name">Deisy Arrieta</p>
            </li>
            {SidebarData.map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                    {item.icon}
                    <span className='icon-text'>{item.title}</span>
                    </Link>
                </li>
                );
            })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar;