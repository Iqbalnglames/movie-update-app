import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/home"} className="btn btn-ghost text-xl">
          MovUpdte
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search the Movie"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/update-movie"}>Update Movies</Link>
          </li>
          <li>
            <Link to={"/index"}>Movies Index</Link>
          </li>
          <li>
            <details>
              <summary>Genres</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to={"romance"}>Romance</Link>
                </li>
                <li>
                  <Link to={"/action"}>Action</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/"}>Sign In</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
