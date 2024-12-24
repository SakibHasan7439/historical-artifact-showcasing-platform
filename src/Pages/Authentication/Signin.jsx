import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Signin = () => {
    const { signInUser, signWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    const handleSubmitSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(() =>{
            toast.success("Successfully Signed in");
            navigate(from);
        })
        .catch((err) =>{
            toast.error(err.message);
        })
    }
    
    const handleGoogleSign = () =>{
      signWithGoogle()
      .then(()=>{
          toast.success("Successfully Signed with Google");
          navigate(from);
      })
      .catch((err)=>{
          toast.error(err.message);
      })
  }
  return (
    <div className="mb-8">
      <Helmet>
          <title>Artifact Tracker | SignIn</title>
      </Helmet>
      <div className="card bg-base-100 w-full mt-8 lg:mt-16 max-w-sm mx-auto shrink-0 border">
      <button onClick={handleGoogleSign} className="btn mx-4 mt-4 justify-center border bg-white flex items-center gap-2 px-4 py-2 rounded-md">
          <p className="flex-grow-0">Sign With Google</p> 
          <FcGoogle className="text-xl"></FcGoogle>
      </button>
      <p className="text-center">OR</p>
        <form onSubmit={handleSubmitSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#786655da] text-white">Signin</button>
          </div>
        </form>
        <p className="text-center py-4">
            New to this website ?{" "}
          <Link to={"/register"} className="text-blue-600">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
