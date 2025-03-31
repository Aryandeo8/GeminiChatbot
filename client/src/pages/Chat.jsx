import React, { useState } from "react";

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle sending messages
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response (replace with an actual API call)
    const botResponse = await fetchBotResponse(input);

    const assistantMessage = { role: "assistant", content: botResponse };
    setMessages((prev) => [...prev, assistantMessage]);

    // Clear the input field
    setInput("");
  };

  // Simulated API call function
  const fetchBotResponse = async (message) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(`Bot: I received your message - "${message}"`), 1000)
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">AI Chatbot</h1>
      </header>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};


