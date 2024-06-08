import { Component } from 'react';
import './style.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
  
      return (<div className='error-boundary'>
        <div className="error-502__container">
        <div className="error-502">
          <div className="error-502__text">
            <h1>Unexpected Error <b>:(</b></h1>
            <h2><p>You can go back to our <a href="/">Homepage</a>.</p></h2>
          </div>
        </div>
      </div>
      <div className="gears">
        <div className="gear one">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear two">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear three">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div></div>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;