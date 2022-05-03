// create React class Component (rcc) executable (rec)
import React, { Component } from 'react';
// import react component (imrc)

export class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // jsx element must have one parent element
    // if not babel will throw compilation error

    return (
      <React.Fragment>
        <h1>{this.formatCount()}</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  // outside of return but inside render
  formatCount() {
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    const { count } = this.state;
    const y = <em>Zero</em>;
    return count === 0 ? y : count;
  }
}

export default Counter;
