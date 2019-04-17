import React, { Component } from 'react'

export default class HelloWorld extends Component {
  state = {
    being: 'world',
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.being}!</p>
        <button onClick={() => this.setState({ being: 'world' })}>
          World
        </button>
        <br/>
        <button onClick={() => this.setState({ being: 'friend' })}>
          Friend
        </button>
        <br />
        <button onClick={() => this.setState({ being: 'React' })}>
          React
        </button>
      </div>
    )
  }
}