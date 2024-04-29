import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <GoogleOAuthProvider clientId="939620065525-nibe7ps5dheg8esoqmjgi852t3c6nvp5.apps.googleusercontent.com"> 
    <App />
    </GoogleOAuthProvider>;     
  </BrowserRouter>
);
reportWebVitals();
