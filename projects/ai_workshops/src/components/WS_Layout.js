import React from "react";
import "../styles/theme.css"; // Import global styles

const WS_Layout = ({ title, children }) => {
    return (
        <div className="workshop-container">
            <h2 className="workshop-title">{title}</h2>
            <div className="workshop-content">{children}</div>
        </div>
    );
};

export default WS_Layout;
