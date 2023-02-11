import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getUserByUsername } from "../api/user";
import { connect } from "../redux/userSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "")
      setErrorMessage("All fields are required");
    else {
      getUserByUsername(username).then((res) => {
        if (!res.data) setErrorMessage("Username is incorrect");
        else {
          if (password !== res.data.password)
            setErrorMessage("Password is incorrect");
          else {
            dispatch(
              connect({
                username: res.data.username,
                userId: res.data._id,
              })
            );
          }
        }
      });
    }
  };

  return (
    <>
      {user.username === "" ? (
        <section className="p-5 bg-dark d-flex justify-content-center align-items-center full-height">
          <div className="card p-3">
            <div className="card-body d-flex flex-column align-items-center">
              <h4 className="card-title mb-3">Log in</h4>
              <form className="text-center" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary w-100" type="submit">
                    Log in
                  </button>
                </div>
                <div className="text-danger">{errorMessage}</div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Login;
