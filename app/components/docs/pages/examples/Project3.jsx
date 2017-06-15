import React from 'react';

require('./Example.css')

const Example2 = () => (
  <div className='docs-example-2'>

    <div className='resized'>
      <a href='https://jaksicecream.herokuapp.com/'>
        <img src='https://media.giphy.com/media/YnRQtdNXDAiRO/giphy.gif' />
      </a>
    </div>
    <p>
      <i>
        Ice Cream Man</i> was the brainchild of a group of four members, as an e-commerce marketplace for cold food products with time and state-sensitive delivery. I was charged with the geolocating tech on a Ruby-on-Rails project with live updates to a dashboard via a combination of Mqtt, Active Jobs and Action Cables for the front-end updates. It was my first experience working with multi-threaded operations, and working on a team git.
    </p>
    <p className="git-center">See it in action <a href='https://jaksicecream.herokuapp.com/'><strong><u>here</u></strong></a> </p>
  </div>
);

export default Example2;
