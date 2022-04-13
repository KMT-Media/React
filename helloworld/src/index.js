// we will use es6 modules
import React from 'react';
// React is Object
// react is module, from module react import React object

import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const element = <h1>Wellcome</h1>;

root.render(<React.StrictMode>element {element}</React.StrictMode>);

// ReactDom is no longer in react 18, changing code was necessary
