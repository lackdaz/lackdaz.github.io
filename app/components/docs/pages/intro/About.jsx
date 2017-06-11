import React from 'react';

const installationCode =
`git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
`;

const Installation = () => (
  <div className="docs-installation">
    <p>Run the following commands in your terminal</p>
    <pre>
      <code className="bash">
        { installationCode }
      </code>
    </pre>
  </div>
);

export default Installation;
