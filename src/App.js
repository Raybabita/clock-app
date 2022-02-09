import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickToggle = () => {
    this.setState(preState => {
      const {showClock} = preState
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickToggle}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
