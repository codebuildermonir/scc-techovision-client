import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


 const Dashboard = () => {
      return (
            <div className="grid grid-cols-12 mx-auto  border-slate-950 ">
                  {/* Dashboard menu */}
            <div className="col-span-3 h-screen bg-[#89108B] text-white p-6 border-red-600">

            <a className=" text-xl  text-white "> 
                    <img className="w-24" src='https://i.ibb.co/NmckNX5/to-do-logo-removebg-preview.png'alt="" />
                    </a> 


           
            <ul className="my-10 uppercase space-y-6  ">

            

            <li className=" z-40 ">
            <NavLink to={'/dashboard/UserTask'} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
            }
            ><p className="flex flex-col lg:flex-row gap-2 items-center">
            <FaUsers className="text-2xl "></FaUsers>
             Users
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