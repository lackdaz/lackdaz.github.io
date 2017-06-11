import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../menu';

require('./Home.css');

const Home = (props) => {
  const { title, description, docsLink, github } = menu;
  const githubUrl = `https://ghbtns.com/github-btn.html?user=${github.user}&repo=${github.repository}`;
  return (
    <div className="home">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="buttons">
        <iframe
          src={`${githubUrl}&type=star&count=true&size=large`}
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />
        <iframe
          src={`${githubUrl}&type=fork&count=true&size=large`}
          frameBorder="0"
          scrolling="0"
          width="158px"
          height="30px"
        />
      </div>
      <p className="documentation">
        <a
          className="docs-button"
          onClick={() => props.handleLink(docsLink)}
        >
          <i className="fa fa-book" />
          Let me give you a tour
        </a>
      </p>
    </div>
  );
};

Home.propTypes = {
  handleLink: PropTypes.func.isRequired,
};

export default Home;
