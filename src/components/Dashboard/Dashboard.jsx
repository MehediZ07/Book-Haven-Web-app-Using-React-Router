import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../utility/addToDb";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "green",
  "blue",
  "gary",
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Dashboard = () => {
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  const data = wishList.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: book.yearOfPublishing,
    amt: book.rating,
  }));

  return (
    <div className="overflow-x-auto min-h-[500px] whitespace-nowrap my-[100px]">
      <BarChart
        width={300 * wishList.length}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Dashboard;
