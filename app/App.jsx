import React, { Component } from 'react';
import Home from './components/home/Home';
import Docs from './components/docs/Docs';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
      opened: false,
    };

    this.handleLink = this.handleLink.bind(this);
    this.toggleFloating = this.toggleFloating.bind(this);
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
    window.scrollTo(0, 0)
  }

  handleLink(link) {
    window.location.hash = link;
    this.setState({ link });
  }

  toggleFloating({opened}) {
    this.setState({ opened });
  }

  render() {
    const { link, opened } = this.state;
    console.log(link)
    // If its true, landing page will trigger

    // const isHome = link.indexOf('/docs') < 0;
    // console.log(link.indexOf('/docs'))

    const isHome = link.length <= 1;
    // console.log(link.length)

    return isHome ? (
      <Home
        link={link}
        handleLink={this.handleLink}
      />
    ) : (
      <Docs
        link={link}
        handleLink={this.handleLink}
        toggleFloating={this.toggleFloating}
        opened={opened}
      />
    );
  }
}

export default App;
