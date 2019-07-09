import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  padding-top: 40px;
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  font-size: 30px;
  text-transform: uppercase;

  font-family: 'History 01';
`;

const Navigation = styled.nav`
  & ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0;
    margin: 0;

    & li {
      list-style: none;

      padding: 0 40px 0 0;
      margin: 0;
    }

    & li:last-of-type {
      padding: 0;
    }
  }
`;

const Header = ({ menuLinks }) => {
  return (
    <HeaderComponent>
      <Logo>
        <Link to={'/'}>Caroline Boseley</Link>
      </Logo>
      <Navigation>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.link}
                activeStyle={{ borderBottom: '1px solid #404040' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Navigation>
    </HeaderComponent>
  );
};

export default Header;
