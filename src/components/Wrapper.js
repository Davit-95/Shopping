import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Wrapper extends Component {
  render() {
    return (
      <>
        <Header headerImage={this.props.headerImage} />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </>
    );
  }
}

export default Wrapper;
