import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Gallery from '../components/homepage/gallery'
document.body.style.visibility = 'hidden';
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
});
const Header = () => {
  function menuClick() {
    if (document.getElementById('nav').style.display === 'none') {
      document.getElementById('nav').style.display = 'flex';
    } else {
      document.getElementById('nav').style.display = 'none';
    }
  }
  return (
    <header>
      <Link to="/"><h1 id="logo">Caroline Boseley</h1></Link>
      <div id="mobile" onClick={menuClick}>Menu</div>
      <nav id="nav">
        <ul>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/news">news</Link></li>
        </ul>
      </nav>
      <style jsx global>{`
@font-face {
	font-family: "History 01";
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot");
	src: url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.eot?#iefix") format("embedded-opentype"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.woff") format("woff"), url("https://s3-eu-west-1.amazonaws.com/fonts-ireland.typotheque.com/WF-033325-010774-000275-e85a17905b3816b4f58536ce5a1555f8.svg#typotheque_webfonts_service") format("svg");
}
                @font-face {
                  font-family: 'AktivGrotesk';
                  src: url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.eot');
                  src: url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.eot?#iefix') format('embedded-opentype'),
                       url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.woff2') format('woff2'),
                       url('/Fonts/AktivGrotesk/AktivGrotesk_W_Lt.woff') format('woff');
                }
                #logo {
                                text-transform: uppercase;
                                font-size: 26px;
                                font-family: 'History 01';
                              }
      `}</style>
      <style jsx>{`
        @media(max-width: 760px) {
          #nav{
            width: 100vw;
            flex-direction: column;
            align-items: start;
            position: absolute;
            top: 70px;
            left: 18px;
          }
          #nav ul {
            display: flex;
            flex-direction: column;
            align-items: start;
          }
        }
        header {
          width: 100vw;
          height: 70px;
          background: #0E0E1C;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1.2rem 1rem;
          color: #fff;
          z-index: 1;
        }
        header #mobile {
          font-family: akzidenz-grotesk-pro,-apple-system,system-ui,sans-serif;
          cursor: pointer;
        }
        header a {
          text-decoration: none;
          color: inherit;
        }
        header nav ul {
          width: 350px;
          display: flex;
          justify-content: space-evenly;
          list-style: none;
        }
        header nav a {
          font-family: akzidenz-grotesk-pro, -apple-system, system-ui, sans-serif;
          font-weight: 300;
          line-height: 1.5;
          font-size: 18px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }
        nav {
          display: none;
        }
        header nav ul li:hover {
          border-bottom: 1px solid #fff;
        }
        @media(min-width: 760px) {
          header {
            height: 120px;
            align-items: baseline;
            padding: 2rem 2rem;
          }
          header h1 {
            font-size: 60px;
          }
          #nav {
            display: block;
          }
          #mobile {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default function Index() {
  return (
    <>
      <Header />
      <div className="container">
        <Gallery />
      </div>
      <style jsx>{`
    body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
    .container {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    `}</style>
    </>
  );
}
