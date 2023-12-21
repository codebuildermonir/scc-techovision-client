import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";
import Dashboard from "../Layout/Dashboard";
import UserTask from "../Pages/Dashboard/UserTask";



const myCreate = createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'/about',
                        element:<About></About>
                  },
                  {
                        path:'/contact',
                        element:<Contact></Contact>
                  },
                  {
                        path:'/login',
                        element:<Login></Login>
                  },
                  {
                        path:'/SignIn',
                        element:<SignIn></SignIn>
                  }
            ]
      },
      {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                   {
                        path:'UserTask',
                        element:<UserTask></UserTask>
                  } 
            ]
      }

])
export default myCreate;