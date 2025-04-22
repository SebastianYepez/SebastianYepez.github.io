import React from "react";
import { Link } from "react-router-dom";
import "../styles/workshops.css";

const WS_Card = ({ id, title, description, image, status }) => {
    return (
        <div className="col-12 mb-4">
            <div className="card d-flex flex-row align-items-center p-3">
                {/* Card Text */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* Conditionally Disable Button for "Upcoming Workshop" */}
                    {(status === "upcoming") ? (
                        <button className="btn btn-secondary" disabled>Coming Soon</button>
                    ) : (
                        <Link to={`/${id}`} className="btn btn-primary">View Workshop</Link>
                    )}
                </div>

                {/* Workshop Image on the Right */}
                <div className="workshop-image-container ms-auto">
                    <img src={image} alt={title} className="workshop-image" />
                </div>
            </div>
        </div>
    );
};

export default WS_Card;
