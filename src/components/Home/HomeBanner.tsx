import React from "react";
import TextTyping from "../Common/TextTyping";

const HomeBanner: React.FC = () => {
  return (
    <h1 className="ms-4">
      <TextTyping textToType={`Hello, I'm Eliphalet`} typespeed={100} />
    </h1>
  );
};

export default HomeBanner;
