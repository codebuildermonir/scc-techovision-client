
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
const SocialLogin = () => {
      const{googleLogin}=useContext(AuthContext);
      const handleGoogle=(e)=>{
            e.preventDefault();

            googleLogin()
            .then(res=>{
                  const user= res.user;
                  console.log(user)
                  Navigate(location?.state?location.state:'/')
            })
            .then(error=>{
                  console.log(error)
            })


      }
      return (
            <div className="form-control mt-2">
                  <button onClick={handleGoogle}  className="btn bg-[#50C7FF] border-none hover:bg-[#50C7FF] text-[#89108B] btn-primary">
                  <FaGoogle className="text-2xl"></FaGoogle>
                  Login with Google
                  </button>
                  
            </div>
      );
};

export default SocialLogin;