import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full mt-8 lg:mt-16 max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Signin</button>
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
