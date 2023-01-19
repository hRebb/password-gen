import React, {useState} from 'react'

interface Props {
  onGenerate: (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}, length: number) => void,
  length: number
}

const Generate: React.FC<Props> = ({ onGenerate, length }) => {
  const [upperCase, setUpperCase] = useState(true)
  const [lowerCase, setLowerCase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialChars, setSpecialChars] = useState(true)
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
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*'
    let generatedPassword = ''

    for (let i = 0; i < length; i++) {
      let charSet = lowerCase ? characters : ''

      if (upperCase) {
        charSet += characters.toUpperCase()
      }
      if (numbers) {
        charSet += numbers
      }
      if (specialChars) {
        charSet += specialChars
      }

      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    setPassword(generatedPassword)
    onGenerate({upperCase, lowerCase, numbers, specialChars}, length)
  }
  return (
    <div>
      <label>
        <input type="checkbox" name="upperCase" checked={upperCase} onChange={handleChange} />
UpperCase
      </label>
      <br />
      <label>
        <input type="checkbox" name="lowerCase" checked={lowerCase} onChange={handleChange} />
LowerCase
      </label>
      <br />
  
      <label>
        <input type="checkbox" name="numbers" checked={numbers} onChange={handleChange} />
    Numbers
      </label>
  
      <br />
  
      <label>
        <input type="checkbox" name="specialChars" checked={specialChars} onChange={handleChange} />
    Special characters
      </label>
      <br/>
      <button onClick={handleClick}>Generate</button>
  </div>
  )
}

export default Generate
