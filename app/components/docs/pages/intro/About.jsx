import React from 'react'

const installationCode =
`git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
`

const About = () => (
  <div className='docs-installation'>
    <p>
      My name is Seth Loh Wei Chen and I’m a full-stack web developer graduate from the General Assembly Web Development Immersive. I grew up in Singapore and graduated with a B.Soc.Sci.(Hons) in Economics from the National University of Singapore (NUS) and had worked previous stints as a data analyst, product development and logistics. <br>

      </br>Ultimately, it was a fateful decision to take up a role as the community manager in a local makerspace where I had made many friends from the ever-supportive tech community that has set me on this path to pursuing tech. In this role, I was a hybrid mix of community influencer, technologist, artist and innovator.

      It was during this time that I founded the Citizen Makers, a community-driven arts collective running in OMG and am responsible for numerous strategic partnerships between maker communities and collaborative build projects (You probably saw us in 2016 at...  Singapore Design Week, Maker Faire, SINGAPASAR, Singapore Night Festival, Lifelong Learning Festival, Light to Night Festival)




      Over the years we’ve had lots of adventures. We’ve been to EuroDisney, Singapore, Scotland, Oxford, Dublin, Los Angeles, Boston, London, several cities in Italy, Dubbo, Melbourne, Las Vegas, and San Francisco. We’ve hosted a lot of awesome Halloween parties. One time, we made a turducken. We went to Space Camp for Grownups. We ate at one of the world’s best restaurants. We got married in Vegas and Elvis walked me down the aisle. We had dinner with two Iron Chefs. We’ve won awards for beer and knitting. We ran the City 2 Surf three times in a row. We bought a house. We camped under the stars and hiked around Uluru (Ayers Rock). We posed naked in front of the Sydney Opera House with more than 5000 other Australians.

      Stay tuned for our next adventure…
    </p>
    <pre>
      <code className='bash'>
        { installationCode }
      </code>
    </pre>
  </div>
)

export default About
