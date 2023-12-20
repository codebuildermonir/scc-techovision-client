import { NavLink } from "react-router-dom";

const Navbar = () => {
      const navItem= <>
      <li className="md:text-lg z-40 text-[#FFFFFF] ">
          <NavLink to={'/'} 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#1091FF] underline " : ""
          }
          >Home
          </NavLink>
      </li>

      <li className="md:text-lg z-40 text-[#FFFFFF] ">
          <NavLink to={'/contact'} 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#1091FF] underline " : ""
          }
          >Contact
          </NavLink>
      </li>

      <li className="md:text-lg z-40 text-[#FFFFFF] ">
          <NavLink to={'/about'} 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#1091FF] underline " : ""
          }
          >About
          </NavLink>
      </li>
      <li className="md:text-lg z-40 text-[#FFFFFF] ">
          <NavLink to={'/login'} 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#1091FF] underline " : ""
          }
          >Log-In
          </NavLink>
      </li>

      </>


      return (
            <div>
            <div className="navbar justify-center bg-[#060004]">
            <div className="navbar justify-center">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#878e99] rounded-box w-52">
            
            {navItem}
            
            </ul>
            </div>
            <a className="btn btn-ghost md:text-xl">MONIR HOSSAIN</a>
            </div>
            <div className="navbar hidden lg:flex">
            <ul className=" space-x-8 menu-horizontal px-1">
            
            {navItem}
            </ul>
            </div>
            <div className="navbar-start hidden md:block ">
            <a className="btn  text-white   bg-[#FF014F] border-none hover:bg-[#FF014F] hover:-translate-y-1.5">DOWNLOAD MY CV</a>
            </div>
            </div>
            </div>
      );
};

export default Navbar;

