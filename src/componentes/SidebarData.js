import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { useContext } from 'react';

export const SidebarData = [
    {
    title: 'Perfil',
    path: '/Perfil',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
    },
    {
    title: 'Mapa',
    path: '/map',
    icon: <FaIcons.FaMapMarkedAlt/>,
    cName: 'nav-text'
    },
    {
    title: 'Reportes',
    path: '/Reportes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title: 'Calificaciones',
    path: '/Calificación',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
    },
    {
    title: 'Busqueda',
    path: '/Busqueda',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
    },
    {
    title: 'Conocenos',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
    },
    {
    title:'Robos registrados',
    path:'',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    onClick: console.log('click Markers')
    }
];
