import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import { createRoot } from 'react-dom/client';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// import counter component
import Counter from './components/counter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
