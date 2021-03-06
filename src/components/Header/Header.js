import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logoImg.png';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from "../../App";
import { initializeLoginFramework } from "../Pages/Login/loginManager";



const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <nav style={{ height: "80px" }} className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top" : "slide out show navbar navbar-expand-sm navbar-dark py-4 fixed-top navColor"}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img style={{ height: "80px", marginLeft: "-20rem" }} src={Logo} alt="" /></Link>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary" style={{ backgroundColor: "red" }} to="/login">  {loggedInUser?.email
                                ? loggedInUser.name ||
                                loggedInUser.displayName ||
                                loggedInUser.email
                                : "Login"}</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Header;