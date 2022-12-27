import './App.css'

export default function Result() {
  return (
    <div className='result'>
      <div className='result-title'>
        Generated Password
      </div>
      <div className='result-copy'>
        Click here to copy
      </div>
      <div className='result-past'>
        Copied
      </div>
      <div className='result-click' id='result-operation'>
        Generate your new password
      </div>
      <button className='btn-result' id='btn-copy'>
        <i className='copy-item'></i>
      </button>
    </div>
  )
}