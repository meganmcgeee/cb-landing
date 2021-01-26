import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import chooseRandomColor from '../utils/chooseRandomColor';

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
  font-size: 26px;
  text-transform: uppercase;
  display: block;
  font-family: 'History 01';

  & a {
    border-bottom: none;
  }

  &:hover > a {
    color: ${props => props.color};
    border-bottom: none;
  }

  & a::after {
    display: none;
  }

  @media (max-width: 850px) {
    font-size: 30px;
  }

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
      // color: #B1B2B5;


      & a.active-link {
        // color: ${props => props.color};
        border-bottom: 1px solid #B1B2B5;
      }

      & a:hover {
        color: #B1B2B5;
        // color: ${props => props.color};
        border-bottom: 1px solid #B1B2B5;
      }
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
  right: 25px;

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
    let colors = ['#8a432e', '#B1B2B5'];
    let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];
    return (
      <HeaderComponent>
        <Logo color={chooseRandomColor(colors)} id="logo">
          <Link to={'/projects'}><h1 id="logo">Caroline Boseley</h1></Link>
        </Logo>
        <Navigation
          open={this.state.showMenu}
          color={chooseRandomColor(allColors)}
        >
          <ul>
            {this.props.menuLinks.map(link => {
              return (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    activeClassName="active-link"
                    // partiallyActive={link.name === 'projects' && true}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Navigation>
        <OpenNavigation onClick={() => this.toggleMenu()}>Menu</OpenNavigation>
        <style jsx>{`
          #logo {
            font-size: 23px;
          }
          @media(min-width: 760px) {
            #logo {
            font-size: 40px;
            }
          }
        `}</style>
      </HeaderComponent>
    );
  }
}

export default Header;
