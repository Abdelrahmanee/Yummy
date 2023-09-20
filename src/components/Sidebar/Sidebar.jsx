import React, { useRef } from 'react'
import Style from './Sidebar.module.css'
import logo from '../../assets/imgaes/logo.png'
import { Link } from 'react-router-dom';
export default function Sidebar() {

    let sidebar = useRef(null);
    let innerSidebar = useRef(null);
    let outerSidebar = useRef(null);
    let sidebarIcon = useRef(null);
    let ulElements = useRef(null)
    function sidebarEffacts() {
        // I wabt to whow the left of Sidebar
        // let left =window.getComputedStyle(sidebar.current).getPropertyValue("left");
        let left = window.getComputedStyle(sidebar.current).getPropertyValue("left")
        if (left == "0px") {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    function openSidebar() {
        sidebar.current.style.left = '0px';
        sidebarIcon.current.classList.replace("fa-bars", "fa-xmark")
        ulElements.current.classList.replace("top-50", "top-0")
    }
    function closeSidebar() {
        let width = innerSidebar.current.offsetWidth;
        sidebar.current.style.left = `-${width}px`;
        sidebarIcon.current.classList.replace("fa-xmark", "fa-bars")
        ulElements.current.classList.replace("top-0", "top-50")
    }
    return (
        <> <nav ref={sidebar} className={`${Style.sidebar}`}>

            <div ref={innerSidebar} className={`${Style.innerSidebar}`}>
                <ul ref={ulElements} className='list-unstyled top-50 position-relative row gy-3'>
                    <Link onClick={closeSidebar} to="/search"><li>Search</li></Link>
                    <Link onClick={closeSidebar} to="/categories"><li>Categories</li></Link>
                    <Link onClick={closeSidebar} to="/area"><li>Area</li></Link>
                    <Link onClick={closeSidebar} to="/ingredients"><li>Ingredients</li></Link>
                    <Link onClick={closeSidebar} to="/contact"><li>Contact Us</li></Link>

                </ul>
                <div className="">
                    <div className=" ">
                        <i className='pe-2 fa-brands fa-facebook-f pointer'></i>
                        <i className='pe-2 fa-brands fa-twitter pointer'></i>
                        <i className="fa-solid fa-globe py-2 pointer"></i>
                    </div>
                    Copyright Â© 2019 All Rights Reserved.
                </div>

            </div>
            <div ref={outerSidebar} className={`${Style.outerSidebar} `}>
                <img src={logo} width={'50px'} height={"58px"} alt="" />
                <i onClick={() => sidebarEffacts()} ref={sidebarIcon} className='fa-solid fa-bars fa-2x pointer'></i>
                <div className="d-flex justify-content-center flex-column">
                    <i className="fa-solid fa-globe py-2"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                </div>
            </div>
        </nav>


        </>
    )
}
