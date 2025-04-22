import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Dark theme for Terminal
import "prismjs/components/prism-bash";
import "prismjs/components/prism-powershell";
import "../styles/terminal.css"; // Terminal-specific styles

const TerminalBlock = ({ initialText, language = "bash" }) => {
    const [copied, setCopied] = useState(false);
    const codeRef = useRef(null);

    useEffect(() => {
        Prism.highlightElement(codeRef.current);
    }, [initialText, language]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(initialText)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error("Copy failed:", err));
    };

    return (
        <div className="terminal-container mt-3 mb-3">
            <div className="terminal-header">
                <span className="terminal-language">{language}</span>
                <button className="terminal-copy-button" onClick={copyToClipboard}>
                    {copied ? "✔ Copied!" : "📋 Copy"}
                </button>
            </div>

            {/* Terminal Body with Horizontal Scroll */}
            <div className="terminal-body">
                <pre className="terminal-code">
                    <code ref={codeRef} className={`language-${language}`}>
                        {initialText}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default TerminalBlock;
