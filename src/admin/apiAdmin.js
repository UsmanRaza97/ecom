import {API} from '../config';
export const createCategory = (userId, token, category) =>{
    console.log("createCategory",userId,token,category)
     return fetch(`${API}category/create/${userId}`, {
           method:'POST',
           headers: {
               Accept:'application/json',
               'Content-Type': 'application/json',
               Authotization: `Bearer ${token}`
           },
           body: JSON.stringify(category)
   })
          .then(response=>{
              console.log('response',response)
              return response.json();
          })
          .catch(err=>{
              console.log('err',err)
          })
       };
       export const createProduct = (userId, token, product) =>{
        return fetch(`${API}/product/create/${userId}`, {
              method:'POST',
              headers: {
                  Accept:'application/json',
                  Authotization: `Bearer ${token}`
              },
              body: product
      })
             .then(response=>{
                 return response.json();
             })
             .catch(err=>{
                 console.log(err);
             })
          };