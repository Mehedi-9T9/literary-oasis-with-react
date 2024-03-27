import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ListBooks from './Components/ListBooks/ListBooks.jsx'
import PageToRead from './Components/PageToRead/PageToRead.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import Error from './Components/Error/Error.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  errorElement: <Error></Error>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/listbooks',
      element: <ListBooks></ListBooks>,
      // loader: fetch('/books.json')

    },
    {
      path: '/pagetoread',
      element: <PageToRead></PageToRead>
    },
    {
      path: '/bookdetails/:bookId',
      // loader: fetch('https://mehedi-9t9.github.io/books-data-host/books.json'),
      element: <BookDetails></BookDetails>,

    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
