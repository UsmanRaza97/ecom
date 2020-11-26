import React,{useState} from 'react';
import Layout from '../core/Layout';
import { Redirect } from 'react-router-dom';
import {signin, authenticate} from '../auth'
const SignIn = () =>{
    const [values, setvalues] = useState({
        email:'karam@gmail.com',
        password:'karam12345',
        error:'', 
        loading: false,
        redirectToReferre: false
    })
    const {loading, email, password, redirectToReferre, error} = values;
    const handleChange = (label ,event) =>{
        setvalues({...values, error: false, [label]: event.target.value});
    }
    const clickSubmit = (event) =>{
        event.preventDefault();
        setvalues({...values, error: false, loading: true});
        signin({ email, password})
        .then(data => {
            if(data.error) {
                setvalues ({...values, error: data.error, loading: false} )
            } else {
                authenticate (data, () =>{
                        setvalues ({
                            ...values,
                        redirectToReferre: true
                        });
                    }   
                    )}
                });
};
   const SignInForm =() =>(
<form>
    <div className='form-group'>
    <label className='text-muted'>Email</label>
    <input onChange={e=>handleChange('email',e)} type='email' 
    className='form-control' value={email}></input>
    </div>
    <div className='form-group'>
    <label className='text-muted'>Password</label>
    <input onChange={e=>handleChange('password',e)} type='password' 
    className='form-control' value={password}></input>
    </div>
<button onClick={clickSubmit} className='btn btn-primary'>Signin</button>
</form>
   );
   
   const showError = () => (
    <div className='alert alert-danger' style={{display: error ? '' : 'none'}}>
    {error}
    </div>
   )
       
   const showLoading = () =>(
    loading && (
        <div className='alert alert-info'>
        <h3>Please Wait Loading....</h3>
    </div>
     )   
    
   );
   const RedirectUser = () =>{
       if(redirectToReferre){
           return <Redirect to='/'/>
       }
   }
    return(
    <Layout title='Signin Page' 
            description='Welcome to Signin page of Node React E-Commerce App'
            className='container col-md-8 offset-md-2'>
    {showError()}
    {showLoading()}
    {SignInForm()}
    {RedirectUser()}

    </Layout>
    )
}
export default SignIn;

