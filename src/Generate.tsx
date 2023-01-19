import React, { useState } from 'react'

interface Props {
  onGenerate: (settings: { upperCase: boolean, lowerCase: boolean, numbers: string | boolean, specialChars: string | boolean }, length: number) => void,
  length: number
}

const Generate: React.FC<Props> = ({ onGenerate, length }) => {
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [specialChars, setSpecialChars] = useState(false)
  const [password, setPassword] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    if (target.name === "upperCase") {
      setUpperCase(target.checked)
    }
    if (target.name === "lowerCase") {
      setLowerCase(target.checked)
    }
    if (target.name === "numbers") {
      setNumbers(target.checked)
    }
    if (target.name === "specialChars") {
      setSpecialChars(target.checked)
    }
    onGenerate({ upperCase, lowerCase, numbers, specialChars }, length)
  }

  const handleClick = () => {
    let charSet = ''
    if (upperCase) {
      charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (lowerCase) {
      charSet += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (numbers) {
      charSet += '0123456789'
    }
    if (specialChars) {
      charSet += '!@#$%^&*'
    }
    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    if (charSet.length === 0) {
      setPassword("")
    } else {
      setPassword(generatedPassword)
    }
    onGenerate({ upperCase, lowerCase, numbers, specialChars }, length)
  }

  const handleReset = () => {
    setUpperCase(false);
    setLowerCase(false);
    setNumbers(false);
    setSpecialChars(false);
    setPassword('')
    onGenerate('', '')
  }
  return (
    <div className='generateField'>
      <label className='checkboxingCase'>
        <input className='checkbox' type="checkbox" name="upperCase" checked={upperCase} onChange={handleChange} />
        UpperCase
      </label>
     
      <label className='checkboxingCase'>
        <input className='checkbox' type="checkbox" name="lowerCase" checked={lowerCase} onChange={handleChange} />
        LowerCase
      </label>
     

      <label className='checkboxingCase'>
        <input className='checkbox' type="checkbox" name="numbers" checked={numbers} onChange={handleChange} />
        Numbers
      </label>

      <label className='checkboxingCase'>
        <input className='checkbox' type="checkbox" name="specialChars" checked={specialChars} onChange={handleChange} />
        Special characters
      </label>
      <button className='btnGenerate' onClick={handleClick}>Generate</button>
      <button className='btnReseting' onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Generate
