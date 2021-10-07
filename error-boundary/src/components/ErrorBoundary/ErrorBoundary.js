import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { haveError: false };
  }
  componentDidCatch() {
    this.setState({ haveError: true });
  }
  render() {
    if (this.state.haveError) {
      return <p>Something Went Wrong :))))</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
