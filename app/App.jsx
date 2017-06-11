import React, { Component } from 'react';
import Home from './components/home/Home';
import Docs from './components/docs/Docs';

import ChatBot from 'react-simple-chatbot';


const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
    };

    this.handleLink = this.handleLink.bind(this);
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace('#', '') });
  }

  componentDidMount() {
    $('pre code').each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    $('pre code').each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  handleLink(link) {
    window.location.hash = link;
    this.setState({ link });
  }

  render() {
    const { link } = this.state;
    console.log(link)
    // If its true, landing page will trigger

    // const isHome = link.indexOf('/docs') < 0;
    // console.log(link.indexOf('/docs'))

    const isHome = link.length <= 1;
    console.log(link.length)

    return isHome ? (
      <Home
        link={link}
        handleLink={this.handleLink}
      />
    ) : (
      <Docs
        link={link}
        handleLink={this.handleLink}
      />
    );
  }
}

export default App;
