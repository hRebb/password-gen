import './App.css'
import Settings from './Settings'
import Generate from './Generate'
import Result from './Result'
import Length from './Length'

console.clear()

export default function App() {
  return (
    <main>
      <Result />
      <Settings />
      <Length />
      <Generate />
    </main>
  )
}