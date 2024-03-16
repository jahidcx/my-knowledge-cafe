
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  
  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookmarks = blog=> {
      const newBookMarks = [...bookmarks , blog];
      setBookMarks(newBookMarks);
  }

  return (
    <>
      
      <Header ></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
      
      
    </>
  )
}

export default App
