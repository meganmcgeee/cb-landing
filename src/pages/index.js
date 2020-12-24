import React from 'react'
import {Link} from 'gatsby'
import Gallery from '../components/homepage/gallery'

const Header = () => {
  return (
    <header>
      <Link to="/"><h1>Caroline Bosely</h1></Link>
      <nav>
        <Link to="/projects">projects</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/news">news</Link>
      </nav>
      <style jsx>{`
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
        header {
          width: 100vw;
          height: 100px;
          background: #6a8493;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0 3rem 3rem 3rem;
          color: #fff;
        }
        header a {
          text-decoration: none;
          color: inherit;
        }
        header h1 {
          text-transform: uppercase;
          font-size: 64px;
          font-family: 'History 01';
        }
        header nav {
          margin-right: 8rem;
        }
        header nav a {
          font-family: akzidenz-grotesk-pro, -apple-system, system-ui, sans-serif;
          font-weight: 300;
          line-height: 27px;
          padding: 0 20px;
          border-spacing: 10p;
        }
      `}</style>
    </header>
  )
}

export default function Index() {
  return (
    <>
    <Header/>
    <div className="container">
      <Gallery/>
    </div>
    <style jsx>{`
    body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: grid;
      place-items: center;
    }
    .container {
      width: 80vw;
      height: 800px;
    }
    `}</style>
    </>
  );
}