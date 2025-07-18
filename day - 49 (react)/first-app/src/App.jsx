import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/* <App /> */}

function App() {
  return <div>
    <h1>Salman</h1>
    <SecondComponent />
  </div>
}

function SecondComponent(){
  return <div>
    <h2 className="para">I will be best front end dev.</h2>
    <p>hello there my name is <br />  salman shaikh</p>
  </div>
  
}


export default App