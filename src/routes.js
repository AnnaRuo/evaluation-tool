import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  SignIn,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
  
      </div>
    )
  }
}
