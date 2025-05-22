import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <Link to={`/single-page/${book.id}`}>
        <div>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Strait"
          />
          <div
            className="max-w-sm mr-5 mb-5 rounded overflow-hidden shadow-lg"
            style={{ fontFamily: '"Strait", sans-serif' }}
          >
            {/* <img
              className="w-full h-50 "
              src="https://m.media-amazon.com/images/I/810BkqRP+iL._SL1500_.jpg"
              alt="Book"
            /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.bookKoName}</div>
              <p className="text-gray-700 text-base">{book.bookAuthor}</p>
              <br />
              <a
                target="_blank"
                href="https://bootsnipp.com/muhittinbudak"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                ${book.bookPrice}
              </a>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{book.bookGenre}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
