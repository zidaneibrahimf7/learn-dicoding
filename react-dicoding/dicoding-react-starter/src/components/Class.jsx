import React from 'react';

// Class Components

class Components extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Components Created!');
    this.state = {
      count: 0
    };
  }
  render() {
    // return <p> Hello, class component! </p>;
    return (
      // <p>Hello, {this.props.name}</p>
      <p>{this.state.count}</p>
    );
  }
}

export default Components;
