import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { registerNewUser, updateUserProfile, signWithGoogle } = useContext(AuthContext);
    const handleSubmitRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const password = form.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!regex.test(password)){
            Swal.fire({
                title: "Week Password",
                text: "Password must be 6 characters and should contain at least one uppercase and lowercase letter",
                icon: "error"
              });
            return;
        }

        registerNewUser(email, password)
        .then((user) =>{
            toast.success("Successfully Registered");
            updateUserProfile(name, photoURL);
            console.log(user);
        })
        .catch((err) =>{
            toast.error(err.message);
        })
        
    }

    const handleGoogleSign = () =>{
        signWithGoogle
        .then(()=>{
            toast.success("Successfully Signed with Google");
        })
        .catch((err)=>{
            toast.error(err.message);
        })
    }

  return (
    <div>
      <div className="card bg-base-100 w-full mt-8 lg:mt-16 max-w-sm mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleSubmitRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="url"
              placeholder="photoURL"
              name="photoUrl"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary mb-2">Register</button>
            <button onClick={handleGoogleSign} className="btn justify-center border bg-white flex items-center gap-2 px-4 py-2 rounded-md">
                <p className="flex-grow-0">Sign With Google</p> 
                <FcGoogle className="text-xl"></FcGoogle>
            </button>
          </div>
        </form>
        <p className="text-center py-4">Already have an account ? <Link  to={"/signin"} className="text-blue-600">Signin now</Link></p>
      </div>
    </div>
  );
};

export default Register;
