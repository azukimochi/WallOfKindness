import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'milligram'
import './styles.css'
import App from './App';
import "./index.css";

// import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(

	<Router><App /></Router>,
	document.getElementById('root'),
	
)