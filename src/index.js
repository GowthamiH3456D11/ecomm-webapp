import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import Mystore from './Mystore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mystore/>
  </React.StrictMode>
  
);


