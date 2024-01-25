import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WordCounter from './components/WordCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordCounter />
  </React.StrictMode>
);
