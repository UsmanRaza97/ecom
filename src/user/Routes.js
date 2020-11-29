import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './Signup'
import SignIn from './Signin'
import Home from '../core/Home';
import PrivateRoute from '../auth/PrivateRoute'
import Dashboard from './userDashboard'
import AdminRoute from '../auth/AdminRoute'
import AdminDashboard from './AdminDashboard'
import AddCategory from '../admin/AddCategory'
import AddProduct from '../admin/AddProduct'
const Routes = () =>{
    return(  
        <BrowserRouter>
        <Switch>
            <Route component={Home} path='/' exact/>
            <Route component={Signup} path='/signup' exact/>
            <Route component={SignIn} path='/signin' exact/>
            <PrivateRoute component={Dashboard} path='/user/dashboard' exact/>
            <AdminRoute component={AdminDashboard} path='/admin/dashboard' exact/>
            <AdminRoute component={AddCategory} path='/create/category' exact/>
            <AdminRoute component={AddProduct} path='/create/product' exact/>
            </Switch>
            </BrowserRouter>
        
    )
}
export default Routes;