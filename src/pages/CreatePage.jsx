import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const navigate = useNavigate();

  const addBook = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/books/", {
      bookKoName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
    });
    alert("Book added successfully!");
    navigate("/");
    console.log(response);
    setBookName("");
    setBookPrice("");
    setBookAuthor("");
    setBookGenre("");
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={addBook}
          className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10 "
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Add Book
          </h2>
          <input
            id="bookName"
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter Book's Name"
            required
          />
          <input
            id="bookPrice"
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="text"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
            placeholder="Enter Book's Price"
            required
          />
          <input
            id="bookAuthor"
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="text"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            placeholder="Enter Book's Author"
            required
          />
          <input
            id="bookGenre"
            className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="text"
            value={bookGenre}
            onChange={(e) => setBookGenre(e.target.value)}
            placeholder="Enter Book's Genre"
            required
          />
          <button
            onClick={addBook}
            type="submit"
            className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
