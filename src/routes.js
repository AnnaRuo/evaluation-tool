import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './containers/BatchesContainer'
import SignUp from './containers/SignUp'
import {
  SignIn,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/batches" component={BatchesContainer} />
      </div>
    )
  }
}
