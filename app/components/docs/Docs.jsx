import React from 'react'
import PropTypes from 'prop-types'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import ChatBot from '../chatbot/ChatBot'
import menu from '../../menu'

require('./Docs.css')

const routes = []
for (let i = 0, len = menu.sections.length; i < len; i += 1) {
  for (let j = 0, jlen = menu.sections[i].links.length; j < jlen; j += 1) {
    const link = menu.sections[i].links[j]
    routes[link.href] = link
  }
}

const Docs = (props) => {
  const link = routes[props.link]

  return (
    <div className='docs'>
      <Sidebar handleLink={props.handleLink} />
      <main>
        {
          link ? (
            <div className='main-container'>
              <Header
                title={link.title}
                description={link.description}
              />
              { link.component }
              <ChatBot
                floating={true}
                handleLink={props.handleLink}
                botAvatar={'./avatar.png'}
                steps={[
                  {
                    id: '1',
                    message: 'Hello visitor! Thank you for taking an interest in my portfolio',
                    trigger: '2'
                  },
                  {
                    id: '2',
                    message: 'Would you like me to give you a tour?',
                    trigger: '3'
                  },
                  {
                    id: '3',
                    options: [
                      { value: 'yes', label: 'Yes', trigger: 'tour' },
                      { value: 'no', label: 'No', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'menu',
                    message: 'What would you like to know about me?',
                    trigger: 'menu-next'
                  },
                  {
                    id: 'menu-next',
                    options: [
                      { value: 'About', label: 'Story', trigger: 'story' },
                      { value: 'Portfolio', label: 'Portfolio', trigger: 'portfolio' },
                      { value: 'skills', label: 'Skills', trigger: 'skills' },
                      { value: 'contact', label: 'Contact', trigger: 'contact' },
                    ],
                  },
                  {
                    id: 'end',
                    message: 'Thank you so much for your time',
                    end: true
                  },

                ]}
/>
            </div>
          ) : (
            <Header
              title='404 - Not Found'
              description='Page not found'
            />
          )
        }
      </main>
    </div>
  )
}

Docs.propTypes = {
  link: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired
}

export default Docs
