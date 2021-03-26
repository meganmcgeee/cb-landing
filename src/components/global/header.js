import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import chooseRandomColor from '../utils/chooseRandomColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
position: fixed;
  
  margin-bottom: 40px;
  background:;
  z-index: 1000;
  width: 100%;

  @media (max-width: 767px) {
    padding-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
  }
  @media (min-width: 760px) {
    align-items: center;
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

 


    & li {
      list-style: none;

      padding: 0 40px 0 0;
      margin: 0;

      & a.active-link {
      }

      & a:hover {
        border-bottom: 1px solid #b1b2b5;
      }
    }

    & li:last-of-type {
      padding: 0;
    }
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.open ? 'block' : 'none')};

    width: 100%;
    padding: 20px 0 0;
    line-height: 2;

    & ul {
      flex-direction: column;
      position: fixed;

    background: white;
    right: 0;

    background: white;
    }
  }
`;

const OpenNavigation = styled.button`
  position: fixed;
  right: 20px;

  border: 0;

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
    this.myRef = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    let bodyid;
    let colors = ['#8a432e', '#B1B2B5'];
    let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];
    console.log(bodyid);
    let logoColors = [];
    let logoStart;
    if (bodyid == 'projects') {
      logoStart = 'orange';
      logoColors = ['blue', 'lblue', 'orange'];
    }
    if (bodyid === 'news') {
      logoStart = 'orange';
      logoColors = ['blue', 'lblue', 'orange'];
    }
    if (bodyid == 'about') {
      logoStart = 'grey';
      logoColors = ['blue', 'grey', 'lblue'];
    }
    if (bodyid == 'contact') {
      logoStart = 'grey';
      logoColors = ['grey', 'lblue', 'orange'];
    }
    let logoHover = chooseRandomColor(logoColors);
    return (
      <HeaderComponent>
        <Logo color={chooseRandomColor(logoColors)} id="logo">
          <Link to="/projects">
            <img src="/images/orange.png" alt="Caroline Boseley Logo" />
          </Link>
        </Logo>
        <Navigation
          open={this.state.showMenu}
          color={chooseRandomColor(allColors)}
        >
          <ul>
            {this.props.menuLinks.map((link) => {
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
        <OpenNavigation onClick={() => this.toggleMenu()}><FontAwesomeIcon icon={faBars}  /></OpenNavigation>
        <style jsx>{`
          #logo {
     
            font-size: 23px;
            font-smooth: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: antialiased;
          }
          #logo a {
            display: flex;
            align-items: flex-end;
          }
          #logo img {
            width: 250px;
            height: 30px;
          }
          #logo img:hover {
            content: url('/images/lblue.png');
          }
          @media (min-width: 760px) {
            #logo {
              font-size: 40px;
              // -1em
              // margin-left:112px;
            }
            #logo img {
              width: 380px;
              height: 45px;
        
                margin-left: 42px;
            }
          }
          @media (max-width: 760px) {
            #logo {
              // margin-left: -1em;
            }}
        `}</style>
      </HeaderComponent>
    );
  }
}

export default Header;
