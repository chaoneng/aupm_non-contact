import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css'

import './App.css';

import Info from './page/info/info'
import Login from './page/login/login'
import Home from './page/home/home'


function App() {
    return (
        <BrowserRouter>
			<Switch>
				<Route path='/info' component={Info}></Route>
				<Route path='/home' component={Home}></Route>
				<Route path='/' component={Login}></Route>
			</Switch>

    	</BrowserRouter>
    );
}

export default App;
