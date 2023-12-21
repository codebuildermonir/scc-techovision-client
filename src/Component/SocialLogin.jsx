
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
      const handleGoogle=(e)=>{
            e.preventDefault();

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