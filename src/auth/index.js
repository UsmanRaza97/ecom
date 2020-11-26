import {API} from '../config';
export const signup = user =>{
     return fetch(`${API}signup`, {
           method:'POST',
           headers: {
               Accept:'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
   })
          .then(response=>{
              return response.json();
          })
          .catch(err=>{
              console.log(err);
          })
       };
export const signin = (user)=>{
    return fetch(`${API}signin`,{
           method:'POST',
           headers: {
               Accept:'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
   })
          .then(response=>{
              return response.json();
          })
          .catch(err=>{
              console.log(err);
          })
       };
export const authenticate = (data, next) =>{
if (typeof window !== 'undefined'){
    localStorage.setItem('key for local storage', JSON.stringify(data));
    next();
}
};

export const signout = (next) =>{
if(typeof window!=='undefined') {
    localStorage.removeItem('key for local storage');
    next();
    return fetch(`${API}signout`,{
        method:'GET',
    })
    .then( response =>{
        console.log('signout',response);
    })
    .catch(err => console.log(err));
}
}
export const isAuthenticated = () =>{
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('key for local storage')) {
        return JSON.parse(localStorage.getItem('key for local storage'));
    }
    else {
        return false;
    }
}