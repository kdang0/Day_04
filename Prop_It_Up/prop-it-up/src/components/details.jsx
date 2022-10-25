import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
      </div>
    )
  }
}
