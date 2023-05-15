import ReactDOM from 'react-dom/client';
import React, { useEffect } from 'react';
import Router from './Router';
import firebase from './firebase.js';
import { db } from './firebase.js';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/layout.scss';

// console.log(firebase);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
// ReactDOM.createRoot(document.getElementById('root')).render(<Router />);
