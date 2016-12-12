import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './components/Header';
import Index from './components/Index';
import NewBookmark from './components/NewBookmark';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />

      <Match exactly pattern="/" component={Index} />
      <Match pattern="/bookmarks/new" component={NewBookmark} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
