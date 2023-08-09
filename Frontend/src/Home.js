import React, { useState, useEffect } from 'react';

const Home = () => {
  const fullMsg = "Welcome to my website";
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);  // New state to track typing completion

  useEffect(() => {
    const baseTypeInterval = 50; 
    const getRandomDelay = () => Math.random() * 150 + 30;

    if (index < fullMsg.length) {
      const typingTimer = setTimeout(() => {
        setMessage(prevMessage => prevMessage + fullMsg[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, baseTypeInterval + getRandomDelay());

      return () => clearTimeout(typingTimer);
    } else {
      setTypingComplete(true);  // Once typing is done, set the state to true

      // Only start the blinking effect when typing is complete
      const blinkingTimer = typingComplete && setInterval(() => {
        setCursorVisible(prevVisibility => !prevVisibility);
      }, 500);

      return () => clearInterval(blinkingTimer);
    }
  }, [index, fullMsg, isCursorVisible, typingComplete]);

  const handleClick = () => {
    setMessage("");
    setIndex(0);
    setTypingComplete(false);  // Reset the typing completion state when replaying
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', cursor: 'pointer' }} onClick={handleClick}>
      <h1 style={{ fontFamily: 'monospace' }}>{message}<span style={{ opacity: isCursorVisible ? 1 : 0 }}>_</span></h1>
    </div>
  );
};

export default Home;
