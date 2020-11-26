import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './Signup'
import SignIn from './Signin'
import Home from '../core/Home';
const Routes = () =>{
    return(  
        <BrowserRouter>
        <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={Signup} path='/signup' exact/>
            <Route component={SignIn} path='/signin' exact/>
            </Switch>
            </BrowserRouter>
        
    )
}
export default Routes;