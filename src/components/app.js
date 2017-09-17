import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from './header';
import Routes from './routes';

const Footer = () => (
  <footer></footer>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
