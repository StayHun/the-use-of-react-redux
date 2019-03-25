import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleContainer from './components/Simple'
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import all from './components/reducers/all'
import thunk from 'redux-thunk';

//import {createLogger} from 'redux-logger';
//const logger = createLogger();

let store=createStore(all,applyMiddleware(thunk));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><SimpleContainer /></Provider>, document.getElementById('simple'));
registerServiceWorker();
