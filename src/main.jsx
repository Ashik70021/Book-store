import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
import BookDetails from './Component/BookDetails/BookDetails';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import ReadBooks from './Component/ReadBooks/ReadBooks';
import WishList from './Component/WishList/WishList';
import PageToRead from './Component/PageToRead/PageToRead';
import OrderBook from './Component/OrderBook/OrderBook';
import Contact from './Component/Contact/Contact';

const router = createBrowserRouter([
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
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('../books.json'),
          },
          {
            path:'wishlist',
            element:<WishList></WishList>,
            loader: ()=> fetch('../books.json'),
          }
        ],
      },
      {
        path: '/pagetoread',
        element: <PageToRead></PageToRead>,
        loader: ()=> fetch('../books.json'),
      },
      {
        path: '/orderbook',
        element: <OrderBook></OrderBook>,
        loader: ()=> fetch('../books.json'),
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


