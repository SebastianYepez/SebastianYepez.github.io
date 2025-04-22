import React from "react";

const GoogleSlidesEmbed = ({ embedUrl, width = "100%", height = "500px" }) => {

    // Generate the direct Google Slides URL for opening the full presentation`;

    return (
        <div className="google-slides-container">
            {/* Embedded Presentation */}
            <iframe
                src={`${embedUrl}&start=false&loop=false&delayms=3000`}
                width={width}
                height={height}
                allowFullScreen
                title="Google Slides Presentation"
            ></iframe>

            {/* Button to Open in Google Slides */}
            <div className="open-google-slides">
                <a
                    href={embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-slides-link"
                >
                    Open in New Tab
                </a>
            </div>
        </div>

    );
};

export default GoogleSlidesEmbed;
