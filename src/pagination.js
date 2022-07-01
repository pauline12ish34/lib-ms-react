// import React,{useState,useEffect} from 'react'
import {useState,useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from './theme/globalStyles';
import { lightTheme,darkTheme } from './theme/Theme';
import { IoSunny, IoMoon } from 'react-icons/io5';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


const App = () => {
  const [theme,setTheme]=useState('light');
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);

  useEffect(()=>{
    const fetchPosts= async () =>{
      setLoading(true);
      const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false); 
      // console.log(res.data);

    }

 fetchPosts();
},[]);

//get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

//function to change theme
const themeToggler = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light')
}
// //  console.log(posts[2]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div className='mt-5'>
    {/* <button onClick={themeToggler}>Switch Theme</button> */}
    <div className="p-2 transition duration-500 ease-in-out rounded-full">
			{theme === 'dark' ? (
				<IoSunny onClick={themeToggler} className="text-2xl cursor-pointer" />
			) : (
				<IoMoon onClick={themeToggler} className="text-2xl cursor-pointer" />
			)}
		</div>
{/* ${loading? bg bg-slate-500: bg-red-400 } */}

      <h1 className='border text-green-500'>View Blog</h1>
     
  <Posts posts={currentPosts} loading={loading} theme={theme} />

  <Pagination 
  postsPerPage={postsPerPage} 
  totalPosts={posts.length}
  paginate={paginate}
  />
      {/* <p>{console.log(posts)}</p> */}
    </div>
    </>
    </ThemeProvider>
  )
}

export default App


