import React from 'react'

require('./Skills.css')

const current = [
  {
    name: 'tensorFlow',
    type: 'PropTypes.string',
    icon: '',
    href: 'https://www.tensorflow.org/',
    defaultValue: '',
    description: 'an open source software library for numerical computation using data flow graphs'
  }
]

const devSkills = [
  {
    name: 'react',
    type: 'PropTypes.string',
    icon: 'devicon-react-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'css3',
    type: 'PropTypes.string',
    icon: 'devicon-css3-plain colored',
    defaultValue: '',
    href: '',
    description: ''
  },
  {
    name: 'html5',
    type: 'PropTypes.string',
    icon: 'devicon-html5-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'sass',
    type: 'PropTypes.string',
    icon: 'devicon-sass-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },

  {
    name: 'nodejs',
    type: 'PropTypes.string',
    icon: 'devicon-nodejs-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'express',
    type: 'PropTypes.string',
    icon: 'devicon-express-original colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'python',
    type: 'PropTypes.string',
    icon: 'devicon-python-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'ruby',
    type: 'PropTypes.string',
    icon: 'devicon-ruby-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'babel',
    type: 'PropTypes.string',
    icon: 'devicon-babel-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'ruby on rails',
    type: 'PropTypes.string',
    icon: 'devicon-rails-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'redis',
    type: 'PropTypes.string',
    icon: 'devicon-redis-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'jQuery',
    type: 'PropTypes.string',
    icon: 'devicon-jquery-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'mongoDB',
    type: 'PropTypes.string',
    icon: 'devicon-mongodb-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'postgreSQL',
    type: 'PropTypes.string',
    icon: 'devicon-postgresql-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'materialize',
    type: 'PropTypes.string',
    icon: 'devicon-google-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'bootstrap',
    type: 'PropTypes.string',
    icon: 'devicon-bootstrap-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'webpack',
    type: 'PropTypes.string',
    icon: 'devicon-webpack-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'heroku',
    type: 'PropTypes.string',
    icon: 'devicon-heroku-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'javascript',
    type: 'PropTypes.string',
    icon: 'devicon-javascript-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'mocha',
    type: 'PropTypes.string',
    icon: 'devicon-mocha-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const collabSkills = [
  {
    name: 'photoshop',
    type: 'PropTypes.string',
    icon: 'devicon-photoshop-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'illustrator',
    type: 'PropTypes.string',
    icon: 'devicon-illustrator-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'trello',
    type: 'PropTypes.string',
    icon: 'devicon-trello-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const designSkills = [
  {
    name: 'photoshop',
    type: 'PropTypes.string',
    icon: 'devicon-photoshop-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'illustrator',
    type: 'PropTypes.string',
    icon: 'devicon-illustrator-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'trello',
    type: 'PropTypes.string',
    icon: 'devicon-trello-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'Fusion360',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'Rhino',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'OnShape',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'Simplify3D',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: '3DSMax',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const Skills = () => (
  <div className='skills-container'>
    <div className='skills-current'>
      <h3>I'm now learning</h3>
      <ul className='horizontal-list'>
        {
          current.map((prop) => {
            const { name, type, icon, href, defaultValue, description } = prop
            return (
              <li key={prop.name}>
                <div className='blocks'>
                  <a href={href}>
                    { {icon}.length > 1 ? <i className={icon} /> : <img src={`${name}.png`} /> }
                    <div className='header'>
                      <p>{name}</p>
                    </div>
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className='skills-dev'>
      <h3>Development</h3>
      <ul className='horizontal-list'>
        {
          devSkills.map((prop) => {
            const { name, type, icon, href, defaultValue, description } = prop
            return (
              <li key={prop.name}>
                <div>
                  <a href={href}>
                    <i className={icon} />
                    <p>{name}</p>
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className='skills-design'>
      <h3>Design</h3>
      <ul className='horizontal-list'>
        {
          designSkills.map((prop) => {
            const { name, type, icon, href, defaultValue, description } = prop
            return (
              <li key={prop.name}>
                <div>
                  <i className={icon} />
                  <p>{name}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  </div>

)

export default Skills
