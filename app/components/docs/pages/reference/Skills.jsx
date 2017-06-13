import React from 'react'

require('./Skills.css')

const devSkills = [

  {
    name: 'express.js',
    type: 'PropTypes.string',
    icon: 'nodejs-plain',
    defaultValue: '',
    description: ''
  },
  {
    name: 'node.js',
    type: 'PropTypes.string',
    icon: 'express-original',
    defaultValue: '',
    description: ''
  },
//   {
//     name: 'git',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-git',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'heroku',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-heroku',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'javascript',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-javascript',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'python',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-python',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'ruby',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-ruby',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'ruby on rails',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-rails',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'jQuery',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-jquery',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'mongoDB',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-mongo',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'postgreSQL',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-postgres',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'postgreSQL',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-postgres',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'materialize',
//     type: 'PropTypes.string',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'bootstrap',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-bootstrap',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'socket.io',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-socketio',
//     defaultValue: '',
//     description: ''
//   },
//   {
//     name: 'sass',
//     type: 'PropTypes.string',
//     icon: 'icon-tech-sass',
//     defaultValue: '',
//     description: ''
//   }
// ]
//
// const properties = [
//   {
//     name: 'title',
//     type: 'PropTypes.string',
//     defaultValue: '',
//     description: 'The title content to display'
//   },
//   {
//     name: 'description',
//     type: 'PropTypes.string',
//     defaultValue: '',
//     description: 'The description content to display'
//   }
]

const Skills = () => (
  <div className='docs-component-1'>
    <h3>My Coding Chops</h3>
    <ul className='horizontal-list'>
      {
        devSkills.map((prop) => {
          const { name, type, icon, defaultValue, description } = prop
          return (
            <li key={prop.name}>
              <div>
                <i className={icon}></i>
                <h3>{name}</h3>
              </div>
            </li>
          )
        })
      }
    </ul>

  </div>
)

export default Skills
