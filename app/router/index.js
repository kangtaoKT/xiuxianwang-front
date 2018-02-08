import React,{Component} from 'react';
import {HashRouter,Match} from 'react-router-dom';

import Home from '../../app/home/home';
import Login from '../../app/login/index';
import Register from '../../app/register';

const R = () => (
    <HashRouter>
        <Match pattern="/login" component={Login} />
        <Match pattern="/home" component={Home} />
        <Match pattern="/home" component={Register} />
    </HashRouter>
)

export default R