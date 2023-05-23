import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


// let array = [{
//   path: "/",
//   element: <App/>
// }]

// for(let i = 1 ; i<50 ; i++) {
//   const obj = {
//     path: `/day-${i}`,
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dia-1",
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
