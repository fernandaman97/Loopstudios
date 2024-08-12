import React, { Fragment, useState, useRef, useEffect } from 'react';
import Footer from './components/footer';
import Main from './components/main';
// import './App.css';
import './styles/scss/main.scss';

function App() {
  return (
    <Fragment>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;