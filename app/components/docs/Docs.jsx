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
import TourProject2 from '../../components/redirect/TourProject2'
import TourProject3 from '../../components/redirect/TourProject3'
import TourProject4 from '../../components/redirect/TourProject4'

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
                botDelay={500}
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
                      { value: 'yes', label: 'Ramble on', trigger: 'tour-causes-1' },
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
                    message: 'I teach beginners open-source hardware for free',
                    trigger: 'tour-causes-4'
                  },
                  {
                    id: 'tour-causes-4',
                    message: 'and I\'ll do anything to keep a great cause going',
                    trigger: 'tour-causes-last'
                  },
                  {
                    id: 'tour-causes-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-causes-ans'
                  },
                  {
                    id: 'tour-causes-ans',
                    options: [
                      { value: 'yes', label: 'Wow, sure!', trigger: 'tour-project2-1' },
                      { value: 'no', label: 'Stop', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'tour-project2-1',
                    component: <TourProject2 />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-project2-2'
                  },
                  {
                    id: 'tour-project2-2',
                    message: 'Alright, I made a web-controlled RFID lock, that\'s basically it',
                    trigger: 'tour-project2-3'
                  },
                  {
                    id: 'tour-project2-3',
                    message: 'Well the great thing is that you could create users, save their access codes and authorize them for use. Fancy',
                    trigger: 'tour-project2-4'
                  },
                  {
                    id: 'tour-project2-4',
                    message: 'It uses a MVC model with nodejs, express and a MongoDB database backend',
                    trigger: 'tour-project2-5'
                  },
                  {
                    id: 'tour-project2-5',
                    message: 'The hardware uses an esp8266 microcontroller and a MFRC-422 card reader. All open-source!',
                    trigger: 'tour-project2-last'
                  },
                  {
                    id: 'tour-project2-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-project2-ans'
                  },
                  {
                    id: 'tour-project2-ans',
                    options: [
                      { value: 'yes', label: 'Wow, sure!', trigger: 'tour-project3-1' },
                      { value: 'no', label: 'Stop', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'tour-project3-1',
                    component: <TourProject3 />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-project3-2'
                  },
                  {
                    id: 'tour-project3-2',
                    message: 'For this project, I tried to recreate the Uber Eats driver geolocating service',
                    trigger: 'tour-project3-3'
                  },
                  {
                    id: 'tour-project3-3',
                    message: 'I hooked up some geeky hardware to track GPS coordinates',
                    trigger: 'tour-project3-4'
                  },
                  {
                    id: 'tour-project3-4',
                    message: 'and used Google API to calculate time/distance to destination',
                    trigger: 'tour-project3-5'
                  },
                  {
                    id: 'tour-project3-5',
                    message: 'and alert delivery arrival',
                    trigger: 'tour-project3-6'
                  },
                  {
                    id: 'tour-project3-6',
                    message: 'It could also track temperature and humidity and alert if the food was getting cold or soggy',
                    trigger: 'tour-project3-last'
                  },
                  {
                    id: 'tour-project3-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-project3-ans'
                  },
                  {
                    id: 'tour-project3-ans',
                    options: [
                      { value: 'yes', label: 'Wow, sure!', trigger: 'tour-project4-1' },
                      { value: 'no', label: 'Stop', trigger: 'menu' },
                    ],
                  },
                  {
                    id: 'tour-project4-1',
                    component: <TourProject4 />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-project4-2'
                  },
                  {
                    id: 'tour-project4-2',
                    message: 'For my capstone, we went big and wanted to do chatbot integration with sentiment analysis',
                    trigger: 'tour-project4-3'
                  },
                  {
                    id: 'tour-project4-3',
                    message: 'Psst, it originally started with twitter analysis but their API is limited to real-time',
                    trigger: 'tour-project4-4'
                  },
                  {
                    id: 'tour-project4-4',
                    message: 'Anyways, we found THIS, deployed to a website and spent the rest of time trying to figure out how it works -- under the hood',
                    trigger: 'tour-project4-5'
                  },
                  {
                    id: 'tour-project4-5',
                    message: 'With a few tweaks, that\'s how I enslaved proto-seth to this webpage to serve as my spokesbot!',
                    trigger: 'tour-project4-last'
                  },
                  {
                    id: 'tour-project4-last',
                    message: 'You can read more here. Tell me when you would like to know more about my coding chops',
                    trigger: 'tour-project4-ans'
                  },
                  {
                    id: 'tour-project4-ans',
                    options: [
                      { value: 'yes', label: 'Yes, please', trigger: 'tour-skills-1' },
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
