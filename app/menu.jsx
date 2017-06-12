import React from 'react';
// Intro
import About from './components/docs/pages/intro/About';
import HelloWorld from './components/docs/pages/intro/HelloWorld';
// Examples
import Project1 from './components/docs/pages/examples/Project1';
import Project2 from './components/docs/pages/examples/Project2';
import Project3 from './components/docs/pages/examples/Project3';
import Project4 from './components/docs/pages/examples/Project4';

// API Referece
import Component1 from './components/docs/pages/reference/Component1';
// Others
import Contribute from './components/docs/pages/others/Contribute';
import Github from './components/docs/pages/others/Github';



const menu = {
  title: 'Hello! I\'m Seth',
  description: 'A web developer, maker and facilitator living in Singapore',
  homeLink: '/',
  docsLink: '/about',
  github: {
    user: 'lackdaz',
    repository: 'lackdaz.github.io',
  },
  sections: [
    {
      title: 'About Me',
      icon: 'fa fa-asterisk',
      links: [
        {
          href: '/about',
          title: 'My Story',
          description: 'A web developer, maker and facilitator living in Singapore',
          component: <About />,
        },
        {
          href: '/causes',
          title: 'Hello World',
          component: <HelloWorld />,
        },
      ],
    },
    {
      title: 'Portfolio',
      icon: 'fa fa-code',
      links: [
        {
          href: '/portfolio/project1',
          title: 'Save the Pangolin',
          component: <Project1 />,
        },
        {
          href: '/portfolio/project2',
          title: 'Thingies',
          component: <Project2 />,
        },
        {
          href: '/portfolio/project3',
          title: 'Food Delivery',
          component: <Project3 />,
        },
        {
          href: '/portfolio/project4',
          title: 'Sentiment Chatbot',
          component: <Project4 />,
        },
      ],
    },
    {
      title: 'Skills',
      icon: 'fa fa-rocket',
      links: [
        {
          href: '/skills',
          title: 'Coding',
          description: 'Description of component 1',
          component: <Component1 />,
        },
      ],
    },
    {
      title: 'Contact Me',
      icon: 'fa fa-envelope',
      links: [
        {
          href: '/engage',
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
