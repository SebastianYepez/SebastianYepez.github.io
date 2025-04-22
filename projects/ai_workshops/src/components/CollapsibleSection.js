import React, { useState, useRef } from "react";
import { Button, Collapse, Card } from "react-bootstrap";
import "../styles/collapsible.css"; // Ensure styles are imported

const CollapsibleSection = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const sectionRef = useRef(null); // Create a reference

    const handleToggle = () => {
        setOpen(!open);

        // Scroll to the section when opened
        if (!open) {
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center" // Centers the section in the viewport
                });
            }, 200); // Slight delay for a smoother transition
        }
    };

    return (
        <div className="mb-3" ref={sectionRef}>
            {/* Toggle Button */}
            <Button
                variant="light"
                className="w-100 text-start collapsible-btn d-flex justify-content-between align-items-center"
                onClick={handleToggle}
                aria-controls="collapse-content"
                aria-expanded={open}
            >
                <span>{title}</span> {/* Keeps title aligned left */}
                <span>{open ? "▲" : "▼"}</span> {/* Moves arrow to right */}
            </Button>

            {/* Collapsible Content with Smooth Transition */}
            <Collapse in={open}>
                <div>
                    <Card className="collapsible-card">
                        <Card.Body>{children}</Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
};

export default CollapsibleSection;
