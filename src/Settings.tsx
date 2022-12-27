import './App.css'

export default function Settings() {
  return (
    <div className="settings">
      <div className="setting">
        <input type="checkbox" id="uppercase" />
        <label htmlFor="uppercase">Uppercase</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="lowercase" />
        <label htmlFor="lowercase">Lowercase</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="number" />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="symbol" />
        <label htmlFor="symbol">Symbols</label>
      </div>
    </div>
  )
}