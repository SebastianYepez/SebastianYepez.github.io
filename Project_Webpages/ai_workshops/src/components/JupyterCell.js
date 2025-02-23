import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";  // Load Python syntax support
import "../styles/jupyter.css"; // Custom styles for the cell

const JupyterCell = ({ code, output }) => {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightElement(codeRef.current);
    }, [code]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error("Copy failed:", err));
    };

    return (
        <div className="jupyter-cell">
            {/* Input Area with Prism.js Highlighting */}
            <div className="jupyter-input">
                <span className="jupyter-label">In [ ]:</span>
                <pre className="jupyter-code">
                    <code ref={codeRef} className="language-python">
                        {code}
                    </code>
                </pre>

                {/* Bottom Bar with "Python" Label and Copy Button */}
                <div className="jupyter-footer">
                    <span className="jupyter-language">Python</span>
                    <button className="jupyter-copy-button" onClick={copyToClipboard}>
                        {copied ? "✔ Copied!" : "📋 Copy"}
                    </button>
                </div>
            </div>

            {/* Output Area (Optional) */}
            {output && (
                <div className="jupyter-output">
                    <span className="jupyter-label">Out [ ]:</span>
                    <pre className="jupyter-output-content">{`${output}`}</pre>
                </div>
            )}
        </div>
    );
};

export default JupyterCell;
