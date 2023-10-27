import React from 'react';

// eslint-disable-next-line react/prop-types
function CounterDisplay({ count }) {
  return <p>{count}</p>;
}

// eslint-disable-next-line react/prop-types
function IncreaseButton({ increase }) {
  return (
    <>
      <button onClick={increase}> + Increase </button>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function ResetButton({ reset }) {
  return (
    <>
      <button onClick={reset}> - Reset</button>
    </>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    // Binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default CounterApp;
