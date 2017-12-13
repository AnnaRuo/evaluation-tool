import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class Title extends PureComponent {
  static propTypes = {
    content: propTypes.string.isRequired,
  }
  render() {
    return (
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Title
