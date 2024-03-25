import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ListBooks from './Components/ListBooks/ListBooks.jsx'
import PageToRead from './Components/PageToRead/PageToRead.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/listbooks',
      element: <ListBooks></ListBooks>
    },
    {
      path: '/pagetoread',
      element: <PageToRead></PageToRead>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
