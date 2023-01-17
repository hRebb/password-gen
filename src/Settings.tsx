import React, {useState} from 'react'

interface Props {
  onChange: (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}) => boolean
}

const Settings: React.FC<Props> = ({ onChange }) => {
  const [upperCase, setUpperCase] = useState(true)
  const [lowerCase, setLowerCase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialChars, setSpecialChars] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target= event.target

    if(target.name === "upperCase") {
      setUpperCase(target.checked)
    }

    if(target.name === "lowerCase") {
      setLowerCase(target.checked)
    }

    if(target.name === "numbers") {
      setNumbers(target.checked)
    }

    if (target.name === "specialChars") {
      setSpecialChars(target.checked)
    }
  }

  return (
    <div>
      <label>
        <input type="checkbox" name="upperCase" checked={upperCase} onChange={handleChange} />
        Upper case
      </label>
      <br />
      <label>
        <input type="checkbox" name="lowerCase" checked={lowerCase} onChange={handleChange} />
        Lower case
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
    </div>
  )
}

export default Settings;