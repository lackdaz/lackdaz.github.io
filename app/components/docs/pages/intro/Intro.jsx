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
      My name is Seth Loh Wei Chen and I’m a full-stack web developer graduate from the General Assembly Web Development Immersive. I grew up in Singapore and graduated with a B.Soc.Sci.(Hons) in Economics from the National University of Singapore (NUS) and had worked previous stints as a data analyst, product development and logistics.
      <br></br>
      <br></br>
      I'm a zealous reader of the New York Times, and it has served as an immense source of inspiration for this webpage. I look to showcase my work, blog, share about social causes and engage with the online and offline tech community, and reach out to collaborators, prospects or friends of the internet.
      <br></br>
      <br></br>
      As you might have probably noticed that flashing button on the bottom right by now, I've coded up a chatbot to walk you through this journey, and I've uninspiringly named him "Proto-Seth". Be nice.
    </p>
  </div>
)

export default About
