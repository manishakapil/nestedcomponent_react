import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId="737214277698-t496evv1e1baof0mkhki6u6rk3qd3qvf.apps.googleusercontent.com">   {/* For Google Sign in feature using auth */}
      <Provider store={store}>   {/* For global storage for the state mangagement */}
        <App />   {/* Parent Component */}
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
