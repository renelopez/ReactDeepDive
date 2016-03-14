require('jquery');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require("./app.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import HarViewer from './components/HarViewer';

ReactDOM.render(<HarViewer />,document.getElementById('initialNodeChange'));