import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


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
                  }
            ]
      }

])
export default myCreate;