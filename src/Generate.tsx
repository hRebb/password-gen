import React from 'react'

interface Props {
  onGenerate: (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}, length: number) => void
  settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean },
  length: number
}

const Generate: React.FC<Props> = ({ onGenerate, settings, length }) => {

  const handleClick = () => {
    onGenerate(settings, length)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Generate
      </button>
    </div>
  )
}

export default Generate
