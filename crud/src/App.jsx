import './App.css'
import Register from './components/Register'
import Table from './components/Table'
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'

function App() {

  // const Layout = () => {
  //   return (
  //     <Outlet />
  //   )
  // }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Table />
      },
      {
        path: '/add',
        element: <Register />
      },
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
