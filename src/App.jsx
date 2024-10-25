import { useState } from 'react'
import './App.css'
import backgrounJumbotrone_1 from './assets/backgrounJumbotrone_1.jpg'
import backgrounJumbotrone_2 from './assets/backgrounJumbotrone_2.jpg'
import backgrounJumbotrone_3 from './assets/backgrounJumbotrone_3.jpg'


function App() {
  const [count, setCount] = useState(1)
  const images = [backgrounJumbotrone_1, backgrounJumbotrone_2, backgrounJumbotrone_3]
  const next = () => {
    setCount(count + 1)
    if (count === 2) {
      setCount(0)
    }
  }

  const prev = () => {
    setCount(count - 1)
    if (count === 0) {
      setCount(2)
    }
  }

  return (
    <>
      <div className='container'>
        <img src={images[count]} className='rounded-lg ' alt="" />
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>

      </div>
    </>
  )
}

export default App
