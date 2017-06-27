import React from 'react'

require('./Example.css')

const Example2 = () => (
  <div className='docs-example-2'>

    <div className='resized'>
      <a href='https://www.sethloh.com/'>
        <img src='https://media.giphy.com/media/Zn34A1MOEPCpO/giphy.gif' />
      </a>
    </div>
    <p>
      A less-than-pleasant customer service experience with a courier misdelivery incident spurred me and a teammate to find ways to enhance the customer service experience with the use of conversation chatbots. People project human traits onto everything - whether you like it or not. When I showcased a "Interactive-Umbrella" installation as an artist a year back, people started called it a shy jellyfish, gave it names and were simultaneously shocked, awed and curious. What I've realized then is that your users will still assign a personality to your products even if one hasn’t been explicitly designed.
    </p>
    <blockquote>
      <p>
        “A customer support bot should empathize with people, even those who might be in the wrong. Just acknowledging and validating an emotion is often enough to make customers feel understood and release negativity, whereas being defensive or argumentative only exacerbates the problem.” — Adelyn Zhou, Head of Marketing, TOPBOTS
      </p>
    </blockquote>
    <p>
      With these in mind, we set out as first-time conversation designers, using the IBM Tone Analyzer to give real-time interaction feedback and adapting an open-source react chat-engine to facilitate the customer service experience - but not without limitations.
    </p>
    <p>
      We are also happy to have contributed back to the react-simple-chatbot project with user feedback on how to introduce dynamic chat routing and chat toggling.
    </p>
    <p className="git-center">See it in action <a href='https://postalcsbot.herokuapp.com/'><strong><u>here</u></strong></a> or check out the <a href='https://github.com/lackdaz/wdi-project4'><strong><u>codes</u></strong></a></p>
  </div>
)

export default Example2
