import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import Header from './components/Header';
import Index from './components/Index';
import NewBookmark from './components/NewBookmark';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />

      <Match exactly pattern="/" component={Index} />
      <Match pattern="/bookmarks/new" component={NewBookmark} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
