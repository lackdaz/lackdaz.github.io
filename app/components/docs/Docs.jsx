import React from 'react'
import PropTypes from 'prop-types'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import ChatBot from '../chatbot/ChatBot'
import menu from '../../menu'

// custom chatbot components
import AboutRoute from '../../components/redirect/AboutRoute'

import TourAbout from '../../components/redirect/TourAbout'
import TourSkills from '../../components/redirect/TourSkills'
import TourCauses from '../../components/redirect/TourCauses'


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
                botAvatar={'avatar.png'}
                botDelay={1500}
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
                      { value: 'yes', label: 'Why not?', trigger: 'tour' },
                      { value: 'no', label: 'Perhaps next time', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'menu',
                    message: 'What would you like to know about me?',
                    trigger: 'menuInput'
                  },
                  {
                    id: 'menuInput',
                    options: [
                      { value: '/about', label: 'Story', trigger: 'story' },
                      { value: '/portfolio/project1', label: 'Portfolio', trigger: 'portfolio' },
                      { value: '/skills', label: 'Skills', trigger: 'skills' },
                      { value: 'contact', label: 'Contact', trigger: 'contact' },
                    ],
                  },
                  {
                    id: 'tour',
                    component: <TourAbout />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour1'
                  },
                  {
                    id: 'tour1',
                    message: 'So this is my story of how I came to be a web developer',
                    trigger: 'tour2'
                  },
                  {
                    id: 'tour2',
                    message: 'I was a geek working on some hardware...',
                    trigger: 'tour3'
                  },
                  {
                    id: 'tour3',
                    message: 'trying to get these things to connect to the web aka the Internet of Things',
                    trigger: 'tour4'
                  },
                  {
                    id: 'tour4',
                    message: 'and I realised that there was a lot more I could do with it, like...',
                    trigger: 'tour5'
                  },
                  {
                    id: 'tour5',
                    message: 'using natural language processing to give commands to my bot slaves...',
                    trigger: 'tour6'
                  },
                  {
                    id: 'tour6',
                    message: 'or using a food image recognition algorithm to identify hot dogs',
                    trigger: 'tour7'
                  },
                  {
                    id: 'tour7',
                    message: 'the possibilities were endless, so I decided to quit my dream job and sign up for the GA immersive.',
                    trigger: 'tour-about-last'
                  },
                  {
                    id: 'tour-about-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-about-ans'
                  },
                  {
                    id: 'tour-about-ans',
                    options: [
                      { value: 'yes', label: 'Go on', trigger: 'tour-causes-1' },
                      { value: 'no', label: 'Stop', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'tour-causes-1',
                    component: <TourCauses />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-causes-2'
                  },
                  {
                    id: 'tour-causes-2',
                    message: 'I\'m passionate about the open-source movement, the maker community and environmental sustainability',
                    trigger: 'tour-causes-3'
                  },
                  {
                    id: 'tour-causes-3',
                    message: 'I teach beginners open-source hardware for free and look to ',
                    trigger: 'tour-causes-4'
                  },
                  {
                    id: 'tour-causes-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-about-ans'
                  },
                  {
                    id: 'tour-about-ans',
                    options: [
                      { value: 'yes', label: 'Go on', trigger: 'tour-skills-1' },
                      { value: 'no', label: 'Stop', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'tour-skills-1',
                    component: <TourSkills />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-skills-2'
                  },
                  {
                    id: 'tour-skills-2',
                    message: 'I try to keep knives sharp',
                    trigger: 'tour-skills-3'
                  },
                  {
                    id: 'tour-skills-3',
                    message: 'Listed are my coding chops and creative skillsets',
                    trigger: 'tour-skills-4'
                  },
                  {
                    id: 'tour-skills-4',
                    message: 'I try to keep knives sharp',
                    trigger: 'end'
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
