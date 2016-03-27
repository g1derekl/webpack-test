import React from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/home.scss';

import Header from "./header";

const Main = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <br />
        <span className="intro">Hello, {this.props.name}! The quick brown fox jumps over the lazy dog.</span>
      </div>
    );
  }
});

ReactDOM.render(<Main name="User" />,
  document.getElementById('body')
);
