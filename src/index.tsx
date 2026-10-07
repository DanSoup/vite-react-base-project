import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');

if (domNode === null) {
  throw new Error('No root element found.');
}

const root = createRoot(domNode);

root.render(<App />);
