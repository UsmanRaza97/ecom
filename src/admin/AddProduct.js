import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout'
import {createProduct} from './apiAdmin'

const AddProduct =() =>{
    const {user,token} = isAuthenticated()
    const goBack = () => (
        <div className='mt-5'>
    <Link to='/admin/dashboard' className='text-danger'> Back to Dashboard</Link>
        </div>
    )
    return (
        <Layout title='Add a  New Product' description={`Good Day ${user.name}, 
        are you ready to add this new Product?`}>
        <div className='row'>
        <div className='col-md-8 offset-md-2'>
        {goBack()}
        </div>
        </div>
     </Layout>
    );
};
export default AddProduct;