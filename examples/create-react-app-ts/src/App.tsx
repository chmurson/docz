import React from 'react'
import { ReactComponent as ReactLogo } from './logo.svg'
import { Alert } from './components/Alert'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo" />
        <Alert kind="negative">This is some message</Alert>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
