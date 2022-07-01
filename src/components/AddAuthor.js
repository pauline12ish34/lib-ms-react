import React, { useState } from 'react'
import AuthorDataService from '../services/AuthorService'
import AuthorList from './AuthorList';

const auth_init_State=Object.freeze({
  title:"",
  author_name:""
});
const AddAuthor = () => {
 
const [author,setAuthor]=useState(auth_init_State);
const [submitted,setSubmitted] =useState(false);


const onDatachange=(e)=>{
  setAuthor({
    ...author,
     [e.target.name]:e.target.value.trim()
    });
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('=====================');
//   console.log(author);
//   console.log('=====================');
// }

const saveAuthor=()=>{
  
  var data= {
    title:author.title,
    author_name:author.author_name
  };
  // console.log(data);
AuthorDataService.create(data)
.then((response)=>{
  console.log('the thing was creeated');
  setAuthor({
title:response.data.title,
author_name:response.data.author_name
});

setSubmitted(true);
console.log(response.data);
})
.catch(err=>(console.log(err)))

};


const newAuthor=()=>{
  setAuthor(auth_init_State);
  setSubmitted(false);
}

  return (
    <div className='w-full max-w-xl md:ml-60;'>
      

     
      { submitted ? (
        <div className='flex justify-between px-4'>
          <h4 className='px-4 text-xl'>You submitted successfully!</h4>
          <button onClick={newAuthor} className="p-3 bg-green-700 text-slate-50"> ADD</button>
        </div>
      ):
      (<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" placeholder="title"  name='title'
       
        onChange={onDatachange}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          author_name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" placeholder="name" name='author_name'
       
        onChange={onDatachange}/>
      </div>
  
      <div className="flex items-center justify-between">
        <button onClick={saveAuthor} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>     
      </div>
    </form>    )}
  
    </div>
  )
}

export default AddAuthor