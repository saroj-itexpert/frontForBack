import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios';

const HomePage = () => {
  const [books, setBooks] = useState([]);//why empty array? good practice: Data jasto type ko aaudaicha testai type dine
  //tara useState le arko component ma backend bata aayeko data pass garna mildaina 
  //testko lagi redux state management library use garchhau
      
  const fetchBooks = async ()=>{
    const response = await axios.get("http://localhost:4000/books/"); //book db bata aauna time lagne bhayera yesma await halnu parchha
    setBooks(response.data.datas);   //backend bata k aayeko cha tyo dekhako
  }
  useEffect(()=>{
fetchBooks();
  },[])
 

  return (
   <>
   <Navbar/>


  <div className="flex flex-wrap justify-center mt-5">
    {   //JavaScript code lekhna ko lagi {} use gareko 
      books.map((book)=>{
        return (<Card book={book}/>)
      })
    }


</div>
   </>
  )
}

export default HomePage