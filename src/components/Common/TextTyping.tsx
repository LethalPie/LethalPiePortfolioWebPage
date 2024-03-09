import React, { useState, useEffect } from "react";

interface TextTypingProps {
  textToType: string;
  typespeed: number;
  disableCursor?: boolean;
}

const TextTyping: React.FC<TextTypingProps> = ({
  textToType,
  typespeed,
  disableCursor,
}) => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      if (currentIndex < textToType.length) {
        setText(
          (prevText) => prevText.slice(0, -1) + textToType[currentIndex] + "|"
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (disableCursor) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setTimeout(() => {
          if (cursorVisible) setText((prevText) => prevText.slice(0, -1));
          else setText((prevText) => prevText + "|");
          setCursorVisible((prev) => !prev);
        }, 500);
      }
    }, typespeed);

    return () => {
      clearTimeout(typeTimer);
    };
  }, [currentIndex, textToType, cursorVisible]);

  return (
    <>
      {text.split("\n").map((line: string) => (
        <>
          {line}
          <br />
        </>
      ))}
    </>
  );
};

export default TextTyping;
