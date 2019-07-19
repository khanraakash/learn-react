import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import {register} from "./serviceWorker";

ReactDom.render(<App/>, document.getElementById("root"));