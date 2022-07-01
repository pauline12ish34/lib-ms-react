import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-800 h-24 pt-8'>
        <div className='px-8 text-slate-50'>LOGO</div>

        <div className='pl-8 mr-5 flex justify-between'>
        <div>
            <Link to='/' className='p-4 w-28 text-slate-50'> Home</Link>
            <Link to='/about' className='p-4 w-28 text-slate-50'>About</Link>
            <Link to='/contact' className='p-4 w-28 text-slate-50'>Contact</Link>
        </div>
        <div className='-mt-2'>
            <button className='w-28 py-1 mr-5 text-slate-50 border border-white rounded-lg hover:bg-gray-600'>SignUp</button>
            <button className='w-28 py-1 text-slate-50 border border-white rounded-lg hover:bg-gray-600'>Login</button>
        </div>
        </div>

    </div>
  )
}

export default Navbar