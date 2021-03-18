import React from'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import chooseRandomColor from '../utils/chooseRandomColor';

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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


      & a.active-link {

      }

      & a:hover {
        color: ${props => props.color};
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
    let bodyid;

      useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

     bodyid = document.getElementsByTagNameu("body")[0].id;

  });
console.log(bodyid);
    let logoColors = [];
    let logoStart;
    if(bodyid == 'projects') {
      logoStart = "orange"
      logoColors = ['blue', 'lblue', 'orange'];
    }
    if(bodyid === 'news') {
      logoStart = 'orange'
      logoColors = ['blue', 'lblue', 'orange'];
    }
     if (bodyid == 'about') {
      logoStart = 'grey';
      logoColors = ['blue', 'grey', 'lblue'];
    } if (bodyid == 'contact') {
      logoStart = 'grey';
      logoColors = ['grey', 'lblue', 'orange'];
    }
    let logoColor = chooseRandomColor(logoColors);
    let logoHover = chooseRandomColor(logoColors);
    let hover = chooseRandomColor(colors);
    console.log(logoStart);
    return (
      <HeaderComponent>
        <Logo color={chooseRandomColor(logoColors)} id="logo">
          <Link to="/projects">
            <img src={`/images/${logoStart}.png`} alt="Caroline Boseley Logo"/>
          </Link>
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
            font-smooth: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: antialiased;
          }
          #logo 
          img {
            width: 380px;
            height: 45px;
          }
          img:hover {
            content: url(${`'/images/${logoHover}.png'`});
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
