import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetail from "./components/BookDetail/BookDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import Root from "./components/Root/Root";
import SingIn from "./components/SingIn/SingIn";
import SingUp from "./components/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,

        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
