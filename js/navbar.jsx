import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clock from './clock'
import Login from './login'
import Reservation from './reservation'
import Repeater from './repeater'

const navigation = () => (
  <Router>
    <div>
      <nav class='navbar navbar-expand-sm navbar-dark bg-dark'>
        <Link class='navbar-brand' to='/'>Reacting Little Bit</Link>
        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample03' aria-controls='navbarsExample03' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon' />
        </button>

        <div class='collapse navbar-collapse' id='navbarsExample03'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <Link class='nav-link' to='/clock'>Clock</Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/reservation'>Reservation</Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/repeater'>Repeater</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <Route exact path='/' component={Login} />
        <Route path='/clock' render={(props) => <Clock title='This is a real-time clock app.' />} />
        <Route path='/reservation' component={Reservation} />
        <Route path='/repeater' component={Repeater} />
      </div>
    </div>
  </Router>
)

export default navigation
