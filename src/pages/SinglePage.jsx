import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SinglePage = () => {
  const { id } = useParams();
  const [singleBookData, setSingleBookData] = useState([]);
  console.log(id);
  const navigate = useNavigate();

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

  const deleteItem = async () => {
    console.log("Delete Triggered!");
    const deleteContent = await axios.delete(
      "http://localhost:4000/books/" + id
    );
    if (deleteContent.status === 200) {
      //home page ma navigateion gardine
      navigate("/");
    } else {
      alert("Somethine went wrong !");
    }
  };

  return (
    <>
      <Navbar />
      <h1>{singleBookData.bookKoName}</h1>
      <h1>{singleBookData.bookPrice}</h1>
      <h1>{singleBookData.bookAuthor}</h1>
      <h1>{singleBookData.bookGenre}</h1>
      <button onClick={deleteItem}>Delete Me</button>
    </>
  );
};

export default SinglePage;
