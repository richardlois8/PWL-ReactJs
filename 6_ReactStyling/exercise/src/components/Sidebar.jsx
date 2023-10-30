import React from 'react';
import homeIcon from '../assets/home.svg';
import searchIcon from '../assets/home.svg';
import libraryIcon from '../assets/home.svg';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <MainSidebar/>
        </div>
    )
}

const MainSidebar = () => {
    return (
        <div className="mainSidebar">
            <SidebarItem icon={homeIcon} text="Home"/>
            <SidebarItem icon={searchIcon} text="Search"/>
            <SidebarItem icon={libraryIcon} text="Your Library"/>
        </div>
    )
};

const SidebarItem = (props) => {
    return (
        <div className="mainSidebarItem">
            <div className="mainSidebarItemIcon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="mainSidebarItemText">
                <p>{props.text}</p>
            </div>
        </div>
    )
};

export default Sidebar