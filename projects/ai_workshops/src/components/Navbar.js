import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nav/AIDataScience_Image.jpg";
import pic from "../assets/nav/ProfilePic.jpg";
import workshops from "../data/WS_info";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="https://sebastianyepez.github.io" target="_blank" rel="noopener noreferrer" className="navbar-brand">
                    {/* Profile Picture */}
                    <div className="profile-pic-container">
                        <img src={pic} alt="Pic of Me" className="profile-pic" />
                    </div>
                    {/* Portfolio Text */}
                    <span className="portfolio-link">My Portfolio</span>
                </a>

                {/* Right-aligned items (Dropdown + Logo) */}
                <div className="d-flex ms-auto align-items-center">
                    {/* Dropdown Menu */}
                    <div className="nav-item dropdown me-4">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/workshops"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            AI & Data Science Club Workshops
                        </a>
                        <ul className="dropdown-menu">
                            {/* Link to All Workshops */}
                            <li><Link className="dropdown-item" to="/workshops">All Workshops</Link></li>
                            <li><hr className="dropdown-divider" /></li>

                            {/* Dynamically Generate Workshop Links */}
                            {workshops.map((workshop) => (
                                <li key={workshop.id}>
                                    {workshop.status === "upcoming" ? (
                                        <span className="dropdown-item disabled">{workshop.title}</span> // Disabled
                                    ) : (
                                        <Link className="dropdown-item" to={`/${workshop.id}`}>
                                            {workshop.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href="https://aiclub.cs.unlv.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Club Logo" className="navbar-logo" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;