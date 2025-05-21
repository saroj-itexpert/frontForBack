import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios';

const HomePage = () => {
  const fetchBooks = async ()=>{
    const response = await axios.get("http://localhost:4000/books/"); //book db bata aauna time lagne bhayera yesma await halnu parchha
  }
  useEffect(()=>{
fetchBooks();
  },[])
  return (
   <>
   <Navbar/>

{/* Card */}
  <div className="flex flex-wrap justify-center mt-5">
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
   </>
  )
}

export default HomePage