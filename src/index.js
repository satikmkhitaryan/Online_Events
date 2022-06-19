import React from 'react';
import ReactDOM from 'react-dom/client'; 
//import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store  from './reduxToolkit/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from "./contexts/UserProvider"
import LanguageProvider from './contexts/LanguageProvider';



// const container = document.getElementById('root');
// const root = createRoot(container);     // sa toolkit-i jamanak

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>     
       <UserProvider>
          <LanguageProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LanguageProvider>   
        </UserProvider>    
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
