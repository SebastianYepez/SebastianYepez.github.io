import React, { useState, useRef, useEffect } from "react";
import '../styles/chatbot.css'; // Updated CSS will need to support chat-textarea
import logo from '../assets/nav/AIDataScience_Image.jpg'; // Add a logo in your project under src/assets/

function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! 👋 I'm the AI & Data Science Club Bot. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [waitingForResponse, setWaitingForResponse] = useState(false);

    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input };
        setMessages(prev => [...prev, userMessage, { sender: "bot", text: "Thinking..." }]); // Add "bot is typing"

        setInput("");

        setMessages(prev => [
            ...prev.slice(0, prev.length - 1), // Remove last (the "Thinking...")
            { sender: "bot", text: "This is just for display purposes - please download the Chatbot.zip file to run this chatbot locally!" }
        ]);
        return;
        // Just for display purposes ^^

        setWaitingForResponse(true);

        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            // Replace the "..." message with the actual response
            setMessages(prev => [
                ...prev.slice(0, prev.length - 1), // Remove last (the "...")
                { sender: "bot", text: data.response }
            ]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [
                ...prev.slice(0, prev.length - 1), // Remove last (the "...")
                { sender: "bot", text: "Oops! Something went wrong. Please be sure the Flask app is running, as well as LM Studio." }
            ]);
        } finally {
            setWaitingForResponse(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-page">
            <div className="chat-container">
                <header className="chat-header">
                    <img src={logo} alt="Chatbot Logo" className="chat-logo" />
                    <h3>AI & Data Science Chatbot</h3>
                    <img src={logo} alt="Chatbot Logo" className="chat-logo" />
                </header>

                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <div className="message-text">{msg.text}</div>
                        </div>
                    ))}
                </div>

                <div className="input-area">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="chat-textarea"
                        rows={1}
                        disabled={waitingForResponse} // Optionally disable input while waiting
                    />
                    <button onClick={handleSendMessage} className="send-button" disabled={waitingForResponse}>
                        {waitingForResponse ? "Waiting..." : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
