import React, { useEffect, useState } from "react";
import AuthorDataService from "../services/AuthorService";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState(null);
  const [currentIndex,setCurrentIndex]=useState(-1);
  useEffect(()=>{
    retreiveAuthors();
  },[]);


  const retreiveAuthors = () => {
    AuthorDataService.getAll()
      .then((response) => {
        setAuthors(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <>
      {retreiveAuthors()}
      <div className="w-full p-5">
        {/* {console.log(authors)} */}

       

        <div>
        <ul>
        {
        authors && authors.map( (author,index) =>{
          <li className={`w-full px-4 py-2 border-b  border-gray-300 text-slate-800  ${index === currentIndex ? ' hover:text-slate-900':''}`}>

          </li>
        }


        )}
        </ul>  
          
        </div>
      </div>
    </>
  );
};

export default AuthorList;

// const [authors,setAuthors]=useState([]);
//     const [currentAuthors, setCurrentAuthors]=useState(null);
//     const [currentIndex, setCurrentIndex] = useState(-1);
//     const [searchTitle, setSearchTitle] = useState("");
//   useEffect(()=>{
//     retreiveAuthors();
//   },[]);

// const onChangeSearchTitle= e=>{
//   const searchTitle=e.target.value;
//   setSearchTitle(searchTitle);
// }

//   const retreiveAuthors=()=>{
//     AuthorDataService.getAll()
//     .then((response)=>{
//         setAuthors(response.data)
//         console.log(authors);
//     })
//     .catch(err=>{
//         console.log(err)
//     });
//   };

//     return (
//     <div >
//     <form className='bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4 w-full'>
//       <div className='flex items-center'>
//         <input type="text" className='w-full py-2 px-3 ' placeholder="search by title" onChange={onChangeSearchTitle}/>
//       </div>
//       <ul>
//         {/* {authors&&
//         authors.map(
//           (author,index)=>()
//         )
//         } */}
//         {console.log(authors)}
//       </ul>
//       <div></div>
//       <div></div>
//     </form>

//     </div>
//   )
