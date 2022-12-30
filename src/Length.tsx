import React from 'react'
import { useState } from 'react'
import './App.css'


const Length: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <>
      <input
        type="range"
        min={5}
        max={20}
        step={1}
        value={value}
        onChange={(event) => {
          setValue(parseInt(event.target.value));
        }}
      />
      <p>Value: {value}</p>
    </>
  );
};

export default Length;




