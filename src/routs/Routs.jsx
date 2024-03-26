import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import BookDetails from "../Component/BookDetails/BookDetails";
import ListedBooks from "../Component/ListedBooks/ListedBooks";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/bookdetails/:id',
          element: <BookDetails></BookDetails>,
          loader: () => fetch('../books.json')
        },
        {
          path: '/listedbooks',
          element: <ListedBooks></ListedBooks>,
          loader: () => fetch('../books.json'),
        }
      ]
    },
  ]);
  