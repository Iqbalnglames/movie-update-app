import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          You must be Logged In to continue to Our Site
        </h2>
        <form action="">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </form>
        <div className="card-actions justify-end">
          <Link to={'home'} className="btn btn-primary">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
