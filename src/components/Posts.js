import React from 'react'

const Posts = ({posts,loading,theme}) => {
      if (loading){
        return <h2 className=' text-blue-400'>Loading ...</h2>
    }
  return (
    <div >
    <ul className='w-3/6 ml-64 font-medium text-gray-900 border border-gray-200 rounded-lg '>

{
    posts.map((tas)=>(
    <li key={tas._id} className= {`w-full px-4 py-2 border-b text-white border-gray-200 ${theme === 'light' ? 'text-black ':'text-white'}`}>{tas.title}</li>
    // <div className={`bg-slate-200 m-2 mx-12 p-5 ${task.reminder ? 'border-l-4 border-teal-600 ':''}`} onDoubleClick={() =>onToggle(task.id)}>
    // <li key={tas.id} className={'w-full px-4 py-2 border-b border-gray-200 ${theme==={dark}}   '}>{tas.title}</li>
    )
    )
}


    </ul>
    </div>
  )
}

export default Posts


// import React from 'react'
// const Posts = ({posts}) => {
//     // if (loading){
//     //     return <h2 className=''>Loading ...</h2>
//     // }
//     console.log(posts);
//   return (<ul className='mb-5 w-48 text-sm font-medium text-gray-900 bg-white border '>

//       {posts.map(post=>{
//         <li key={post.id} className='w-full px-4 py-2 border-b border-gray-300 '>{
//             post.title
//         }</li>
//       })}
//   </ul>)
// }

// export default Posts