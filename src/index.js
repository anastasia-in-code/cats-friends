import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { cats } from './cats';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={cats[0].id} name={cats[0].name} email={cats[0].email} />
    <Card id={cats[1].id} name={cats[1].name} email={cats[1].email} />
    <Card id={cats[2].id} name={cats[2].name} email={cats[2].email} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
