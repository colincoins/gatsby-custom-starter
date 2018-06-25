import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Layout from '../components/layout';

import '../styles/base.global.scss';

const SecondPage = (props) => (
  <Layout>
    <div>
      <h1>{props.headline}</h1>
      <p>{props.paragraph1}</p>
      <Link to={props.linkUrl}>{props.linkText}</Link>
    </div>
  </Layout>
);

SecondPage.propTypes = {
  headline: PropTypes.string,
  paragraph1: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string
};

SecondPage.defaultProps = {
  headline: 'Hi from the second page',
  paragraph1: 'Welcome to page 2',
  linkText: 'Go back to the homepage',
  linkUrl: '/'
};

export default SecondPage;
