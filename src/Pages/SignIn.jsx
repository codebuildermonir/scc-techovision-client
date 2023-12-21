import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
      const {register,handleSubmit,reset, formState: { errors },} = useForm();

      const onSubmit=(data)=>{
            console.log(data.email, data.name,data.password, data.image)

            reset()

      }

      
      return (
            <div>
            
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
      <div className="card  w-screen max-w-sm shadow-2xl bg-base-100">
      <h1 className="md:text-5xl text-center pt-4 font-bold">Sign-Up now!</h1>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
      <label className="label">
      <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" {...register("name",{ required: true })} placeholder="Name" className="input input-bordered"  />
      {errors.name && <span className="text-red-600" >This field is required</span>}
      </div>

      <div className="form-control">
      <label className="label">
      <span className="label-text">Image</span>
      </label>
      <input type="file" name="image" {...register("image",{ required: true })}  className="input input-bordered"  />
      {errors.image && <span className="text-red-600" >This field is required</span>}
      </div>
      <div className="form-control">
      <label className="label">
      <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered"  />
      {errors.email && <span>This field is required</span>}
      </div>
      <div className="form-control">
      <label className="label">
      <span className="label-text">Password</span>
      </label>
      <input type="password" {...register("password",{ 
             minLength:6,
             pattern:/[0-9]/

             })} placeholder="password" name="password" className="input input-bordered"  />
        {errors.password?.type==='minLength' && <p className="text-red-600" >password must be 6 cher</p>}
        {errors.password?.type==='pattern'&&<p className="text-red-600">password must be at least one numeric character </p>}
       
      <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
      </div>
      <div className="form-control mt-6">
      <button  className="btn btn-primary  bg-[#89108B] hover:bg-[#89108B] border-none text-white">Sign-Up</button>
      </div>
      <p>Already?<small className="font-bold"><Link to={'/Login'}>Have an Account</Link> </small></p>
      </form>
      </div>
      </div>
      </div>
      </div>
      );
};

export default SignIn;