import { Component } from "react";

class FirstComponent extends Component {
  constructor() {
    super();
    this.state = { isError: false }; // {counter : 0}
  }

  componentDidCatch() {
    this.setState({ isError: true });
    console.log("Something wrong happened");
  }

  render() {
    return (
      <>
        {this.state.isError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default FirstComponent;
