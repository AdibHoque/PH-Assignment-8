import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Root from "./components/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Book from "./components/Book.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead.jsx";
import "react-toastify/dist/ReactToastify.css";
import Ratings from "./components/Ratings.jsx";

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
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/books/:id",
        element: <Book></Book>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/ratings",
        element: <Ratings></Ratings>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
