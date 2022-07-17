import logo from './logo.svg'
import './App.css'

import EventComponent from './Event/EventComponent'
import FirstCounterComponent from './Counter/FirstCounterComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventComponent />
        <FirstCounterComponent />
      </header>
    </div>
  )
}

export default App
