import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import styled from 'styled-components';

const Header = ({ className }) => (
  <header className={className}>
    <h2>Inc. This Morning</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>
      Awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired  
};

const StyledHeader = styled(Header)`
  text-align: center;

  h2 {
    color: #0080ff;
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
    color: #0f52ba;
    margin-bottom: 1rem;
  }

  h1 span {
    color: #b0c4de;
  }

  p {
    color: #a9a9a9;
    font-weight: 500;
  }
`;

export default StyledHeader;
