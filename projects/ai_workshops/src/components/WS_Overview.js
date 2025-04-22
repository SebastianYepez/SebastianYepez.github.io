import React from "react";
import "../styles/workshops.css"; // Ensure this CSS file exists
import workshops from "../data/WS_info"; // Import the refactored data

const WorkshopOverview = ({ workshopId, summaryPoints, resources }) => {
    const workshop = workshops.find((ws) => ws.id === workshopId);

    return (
        <div className="workshop-overview">
            {/* Left Section: Text Content */}
            <div className="workshop-text">
                <h2 className="overview-header">Workshop Overview</h2>
                <ul>
                    {summaryPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                {/* Workshop Resources Section */}
                <h3 className="resources-header" id="workshop-resources">Workshop Resources</h3>
                <ul>
                    {resources.map((resource, index) => (
                        <li key={index}>
                            <a
                                href={`${process.env.PUBLIC_URL}/ws_resources/${resource.file}`}
                                download
                                className="text-primary text-decoration-none"
                            >
                                ⬇️ {resource.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section: Workshop Image */}
            <div className="workshop-image-container">
                {workshop?.image ? (
                    <img src={workshop.image} alt={workshop.title} />
                ) : (
                    <p className="text-muted">No Image Available</p>
                )}
            </div>
        </div>
    );
};

export default WorkshopOverview;
