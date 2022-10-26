import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "age" : this.props.age
        };
    }
    addAge = () => {
        this.setState({"age" : this.state.age + 1});
    }
  render() {
    return (
      <div>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick= {this.addAge}className="read-the-docs">Birthday button for {this.props.firstName} {this.props.lastName} </button>
      </div>
    )
  }
}
