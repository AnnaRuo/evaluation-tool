import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './containers/BatchesContainer'

import {
  SignIn,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/batches" component={BatchesContainer} />
      </div>
    )
  }
}
