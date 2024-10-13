import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped with BrowserRouter
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
