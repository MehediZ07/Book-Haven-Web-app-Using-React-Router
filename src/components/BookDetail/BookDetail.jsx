import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    author,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="mb-12 mt-6 flex flex-col md:flex-row">
      <img
        className="w-[100%] p-12 md:w-[40%] md:py-24 md:px-16 bg-green-50 rounded-xl"
        src={image}
        alt=""
      />
      <div className="md:pl-12 px-6 md:px-0 my-4 w-full">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <h2 className="mt-4">By, {author}</h2>
        <div class="divider w-full"></div>
        <h2 className="-my-3">{category}</h2>
        <div class="divider w-full"></div>
        <h2 className="">
          <strong>Review:</strong> {review}
        </h2>
        <div className="flex justify-start my-6 gap-4">
          {" "}
          <strong>Tag</strong>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs bg-green-50 text-green-500"
            >
              {tag}
            </button>
          ))}
        </div>
        <div class="divider w-full"></div>
        <div className="flex">
          <h2 className="w-44">
            <span>Number of pages:</span>
          </h2>
          <p>
            <strong className="">{totalPages}</strong>
          </p>
        </div>
        <div className="flex">
          <h2 className="w-44">
            <span>Publisher:</span>
          </h2>
          <p>
            <strong className="">{publisher}</strong>
          </p>
        </div>
        <div className="flex">
          <h2 className="w-44">
            <span>Year of publishing:</span>
          </h2>
          <p>
            <strong className="">{yearOfPublishing}</strong>
          </p>
        </div>
        <div className="flex mb-6">
          <h2 className="w-44">
            <span>Rating:</span>
          </h2>
          <p>
            <strong className="">{rating}</strong>
          </p>
        </div>

        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="btn mr-4 border-[#23BE0A] font-semibold hover:bg-[#fff] text-[#23BE0A] bg-[#fff]"
        >
          Mark as Read
        </button>
        <button
          onClick={() => handleAddToWishList(bookId)}
          className="btn border-[#23BE0A] font-semibold hover:bg-[#23BE0A] text-[#fff] bg-[#23BE0A]"
        >
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
