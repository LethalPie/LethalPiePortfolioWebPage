import React, { useState, useEffect } from "react";

interface TextTypingProps {
  textToType: string;
  typeSpeed: number;
  bannerText?: string;
}

const TextTyping: React.FC<TextTypingProps> = ({
  textToType,
  typeSpeed,
  bannerText,
}) => {
  const [text, setText] = useState("");

  const pauseTimer = (pauseLimit: number) =>
    new Promise((resolve) => {
      console.log("pauseTimer called");
      let counter = 0;
      const intervalId = setInterval(() => {
        setText((prevText) => {
          if (prevText[prevText.length - 1] === "|") {
            return prevText.slice(0, -1);
          } else {
            return prevText + "|";
          }
        });
        counter++;
        if (counter === pauseLimit * 2) {
          clearInterval(intervalId);
          resolve("Interval finished");
        }
      }, 500);
    });

  const typeText = (text: string) =>
    new Promise((resolve) => {
      //TODO: Fix why i = 1 not runnning
      console.log("typeText called");
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length - 1) {
          setText((prevText) => {
            prevText = i === 0 ? "" : prevText.slice(0, -1);
            return prevText + text[i] + "|";
          });
          i++;
        } else {
          clearInterval(typeTimer);
          resolve("Interval finished");
        }
      }, typeSpeed);
    });

  const backspaceText = (backspaceLength: number) =>
    new Promise((resolve) => {
      console.log("backspaceText called");
      let i = 0;
      const backspaceTimer = setInterval(() => {
        if (i < backspaceLength - 1) {
          setText((prevText) => prevText.slice(0, -2) + "|");
          i++;
        } else {
          clearInterval(backspaceTimer);
          resolve("Interval finished");
        }
      }, typeSpeed);
    });

  const asyncFunctionHandler = async () => {
    await typeText(textToType);
    if (bannerText) {
      await pauseTimer(2);
      await backspaceText(bannerText.length);
      await pauseTimer(1);
      await typeText(bannerText);
      await pauseTimer(-1);
    } else {
      setText((prevText) => prevText.slice(0, -1));
    }
  };

  useEffect(() => {
    asyncFunctionHandler();
  }, []);

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
