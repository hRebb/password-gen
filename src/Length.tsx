import React from 'react'
import { useState } from 'react'

interface Props {
  onChange: (lengthInput: number) => number
}

const Length: React.FC<Props> = ({ onChange }) => {
  const [lengthInput, setLengthInput] = useState(12)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLengthInput(parseInt(event.target.value))
    onChange(lengthInput)
  }

  return (
    <div>
      <p>
        Password length : {lengthInput}
      </p>
      <label>
        <input className='length' type="range" min={5} max={20} step={1} value={lengthInput} onChange={handleChange} />
      </label>
    </div>
  )
} 

export default Length;




