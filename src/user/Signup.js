import React,{useState} from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import {signup} from '../auth'
const Signup = () =>{
    const [values, setvalues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success: false
    })
    const {name, email, password, success, error} = values;
    const handleChange = (label ,event) =>{
        setvalues({...values, error: false, [label]: event.target.value});
    }
    const clickSubmit = (event) =>{
        event.preventDefault();
        setvalues({...values, error: false})
        signup({name, email, password}).then(data => {
            if(data.error) {
                setvalues ({...values, error: data.error, success: false} )
            } else {
                setvalues ({
                    ...values,
                name:'',
                email:'',
                password:'',
                error:'',
                success: true
                })
            }
        })
    }
   const SignUpForm =() =>(
<form>
    <div className='form-group'>
    <label className='text-muted'>Name</label>
    <input onChange={(e)=>handleChange('name',e)} type='text' 
    className='form-control' value={name}></input>
    </div>
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
<button onClick={clickSubmit} className='btn btn-primary'>Submit</button>
</form>
   );
   
   const showError = () => (
    <div className='alert alert-danger' style={{display: error ? '' : 'none'}}>
    {error}
    </div>
   )
       
   const showSuccess = () =>(
       
    <div className='alert alert-info' style={{display: success ? '' : 'none'}}>
    New Account is Created. Please <Link to ='/signin'>Signin</Link>
    </div>
   )
    return(
    <Layout title='Signup Page' 
            description='Welcome to Signup page of Node React E-Commerce App'
            className='container col-md-8 offset-md-2'>
    {showError()}
    {showSuccess()}
    {SignUpForm()}
    </Layout>
    )
}
export default Signup;