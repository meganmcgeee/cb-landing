import React from 'react'
import {Helmet} from 'react-helmet'
import Slider from '../components/homepage/slider'
export default function Index() {
  return (
    <>
    <Helmet>
      
    </Helmet>
    <Slider/>
    <style jsx>{`
    body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: grid;
      place-items: center;
    }
    `}</style>
    </>
  );
}