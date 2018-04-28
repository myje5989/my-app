import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './ToDo';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<ToDo />, document.getElementById('root'));
registerServiceWorker();
