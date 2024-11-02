import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    category,
    rating,
    totalPages,
  } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  border border-gray-300 solid p-6">
        <figure className="bg-base-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="pt-6 space-y-4">
          <div className="flex justify-start gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-50 text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title h-10">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>
              <h1 className="">
                {rating} <i class="fa-regular font-light fa-star"></i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
