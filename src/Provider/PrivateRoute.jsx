import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({children}) => {
      const{user,loading}=useContext(AuthContext);
      const navigate= useLocation()
      if(loading){
            return <span className="loading loading-spinner text-secondary"></span>
      }
      if(user){
            return children
      }
      return <Navigate state={navigate.pathname} to={'/Login'} ></Navigate>
};

export default PrivateRoute;