import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkThemeProvider } from "./Context"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </React.StrictMode>
);
