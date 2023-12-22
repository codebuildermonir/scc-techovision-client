import { useContext } from "react";
import { FaHome} from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


 const Dashboard = () => {
      const{user}=useContext(AuthContext)
      return (
            <div className="grid grid-cols-12 mx-auto  border-slate-950 ">
                  {/* Dashboard menu */}
            <div className="col-span-3 h-screen bg-[#89108B] text-white p-6 border-red-600">

            <a className="  text-white "> 
                    <img className="w-14 rounded-full " src={user?.photoURL}alt="" />
                    <h3>{user?.displayName}</h3>
            </a> 


           
            <ul className="my-10 uppercase space-y-6  ">

            

            <li className=" z-40 ">
            <NavLink to={'/dashboard/UserTask'} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
            }
            ><p className="flex flex-col lg:flex-row gap-2 items-center">
            <MdTask className="text-2xl "></MdTask>
             Task
            </p>
            </NavLink>
            </li>
            <div className="divider divider-info"></div> 
            <li className=" z-40 ">
            <NavLink to={'/ '} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
            }
            ><p className="flex flex-col lg:flex-row gap-2 items-center">
            <FaHome className="text-2xl "></FaHome>
            Menu Home
            </p>
            </NavLink>
            </li>
            </ul>

            </div>

                  {/* Dashboard Content */}
                  <div className=" col-span-9 border-orange-500 ">
                        <Outlet></Outlet>

                  </div>
            </div>
      );
}; 

export default Dashboard;


