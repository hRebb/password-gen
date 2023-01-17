import './App.css'
import React, { useState } from "react";

interface Props {
  password: string;
}

const Result: React.FC<Props> = ({ password }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        setIsCopied(true);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div>
      <div>{password}</div>
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Result;
