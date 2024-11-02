import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import ReadAndWish from "../ReadAndWish/ReadAndWish";
import "./ListedBooks.css";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    //
    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }

    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-4 lg:py-4">
        Listed Book
      </h2>
      <div className="flex justify-center">
        <div className="dropdown   rounded-xl">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white hover:text-white hover:bg-[#23be0a] border-2 solid bg-[#23be0a] m-1"
          >
            {sort ? `Sort by: ${sort}` : "Sort by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu  bg-white rounded-box z-[1] w-44 p-2 shadow"
          >
            <li
              className=" bg-white hover:bg-white hover:border-[#23be0a] border-2 solid border-[#23be0a] mb-2 rounded-lg"
              onClick={() => handleSort("Ratings")}
            >
              <a>Ratings</a>
            </li>
            <li
              className=" bg-white hover:bg-white hover:border-[#23be0a] border-2 solid border-[#23be0a] rounded-lg"
              onClick={() => handleSort("No of pages")}
            >
              <a>No of pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className="min-h-[500px]">
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wish List Book</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ReadAndWish key={book.bookId} book={book}></ReadAndWish>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <ReadAndWish key={book.bookId} book={book}></ReadAndWish>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
