import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SinglePage = () => {
  const { id } = useParams();
  const [singleBookData, setSingleBookData] = useState([]);
  console.log(id);

  const fetchSingleBook = async () => {
    const bookFromBackend = await axios.get(
      "http://localhost:4000/books/" + id
    );
    setSingleBookData(bookFromBackend.data.datas);
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);
  console.log(singleBookData);

  return (
    <>
      <h1>{singleBookData.bookKoName}</h1>
      <h1>{singleBookData.bookPrice}</h1>
      <h1>{singleBookData.bookAuthor}</h1>
      <h1>{singleBookData.bookGenre}</h1>
    </>
  );
};

export default SinglePage;
