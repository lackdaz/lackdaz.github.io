import React from 'react';
// Intro
import Intro from './components/docs/pages/intro/Intro';
import About from './components/docs/pages/intro/About';
import HelloWorld from './components/docs/pages/intro/HelloWorld';
// Examples
import Project1 from './components/docs/pages/examples/Project1';
import Project2 from './components/docs/pages/examples/Project2';
import Project3 from './components/docs/pages/examples/Project3';
import Project4 from './components/docs/pages/examples/Project4';

// API Referece
import Skills from './components/docs/pages/reference/Skills';
// Others
import Contribute from './components/docs/pages/others/Contribute';
import Github from './components/docs/pages/others/Github';



const menu = {
  title: 'Hello! I\'m David',
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
          href: '/intro',
          title: 'Introduction',
          description: '"What I do not create, I do not yet understand" - Richard Feynman',
          component: <Intro />,
        },
        {
          href: '/about',
          title: 'My Story',
          description: '"What I do not create, I do not yet understand" - Richard Feynman',
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
          title: 'My Chops',
          description: 'I got good at...',
          component: <Skills />,
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
