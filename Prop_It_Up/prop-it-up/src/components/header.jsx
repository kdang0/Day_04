import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        </div>
    );
  }
}
