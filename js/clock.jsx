import React, { Component } from 'react'
import '../css/clock.scss'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    // Event bind this to function otherwise it will undefined JS
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({date: new Date()})
    // console.log(this.timerID)
  }
  handleEvent (title) {
    console.log(title)
    console.log('this is:', this)
  }
  render () {
    // Save html to variable
    let button = <button onClick={this.handleEvent.bind(this, this.props.title)} >Click Me</button>

    return (
      <div className='clock'>
        <h1>{this.props.title}</h1>
        {
          this.props.title && button
        }
        <h2 className='clock-title'>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock
