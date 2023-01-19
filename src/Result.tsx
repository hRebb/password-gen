import React, { useState } from "react";
import './App.css'

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
    <div className='passwordField'>
      <div className="passwordGenerated">{password}</div>
      <button className="copyclik" onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Result;
