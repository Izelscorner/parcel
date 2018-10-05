import React, {Component} from 'react'
import { Button } from 'reactstrap'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {textBox: '', select: 'coconut'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleChange (event) {
    this.setState({textBox: event.target.value})
  }
  handleSelect (event) {
    this.setState({select: event.target.value})
  }
  handleSubmit (event) {
    console.log('A texbox was submitted: ' + this.state.textBox)
    console.log('A select was submitted: ' + this.state.select)
    event.preventDefault()
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className='text-center'>
        <div>
          <label>
            Name:
            <input type='text' value={this.state.textBox} onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <label>
            Pick your favorite flavor:
            <select value={this.state.select} onChange={this.handleSelect}>
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </label>
        </div>

        <div>
          <Button type='submit' color='danger'>Submit!</Button>
        </div>
      </form>
    )
  }
}

export default Login
