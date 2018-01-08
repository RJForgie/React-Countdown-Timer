import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render(){
    return (
      <div className='App'>
        <div className='App-title'>Countdown to 21 December, 2018</div>
        <div>
          <div className='Clock-days'>14 Days</div>
          <div className='Clock-hours'>13 Hours</div>
          <div className='Clock-minutes'>15 Minutes</div>
          <div className='Clock-seconds'>15 Seconds</div>
        </div>
        <input placeholder='new date'/>
        <button>Submit</button>
      </div>
    )
  }
}

export default App;
