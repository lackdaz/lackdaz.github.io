import React from 'react'

const installationCode =
`git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
`

const About = () => (
  <div className='docs-installation'>
    <blockquote>
      <p>
        "What I do not create, I do not yet understand" <br></br>
        - Richard Feynman
      </p>
    </blockquote>
    <p>
      My name is Seth Loh Wei Chen and I’m a full-stack web developer graduate from the General Assembly Web Development Immersive. I grew up in Singapore and graduated with a B.Soc.Sci.(Hons) in Economics from the National University of Singapore (NUS) and had worked previous stints as a data analyst, product development and logistics.
    </p>
    <p>
      Ultimately, it was a fateful decision to take up a role as the community manager in a local makerspace where I had made many friends from the ever-supportive tech community that has set me on this path to pursuing tech. In this role, I was a hybrid mix of community influencer, technologist, artist and innovator.
    </p>
    <p>
      It was during this time that I founded the Citizen Makers, a community-driven arts collective running in OMG and am responsible for numerous strategic partnerships between maker communities and collaborative build projects (You probably saw us in 2016 at... *takes a long deep breath* Singapore Design Week, Maker Faire, SINGAPASAR, Singapore Night Festival, Lifelong Learning Festival, Light to Night Festival)
    </p>
    <p>
      As the manager of a makerspace, I became attuned to modern fabrication tools like 3D printers, CNC and laser cutting (some of these I now own) and their maintenance (I've changed 40,000V step-up power supplies - <i>multiple</i> times). It was also during this time as well that I picked up traditional craftsmen trades like woodworking, leatherworking and innovated on arguably <i>useful</i> inventions like a "Motion-sensing Pet Robot", "A 3-axis Spinning LED Light Ball" and a "$10 EMP jammer". It was what many folks would call a "dream job".
    </p>
    <p>
      But alas, as I traipsed from the world of hardware into the Internet of Things (IoT), ostensibly to create useful applications of the technology - There were bits of code so deeply profound that it troubled me for nights on end and lured me deeper into this bottomless dimension. I took the plunge, left my dream job and signed up for the GA Web Immersive in the hopes of understanding the tech stacks behind these little bits of hardware. So here I am!
    </p>
    <p>
      Over the years, both work and leisure has brought me on many overseas adventures. I've backpacked across Central and Eastern Europe and worked among locals in Laos. I have an affinity for new cultures, and... delayed baggage - travel insurance beware! During a week-long flight delay while on a work trip to China, I programmed a POS / SOA automation script with VBA to automate my sales and accounting processes and haven't looked back ever since.
    </p>
    <p>
      After meeting my partner Cleavan, we celebrated our graduation with a road trip from D.C. to Key West (a 2,414-mile round-trip) and I now spend my December breaks visiting her folks in Oregon, USA.
    </p>
    <p>
      I have no pets but a 177 year old sourdough starter.
    </p>
  </div>
)

export default About
