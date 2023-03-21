// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onCount = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(oldState => ({count: oldState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="count-card">
          <h1 className="count">Count {count}</h1>
          <p className="even-odd">Count is {text}</p>
          <button type="button" className="btn" onClick={this.onCount}>
            Increment
          </button>
          <p className="text">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
