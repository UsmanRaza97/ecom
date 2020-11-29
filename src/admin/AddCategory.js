import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout'
import {createCategory} from './apiAdmin'
const AddCategory = () => {
 
     const [name, setName] = useState('');
     const [error, setError] = useState(false);
     const [success, setSuccess] = useState(false);
  // destruct user and token from localstorage
  const { user, token } = isAuthenticated()
  
  const handleChange = (e) =>{
   setError('')
   setName(e.target.value)
  }

  const clickSubmit = (e) =>{
    e.preventDefault()
    setError('')
    setSuccess(false)
    // make req. to api to make categoray 
    createCategory( user._id, token, {name})
    .then(data =>{
        console.log("data",data)
        if(data?.error) {
            setError(true)
        } else {
            setError('');
            setSuccess(true);
        }
    })
  }
  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className='form-group'>
       <label className='text-muted'>Name</label>
       <input type='text' className='form-control'onChange={handleChange}
        value={name} autoFocus required >
       </input>
      </div>
      <button className='btn btn-outline-primary'>Create Category</button>
    </form>
    
  );
const showSuccess = () =>{
    if(success) {
        return <h3 className='text-success'> {name} Created! </h3>;
    }
}
const showError = () =>{
    if(error) {
        return <h3 className='text-danger'> {name} Should be Unique! </h3>;
    }
}

const goBack = () => (
    <div className='mt-5'>
<Link to='/admin/dashboard' className='text-danger'> Back to Dashboard</Link>
    </div>
)

return (
    <Layout title='Add a  New Category' description={`Good Day ${user.name}, 
    are you ready to add this new category?`}>
    <div className='row'>
    <div className='col-md-8 offset-md-2'>
    {showSuccess()}
    {showError()}
    {newCategoryForm()}
    {goBack()}
    </div>
    </div>
 </Layout>
);

};

export default AddCategory;