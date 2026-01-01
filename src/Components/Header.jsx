import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => toast.success("SignOut Successful !"))
      .catch((err) => toast.error(err.message));
  };

  const navLinks = (
    <>
      <NavLink to="/" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/browsePublic" onClick={() => setOpen(false)}>
        Browse Public Habits
      </NavLink>
      {user && (
        <>
          <NavLink to="/addHabit" onClick={() => setOpen(false)}>
            Add Habit
          </NavLink>
          <NavLink to="/myHabits" onClick={() => setOpen(false)}>
            My Habits
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm shadow-green-300 px-3 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button onClick={() => setOpen(!open)} className="btn btn-ghost">
            ☰
          </button>
          {open && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <img src="/logo.jpg" className="w-10 h-8" alt="" />
          <h2 className="text-lg font-bold">Habit Tracker</h2>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm">
              SignUp
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "/profile.webp"} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold">{user.displayName}</li>
              <li className="text-center text-sm text-gray-500">
                {user.email}
              </li>
              <div className="divider my-1"></div>
              <li>
                <Link
                  to="/"
                  onClick={handleSignOut}
                  className="text-red-500 font-semibold"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
