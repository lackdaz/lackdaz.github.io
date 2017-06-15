import React from 'react';

require('./Example.css')

const Example2 = () => (
  <div className="docs-example-2">
    <div className='resized'>
      <a href='https://postalcsbot.herokuapp.com/'>
        <img src='https://media.giphy.com/media/14kle7Gf1QzhwQ/giphy.gif' />
      </a>
    </div>
    <p>
      As a fan of home automation, I developed an IOT-enabled RFID lock (with backend encryption) with node.js that could be a practical solution for not-at-home package deliveries. I find that last-mile fulfilment companies tend to do my taobao parcel dropoffs during the day at inconvenient times, and at very short notice. With POP delivery boxes proliferating the around the island, the hardware geek in me thought to myself -- why not allow the home owner to remotely allow package receipt or deposit in a secure location, like a hardware-hacked IKEA shoe cabinet?
    </p>
    <p>
      Thingies comes with a dashboard (bootstrap) and a MongoDB Database to log and verify access via RFID. It was made with entirely open-source software and hardware within a week. Find out more at my github!
    </p>
    <p className="git-center">See it in action <a href='https://thingies.herokuapp.com/'><strong><u>here</u></strong></a> or check out the <a href='https://github.com/lackdaz/wdi-project-2'><strong><u>codes</u></strong></a></p>
  </div>
);

export default Example2;
