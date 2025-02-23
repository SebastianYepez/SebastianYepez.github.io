import React from "react";
import "../styles/workshops.css"; // Ensure this CSS file exists

const WorkshopOverview = ({ summaryPoints, resources }) => {
    return (
        <div className="workshop-overview">
            {/* Workshop Overview Section */}
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
                        <a href={`/ws_resources/${resource.file}`} download>
                            ⬇️ {resource.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkshopOverview;
