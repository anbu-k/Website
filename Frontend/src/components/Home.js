import React, { useState, useEffect } from "react";

const Home = () => {
  const fullMsg = "Welcome to my website";
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const baseTypeInterval = 50;
    const getRandomDelay = () => Math.random() * 150 + 30;

    if (index < fullMsg.length) {
      const typingTimer = setTimeout(() => {
        setMessage((prevMessage) => prevMessage + fullMsg[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, baseTypeInterval + getRandomDelay());

      return () => clearTimeout(typingTimer);
    } else {
      setTypingComplete(true);
    }
  }, [index, fullMsg]);

  useEffect(() => {
    if (typingComplete) {
      const blinkingTimer = setInterval(() => {
        setCursorVisible((prevVisibility) => !prevVisibility);
      }, 500);

      return () => clearInterval(blinkingTimer);
    } else {
      setCursorVisible(true);
    }
  }, [typingComplete]);

  const handleClick = () => {
    setMessage("");
    setIndex(0);
    setTypingComplete(false);
  };

  return (
    <div
      style={{ padding: "20px", textAlign: "center", cursor: "pointer" }}
      onClick={handleClick}
    >
      <h1 style={{ fontFamily: "monospace", letterSpacing: "3px", textTransform: "" }}>
        <span
          style={{ 
            color: isHovered ? "cyan" : "white", 
            textShadow: '0 0 5px rgba(0, 255, 255, 0.9)', // Add a glow effect 
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {message}
        </span>
        <span style={{ opacity: isCursorVisible ? 1 : 0 }}>_</span>
      </h1>
    </div>
  );
};

export default Home;
