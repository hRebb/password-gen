import './App.css'


export default function Length() {
  return (
    <div className='length_slide'
      data-min="4"
      data-max="20"
    >
      <div className='length_title' data-length="0">
        Length :
      </div>
      <input
        id='slider'
        type="range"
        min="4"
        max="20"
        value="16" />
    </div>
  )
}