import React, { useState, useEffect } from 'react';


const Home = () => {
  const fullMsg = "Welcome to my website";
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isCursorVisible, setCursorVisible] = useState(true);


  useEffect(() => {
    const typeInterval = 100; // Duration for typing speed


    if (index < fullMsg.length) {
      const typingTimer = setInterval(() => {
        setMessage(prevMessage => prevMessage + fullMsg[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, typeInterval);


      return () => clearInterval(typingTimer);
    } else {
      // Once typing is complete, start blinking the cursor
      const blinkingTimer = setInterval(() => {
        setCursorVisible(prevVisibility => !prevVisibility);
      }, 500); // Duration for cursor blink speed


      return () => clearInterval(blinkingTimer);
    }
  }, [index, fullMsg, isCursorVisible]);


  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{message}<span style={{ opacity: isCursorVisible ? 1 : 0 }}>_</span></h1>
    </div>
  );
};

export default Home;
