import React from "react";
import WsCard from "../components/WS_Card";
import workshops from "../data/WS_info";

const Workshops = () => {
    return (
        <div className="container mt-4 workshop-container">
            <h1 className="text-center">All Workshops</h1>
            <p className="text-center mb-4" style={{ fontSize: "18px" }}>Workshops I developed for UNLV's AI & Data Science Club.
                They also serve as Tutorials for anyone interested in learning these subjects on their own time.
            </p>
            <div className="row">
                {workshops.map((workshop) => (
                    <WsCard key={workshop.id} {...workshop} />
                ))}
            </div>
        </div >
    );
};

export default Workshops;