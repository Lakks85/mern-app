import React from 'react'
import GetUsers from './Components/GetUsers/GetUsers'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './Components/AddUser/AddUser';
import SingleUser from './Components/SingleUser/SingleUser';
import { Toaster } from 'react-hot-toast'
// import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GetUsers />
    },
    {
      path: "/add",
      element: <AddUser />
    },
    {
      path: "/single/:id",
      element: <SingleUser />
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
