import './App.css'
import React from 'react'

interface Props {
  settings: {
    upperCase: boolean,
    lowerCase: boolean,
    numbers: boolean,
    specialChars: boolean
  }
  onGenerate: (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}, length: number) => number
}

const Generate: React.FC<Props> = ({ onGenerate }) => {

  const handleClick = () => {}

  return (
    <div>
      <button onClick={handleClick}>
        Generate
      </button>
    </div>
  )
}

export default Generate