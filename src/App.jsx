import { useState } from 'react'

import InputBar from "./components/InputBar.jsx"

import './App.css'

function App() {

  return (
    <>
      <h1>Todo Application</h1>
      <InputBar />
      <button>Reset</button>

    </>
  )
}

export default App
