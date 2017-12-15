import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchList from './containers/BatchList'
import SignUp from './containers/SignUp'

import {
  SignIn,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchList} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
