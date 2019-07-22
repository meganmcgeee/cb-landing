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

  @media (max-width: 767px) {
    padding-top: 20px;
    margin-bottom: 20px;

    flex-direction: column;
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  text-transform: uppercase;

  font-family: 'History 01';
  // font-weight: 600;

  @media (max-width: 576px) {
    font-size: 20px;
  }
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

  @media (max-width: 767px) {
    display: ${props => (props.open ? 'block' : 'none')};

    width: 100%;
    padding: 20px 0 0;
    line-height: 2;

    & ul {
      flex-direction: column;
    }
  }
`;

const OpenNavigation = styled.button`
  position: absolute;
  top: 19px;
  right: 14px;

  border: 0;
  padding: 10px 0 10px 10px;
  margin: 0;
  background-color: transparent;

  cursor: pointer;

  &:focus {
    outline: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = { showMenu: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    return (
      <HeaderComponent>
        <Logo>
          <Link to={'/'}>Caroline Boseley</Link>
        </Logo>
        <Navigation open={this.state.showMenu}>
          <ul>
            {this.props.menuLinks.map(link => {
              return (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    activeClassName="active-link"
                    partiallyActive={link.name === 'projects' && true}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Navigation>
        <OpenNavigation onClick={() => this.toggleMenu()}>Menu</OpenNavigation>
      </HeaderComponent>
    );
  }
}

export default Header;
