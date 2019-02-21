import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

render(<App message="hello world with props" />, rootEl);
