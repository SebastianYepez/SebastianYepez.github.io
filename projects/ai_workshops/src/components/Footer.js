import React from "react";
import "../styles/theme.css"; // Ensure styles are linked

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Sebastian Yepez - UNLV AI & Data Science Club | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;