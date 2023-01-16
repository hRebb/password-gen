import './App.css'
import React, { useState } from 'react'

interface Props {
  password: string
}

const Result: React.FC<Props> = ({ password }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
  }

  return (
    <div>
      <div>{password}</div>
      <button onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
} 

export default Result