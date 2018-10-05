import React, { Component } from 'react'

class Repeater extends Component {
  shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  render () {
    // Repeater
    const numbers = [1, 2, 3, 4, 5, 'Hola', 'Books']
    const listItems = this.shuffle(numbers).map((number) =>
      <li key={number.toString()}>{number}</li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }
}

export default Repeater
