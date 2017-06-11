import React from 'react';
// Intro
import Installation from './components/docs/pages/intro/Installation';
import HelloWorld from './components/docs/pages/intro/HelloWorld';
// Examples
import Example1 from './components/docs/pages/examples/Example1';
import Example2 from './components/docs/pages/examples/Example2';
// API Referece
import Component1 from './components/docs/pages/reference/Component1';
// Others
import Contribute from './components/docs/pages/others/Contribute';
import Github from './components/docs/pages/others/Github';

const menu = {
  title: 'Hi! I\'m Seth',
  description: 'My Portfolio',
  homeLink: '/',
  docsLink: '/about',
  github: {
    user: 'lackdaz',
    repository: 'lackdaz.github.io',
  },
  sections: [
    {
      title: 'About Me',
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/about',
          title: 'Installation',
          component: <Installation />,
        },
        {
          href: '/docs/hello-world',
          title: 'Hello World',
          component: <HelloWorld />,
        },
      ],
    },
    {
      title: 'Examples',
      icon: 'fa fa-code',
      links: [
        {
          href: '/docs/example1',
          title: 'Example 1',
          component: <Example1 />,
        },
        {
          href: '/docs/example2',
          title: 'Example 2',
          component: <Example2 />,
        },
      ],
    },
    {
      title: 'API Reference',
      icon: 'fa fa-cogs',
      links: [
        {
          href: '/docs/component1',
          title: 'Component 1',
          description: 'Description of component 1',
          component: <Component1 />,
        },
      ],
    },
    {
      title: 'Others',
      icon: 'fa fa-th',
      links: [
        {
          href: '/docs/contribute',
          title: 'How to Contribute',
          component: <Contribute />,
        },
        {
          href: '/docs/github',
          title: 'Github Page',
          component: <Github />,
        },
      ],
    },
  ],
};

export default menu;
