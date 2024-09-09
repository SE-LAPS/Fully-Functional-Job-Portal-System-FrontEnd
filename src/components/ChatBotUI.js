import React, { useState } from 'react';
import '../css/ChatBotUI.css'; // Custom styles for chatbot

const ChatBotUI = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Predefined responses
  const responses = {
    "What is the weather like today?": "I don't have real-time weather data access, but you can check the weather on your local news site or a weather app!",
    "How can I reset my password?": "To reset your password, go to the login page, click on 'Forgot Password,' and follow the instructions. You’ll receive a password reset link in your email.",
    "What are your business hours?": "Our business hours are from 9:00 AM to 6:00 PM, Monday through Friday. We're closed on weekends and public holidays.",
    "Can you help me with my order status?": "Sure! Please provide your order number, and I’ll check the status for you.",
    "What services do you offer?": "We offer a range of services including web development, mobile app development, and digital marketing. Feel free to ask for more details on any of these!",
    "How can I contact customer support?": "You can reach our customer support via email at support@example.com or by calling (123) 456-7890. We're here to help!"
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { type: 'user', text: inputValue };
      setMessages([...messages, newMessage]);

      // Clear input field after sending
      setInputValue('');

      // Determine AI response based on user input
      const aiResponseText = responses[inputValue.trim()] || 'I’m not sure how to answer that. Could you please provide more details?';
      setTimeout(() => {
        const aiResponse = { type: 'ai', text: aiResponseText };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="chatbot-container">
      <button className="chatbot-close" onClick={onClose}>X</button>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBotUI;
