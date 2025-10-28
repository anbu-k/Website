import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";

const Home = () => {
  const fullMsg = "Welcome to my website";
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

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
    <motion.div
      className="home-container"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="home-content">
        <h1 className="home-title">
          <span className="home-text">
            {message}
          </span>
          <motion.span 
            className="home-cursor"
            animate={{ opacity: isCursorVisible ? 1 : 0 }}
          >
            _
          </motion.span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Home;
