import { useState } from 'react'
import Generate from './Generate'
import Result from './Result'
import Length from './Length'
import './App.css'

console.clear()

export default function App() {
  
  const [length, setLength] = useState(12)
  const [password, setPassword] = useState('')
  
  const handleLengthChange = (length: number) => {
    setLength(length)
    return length
  }

  const handleGenerate = (settings: {upperCase: boolean, lowerCase: boolean, numbers: boolean, specialChars: boolean}) => {
    
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*'
    let generatedPassword = ''

    for (let i = 0; i < length; i++) {
      let charSet = ''
      if (settings.lowerCase) {
        charSet += characters
      }

      if (settings.upperCase) {
        charSet += characters.toUpperCase()
      }

      if (settings.numbers) {
        charSet += numbers
      }

      if (settings.specialChars) {
        charSet += specialChars
      }
      
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length)) 
    }
    setPassword(generatedPassword)
  }
  
  return (
    <main>
      <Result password={password} />
      <Generate onGenerate= {handleGenerate} length={length}/>
      <Length onChange={handleLengthChange}/>
    </main>
  )
}