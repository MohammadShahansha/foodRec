import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ViewRecipe from './components/ViewRecipe/ViewRecipe.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('http://localhost:5000/chefrecipe')
      },
      {
        path:'/viewrecipe/:id',
        element:<ViewRecipe></ViewRecipe>,
        loader: ({params}) => fetch(`http://localhost:5000/chefrecipe/${params.id}`)
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
