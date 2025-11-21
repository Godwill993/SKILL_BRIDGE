import React, { useState, useEffect } from "react";
import.meta.env

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Inject CSS once when component loads
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .chatbot-button {
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: #0a1f44;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: 0.3s ease-in-out;
        z-index: 9999;
      }

      .chatbot-button:hover {
        background: #0a1f44;
      }

      .chatbot-window {
        position: fixed;
        bottom: 100px;
        right: 25px;
        width: 320px;
        height: 420px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 9998;
        animation: fadeIn 0.25s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .chat-header {
        background: #0a1f44;
        color: white;
        padding: 12px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
      }

      .chat-body {
        flex: 1;
        padding: 12px;
        overflow-y: auto;
        background: #f1f1f1;
      }

      .message {
        margin-bottom: 12px;
        max-width: 75%;
        padding: 10px;
        border-radius: 10px;
      }

      .user-message {
        background: #0a1f44;
        color: white;
        margin-left: auto;
        border-bottom-right-radius: 2px;
      }

      .bot-message {
        background: white;
        color: black;
        margin-right: auto;
        border-bottom-left-radius: 2px;
      }

      .chat-input-area {
        display: flex;
        padding: 10px;
        background: white;
        border-top: 1px solid #ddd;
      }

      .chat-input-area input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-right: 8px;
      }

      .chat-input-area button {
        background: #0a1f44;
        color: white;
        border: none;
        padding: 10px 14px;
        border-radius: 6px;
        cursor: pointer;
      }

      .chat-input-area button:hover {
        background: #0a1f44;
      }
    `;
    document.head.appendChild(style);
  }, []);

 

    const apiKey = import.meta.env.VITE_API_KEY;


  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: input }
          ],
        }),
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "No response";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply }
      ]);
    } catch (err) {
         console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Could not connect to server." }
      ]);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chat-header">Chatbot Assistant</div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
