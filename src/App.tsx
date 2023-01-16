import './App.css'
import { useState } from 'react'
import Settings from './Settings'
import Generate from './Generate'
import Result from './Result'
import Length from './Length'

console.clear()

export default function App() {
  const [settings, setSettings] = useState({ upperCase: true, lowerCase: true, numbers: true, specialChars: true })
  const [length, setLength] = useState(12)
  const [password, setPassword] = useState('')
  
  const handleLengthChange = (length: number) => {
    setLength(length)
    return length
  }
  
  const handleSettingsChange = (settings: { upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}) => {
    setSettings(settings)
    return true
  }
  const handleGenerate = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*'
    let generatedPassword = ''

    for (let i = 0; i < length; i++) {
      let charSet = settings.lowerCase ? characters : ''
      charSet += settings.upperCase ? characters.toUpperCase(): ''
      charSet += settings.numbers ? numbers: ''
      charSet += settings.specialChars ? specialChars: ''
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length)) 
    }
    setPassword(generatedPassword)
    return Math.random()
  }
  return (
    <main>
      <Result password={password} />
      <Settings onChange={handleSettingsChange} />
      <Generate onGenerate= {handleGenerate} settings={settings}/>
      <Length onChange={handleLengthChange}/>
    </main>
  )
}