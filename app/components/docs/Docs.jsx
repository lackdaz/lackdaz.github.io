import React from 'react'
import PropTypes from 'prop-types'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import ChatBot from '../chatbot/ChatBot'
import menu from '../../menu'

// custom chatbot components
import AboutRoute from '../../components/redirect/AboutRoute'
import SkillsRoute from '../../components/redirect/SkillsRoute'
import CausesRoute from '../../components/redirect/CausesRoute'
import ContactRoute from '../../components/redirect/ContactRoute'

import TourAbout from '../../components/redirect/TourAbout'
import TourSkills from '../../components/redirect/TourSkills'
import TourCauses from '../../components/redirect/TourCauses'
import TourProject2 from '../../components/redirect/TourProject2'
import TourProject3 from '../../components/redirect/TourProject3'
import TourProject4 from '../../components/redirect/TourProject4'
import TourContact from '../../components/redirect/TourContact'

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
      <Sidebar
        handleLink={props.handleLink}
        float={props.opened}
      />

      <main className={`${props.opened ? 'opened' : ''}`}>
        {
          link ? (
            <div className='main-container'>
              <Header
                title={link.title}
                description={link.description}
              />
              { link.component }
              <ChatBot
                floating
                handleLink={props.handleLink}
                toggleFloating={props.toggleFloating}
                botAvatar={'avatar.png'}
                botDelay={2000}
                customDelay={100}
                opened={props.opened}
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
                                        { value: 'no', label: 'Perhaps next time', trigger: 'menu' }
                    ]
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
                                        { value: '/causes', label: 'Causes', trigger: 'causes' },
                                        { value: '/portfolio/project2', label: 'Portfolio', trigger: 'portfolio' },
                                        { value: '/skills', label: 'Skills', trigger: 'skills' },
                                        { value: '/contact', label: 'Contact', trigger: 'contact' },
                                        { value: 'end', label: 'End', trigger: 'end' }
                    ]
                  },
                  {
                    id: 'story',
                    component: <AboutRoute />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'story1'
                  },
                  {
                    id: 'story1',
                    message: 'There you go...I flip pages fast',
                    trigger: 'story2'
                  },
                  {
                    id: 'story2',
                    message: 'I\'m going to hide for a bit now',
                    trigger: 'story-about-last'
                  },
                  {
                    id: 'story-about-last',
                    message: 'Do tell me when you need my help',
                    trigger: 'story-about-ans'
                  },
                  {
                    id: 'story-about-ans',
                    options: [
                      { value: '/about', label: 'Story', trigger: 'story' },
                      { value: '/causes', label: 'Causes', trigger: 'causes' },
                      { value: '/portfolio/project2', label: 'Portfolio', trigger: 'portfolio' },
                      { value: '/skills', label: 'Skills', trigger: 'skills' },
                      { value: '/contact', label: 'Contact', trigger: 'contact' },
                      { value: 'end', label: 'End', trigger: 'end' }
                    ]
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
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
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
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
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
                    message: 'Alright, I made a web-controlled RFID lock. That\'s basically it',
                    trigger: 'tour-project2-3'
                  },
                  {
                    id: 'tour-project2-3',
                    message: 'The great thing is that you could create users, save their access codes and authorize them for use. Fancy!',
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
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
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
                    message: 'It could also track temperature and humidity, and alert if the food was getting cold or soggy',
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
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
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
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
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
                    message: 'I try to keep knives sharp, so you\'ll see what I\'m currently learning',
                    trigger: 'tour-skills-last'
                  },
                  {
                    id: 'tour-skills-last',
                    message: 'Tell me when you\'re ready to continue',
                    trigger: 'tour-skills-ans'
                  },
                  {
                    id: 'tour-skills-ans',
                    options: [
                                        { value: 'yes', label: 'Yes', trigger: 'tour-contact-1' },
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
                  },
                  {
                    id: 'tour-contact-1',
                    component: <TourContact />,
                    waitAction: true,
                    replace: true,
                    asMessage: false,
                    trigger: 'tour-contact-2'
                  },
                  {
                    id: 'tour-contact-2',
                    message: 'I try to keep knives sharp',
                    trigger: 'tour-contact-3'
                  },
                  {
                    id: 'tour-contact-3',
                    message: 'Listed are my coding chops and creative contactets',
                    trigger: 'tour-contact-4'
                  },
                  {
                    id: 'tour-contact-4',
                    message: 'I try to keep knives sharp, so you\'ll see what I\'m currently learning',
                    trigger: 'tour-feedback-last'
                  },
                  {
                    id: 'tour-feedback-last',
                    message: 'We\'ve come to the end of the tour. Please rate your experience below. My master is watching',
                    trigger: 'tour-feedback-ans'
                  },
                  {
                    id: 'tour-feedback-ans',
                    options: [
                      { value: 'awesome', label: 'Awesome!', trigger: 'tour-end' },
                      { value: 'okay', label: 'Nubbad', trigger: 'tour-end' },
                      { value: 'meh', label: 'Meh', trigger: 'tour-end' }
                    ]
                  },
                  {
                    id: 'tour-end',
                    message: 'Is there anything else I can do for you?',
                    trigger: 'tour-end-ans'
                  },
                  {
                    id: 'tour-end-ans',
                    options: [
                      { value: 'yes', label: 'Yes', trigger: 'menu' },
                      { value: 'no', label: 'No', trigger: 'end' }
                    ]
                  },
                  {
                    id: 'end',
                    message: 'Thank you so much for your time',
                    end: true
                  }

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
  handleLink: PropTypes.func.isRequired,
  toggleFloating: PropTypes.func,
  opened: PropTypes.bool
}

export default Docs
