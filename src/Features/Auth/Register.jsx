import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const Register = () => {
  const [passError, setPassError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("successfully Signed in with Google");
        navigate("/home");
      })
      .catch((error) => toast.error(error.message));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setPassError("");

    console.log(email, password);

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPassError(
        "Password must have at least 6 characters, one uppercase and one lowercase letter"
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        toast.success("successfully Signup"), e.target.reset();
        navigate("/home");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <h2 className="text-2xl py-10 text-center">Signup & Explore !</h2>
      <div className="flex justify-center items-center mt-8 mb-8">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Enter your name"
                />
                <label className="label">Photo-URL</label>
                <input
                  type="text"
                  className="input"
                  name="photoURL"
                  placeholder="Enter your Photo-URL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleToggle}
                    className=" absolute top-8 right-6"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {passError && (
                    <span className="text-red-500 text-sm mt-1">
                      {passError}
                    </span>
                  )}
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn border-amber-400 hover:bg-black hover:text-white bg-white mt-4 flex items-center gap-0"
                >
                  Google
                </button>
                <p className="text-center py-3">
                  Already have an account ?{" "}
                  <NavLink to="/login" className="text-blue-600 pointer">
                    Login
                  </NavLink>
                </p>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
