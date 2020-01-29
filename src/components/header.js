import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ description, siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2
        style={{
          color: 'white',
          margin: 0,
          fontSize: '16px'
        }}
      >
        {description}
      </h2>
    </div>
  </header>
);

Header.propTypes = {
  description: PropTypes.string,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  description: '',
  siteTitle: ``
};

export default Header;
