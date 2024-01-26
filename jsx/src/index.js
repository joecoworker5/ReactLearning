// 1) Import the React and ReactDOM libs
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// 2) get a referebce to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) show the App componenet on the screen
root.render(<App/>);