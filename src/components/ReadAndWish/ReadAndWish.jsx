import { Link } from "react-router-dom";

export default function ReadAndWish({ book }) {
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
  return (
    <div className="mb-4 mt-6 flex flex-col md:flex-row border solid border-gray-400 rounded-xl p-4">
      <img
        className="w-[100%] h-60 p-12 md:w-[20%] md:p-6 bg-green-50 rounded-xl"
        src={image}
        alt=""
      />
      <div className="md:pl-12 px-6 md:px-0 my-2 w-full">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <h2 className="my-3">By, {author}</h2>

        <div className="flex justify-start my-2 gap-4 overflow-x-auto whitespace-nowrap">
          <strong>Tag</strong>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-sm bg-green-50 text-green-500"
            >
              #{tag}
            </button>
          ))}

          <h1 className="text-gray-500 font-medium">
            <i class="fas fa-calendar mx-3"></i> Year of publish:{" "}
            {yearOfPublishing}
          </h1>
        </div>

        <div className="flex justify-start my-2 gap-6 overflow-x-auto whitespace-nowrap">
          <h1 className="text-gray-500 font-medium">
            <i class="fas fa-user-friends mr-3"></i>Publisher: {publisher}
          </h1>
          <h1 className="text-gray-500 font-medium">
            <i class="fas fa-file mr-3"></i> Number of page: {totalPages}
          </h1>
        </div>
        <div class="divider w-full"></div>
        <div className="flex justify-start my-2 gap-6 overflow-x-auto whitespace-nowrap">
          <button className="btn btn-sm rounded-full bg-blue-100 text-blue-500">
            Category: {category}
          </button>
          <button className="btn btn-sm rounded-full bg-yellow-100 text-yellow-500">
            Ratting: {rating}
          </button>
          <Link Link to={`/books/${currentBookId}`}>
            <button className="btn btn-sm rounded-full border-[#23BE0A] font-semibold hover:bg-[#23BE0A] text-[#fff] bg-[#23BE0A]">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
