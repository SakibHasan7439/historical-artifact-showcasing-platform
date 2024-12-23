import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import logo from "../assets/artifacts_logo.png"

const Nav = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSubmitSignOut = () =>{
    userSignOut()
    .then(()=>{
      toast.success("Signed Out Successfully");
    })
    .catch((err)=>{
      toast.error(err.message);
    })
  }

  return (
    <div className="navbar bg-[#786655da]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/all-artifacts"}>All Artifacts</NavLink>
            <NavLink to={"/add-artifacts"}>Add Artifact</NavLink>
          </ul>
        </div>
        <img className="w-24 md:w-48" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-6 menu-horizontal px-1">
            <NavLink to={"/"} className={"md:text-lg text-white"}>Home</NavLink>
            <NavLink to={"/all-artifacts"} className={"md:text-lg text-white"}>All Artifacts</NavLink>
            <NavLink to={"/add-artifacts"} className={"md:text-lg text-white"}>Add Artifact</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
          {
            user ? <>    
              <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full tooltip tooltip-right" data-tip={user?.displayName}>
                <img
                  alt="user image"
                  src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-2 z-[100] dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              <Link className="hover:bg-gray-200 p-2" to={"/my-artifacts"}>My Artifacts</Link>
              <Link to={"/liked-artifacts"} className="hover:bg-gray-200 p-2">Liked Artifacts</Link>
            </ul>
              </div>
              <button onClick={handleSubmitSignOut} className="btn">Logout</button>
            </>         
            : <Link to={"/signin"} className="btn">Signin</Link>
          }
      </div>
    </div>
  );
};

export default Nav;
