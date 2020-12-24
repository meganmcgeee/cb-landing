import React from 'react'
import Gallery from '../components/homepage/gallery'

export default function Index() {
  return (
    <>
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