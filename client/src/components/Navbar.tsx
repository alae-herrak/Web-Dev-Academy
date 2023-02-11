import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import { disconnect } from "../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Web Dev Academy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {user.username === "" ? (
              <>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-dark mt-md-0 mt-3"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-dark mt-md-0 mt-3" to="/login">
                    Log in
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">
                    Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/community">
                    Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      {user.username}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/settings" className="dropdown-item">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => dispatch(disconnect())}
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
