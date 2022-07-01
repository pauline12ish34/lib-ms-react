import React from 'react'
// import AddAuthor from './components/AddAuthor'
import Navbar from './components/global/Navbar'
import Home from './components/global/Home'
import About from './components/global/About'
import Contact from './components/global/Contact'
import { Route,Routes } from 'react-router-dom';
import AddAuthor from './components/AddAuthor'
const App = () => {
  return (
    <div>
<Navbar/>
{/* <AddAuthor></AddAuthor> */}

<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-author" element={<AddAuthor />} />
    </Routes>
    </div>
  )
}

export default App
