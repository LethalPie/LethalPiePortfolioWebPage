import React, { useState, useEffect } from "react";

interface TextTypingProps {
  textToType: string;
  typespeed: number;
}

const TextTyping: React.FC<TextTypingProps> = ({ textToType, typespeed }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < textToType.length) {
        setText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, typespeed);

    return () => clearTimeout(timer);
  }, [currentIndex, textToType]);

  return <>{text}</>;
};

export default TextTyping;
