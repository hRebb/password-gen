import './App.css'
import React, {useState} from 'react'

interface Props {
  onChange: (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}) => boolean
}

const Settings: React.FC<Props> = ({ onChange }) => {
  const [settings, setSettings] = useState({upperCase: true, lowerCase: true, numbers: true, specialChars: true})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({...settings, [event.target.name]: event.target.checked })
    onChange(settings)
  }

  return (
    <div>
      <label>
        <input type="checkbox" name="upperCase" checked={settings.upperCase} onChange={handleChange} />
        Upper case
      </label>
      <label>
        <input type="checkbox" name="lowerCase" checked={settings.lowerCase} onChange={handleChange} />
        Lower case
      </label>
      <label>
        <input type="checkbox" name="numbers" checked={settings.numbers} onChange={handleChange} />
        Numbers
      </label>
      <label>
        <input type="checkbox" name="specialChars" checked={settings.specialChars} onChange={handleChange} />
        Special characters
      </label>
    </div>
  )
}

export default Settings;