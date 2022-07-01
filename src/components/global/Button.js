import React from 'react'

const Button = ({bgcolor,size ,width}) => {
  return (
    <div>

<button onClick={onClick} style={{backgroundColor: bgcolor}} className='text-slate-100  w-32 h-12 '>{text}</button> 
    </div>
  )
}

export default Button