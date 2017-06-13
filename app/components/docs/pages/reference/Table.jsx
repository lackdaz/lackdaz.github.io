import React from 'react';

require('./Skills.css');

const properties = [
  {
    name: 'title',
    type: 'PropTypes.string',
    defaultValue: '',
    description: 'The title content to display',
  },
  {
    name: 'description',
    type: 'PropTypes.string',
    defaultValue: '',
    description: 'The description content to display',
  },
];

const Skills = () => (
  <div className="docs-component-1">
    <h3>Properties</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          properties.map((prop) => {
            const { name, type, defaultValue, description } = prop;
            return (
              <tr key={prop.name}>
                <td className="blue-td">{name}</td>
                <td className="red-td">{type}</td>
                <td>{defaultValue}</td>
                <td>{description}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  </div>
);

export default Skills;
