import { Link } from "react-router-dom";
import SocialLogin from "../Component/SocialLogin";


const Login = () => {

      const handleLogIn= (e)=>{
            e.preventDefault()
            const from = e.target;
            const email = from.email.value;
            const password= from.password.value;
            console.log(email, password)
            
      }
      return (
            
            <div>
           {/* <Helmet><title>NewsPark|LogIn</title></Helmet>
 */}
            <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col md:flex-row">
            
            
            <div className="card w-screen max-w-sm shadow-2xl bg-base-100">
            <h1 className="md:text-5xl text-center py-4 font-bold">Login now!</h1>

            <form onSubmit={handleLogIn}  className="card-body">
            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>

             <div className="form-control mt-6">
            <button  className="btn bg-[#89108B] hover:bg-[#89108B] border-none btn-primary text-white">Login</button>
            </div> 
            <div >
                   <SocialLogin></SocialLogin> 
            
            </div>
            <p>New Here?<small className='font-bold'><Link to={'/SignIn'}>Create an Account</Link> </small></p>
            </form>
            </div>
            </div>
            </div>

            </div>
      );
};

export default Login;

