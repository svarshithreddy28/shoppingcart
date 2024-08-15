import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from "./components/InputBox"
import Shopping from './components/Shopping'
function App() {
  return(
    <div>
      <h1>Shopping Cart</h1>
      <Shopping></Shopping>
      {/* <InputBox></InputBox> */}
    </div>
  )
}

export default App
