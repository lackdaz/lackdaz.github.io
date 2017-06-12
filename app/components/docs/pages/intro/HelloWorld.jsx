import React from 'react';

const helloWorldCode =
`import React from 'react';
// Intro pages
import Installation from './components/docs/pages/intro/Installation';
import HelloWorld from './components/docs/pages/intro/HelloWorld';

const menu = {
  title: 'REACT SPA Boilerplate',
  description: 'A React SPA boilerplate for open source projects',
  homeLink: '/',
  docsLink: '/docs/installation',
  github: {
    user: 'lucasbassetti',
    repository: 'react-spa-boilerplate',
  },
  sections: [
    {
      title: 'Intro',
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/docs/installation',
          title: 'Installation',
          component: <Installation/>,
        },
        {
          href: '/docs/hello-world',
          title: 'Hello World',
          component: <HelloWorld/>,
        },
      ],
    },
    ...
  ],
};

export default menu;
`;

const HelloWorld = () => (
  <div className='docs-installation'>
    <p>
      Over the years, both work and leisure has brought me on many overseas adventures. I've backpacked across Central and Eastern Europe on a number of occasions, worked in Laos, stayed for an extended period of time in Utrecht. During a week-long flight delay while on a work trip to China, I programmed a POS / SOA automation script with VBA.

      After meeting my partner Cleavan, we celebrated our graduation with a road trip from D.C. to Key West (2,414 miles round-trip) and I now spend my December breaks visiting the folks in Oregon, USA.

      After leaving my last job,
    </p>
  </div>
);

export default HelloWorld;
