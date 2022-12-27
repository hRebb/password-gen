import './App.css'

export default function Settings() {
  return (
    <div className="settings">
      <span className="settings__title field-title">settings</span>
      <div className="setting">
        <input type="checkbox" id="uppercase" checked />
        <label htmlFor="uppercase">Uppercase</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="lowercase" checked />
        <label htmlFor="lowercase">Lowercase</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="number" checked />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className="setting">
        <input type="checkbox" id="symbol" />
        <label htmlFor="symbol">Symbols</label>
      </div>
    </div>
  )
}