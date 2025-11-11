import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        toast.success("SignOut Successful !");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-between items-center py-4 navbar bg-base-100 shadow-sm shadow-green-300 text-green px-10">
      <div className="flex gap-2 items-center">
        <img src="/logo.jpg" className="w-10 h-8" alt="" />
        <h2 className="text-xl font-bold">Habit Tracker</h2>
      </div>
      <div>
        <ul className="flex gap-4 items-center justify-center text-md">
          <NavLink
            className=" hover:text-[#2f9e9c] hover:border-b border-b-purple-600"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-[#2f9e9c] hover:border-b border-b-purple-600"
            to="/browsePublic"
          >
            Browse-Public-Habits
          </NavLink>
          {user && (
            <div className="flex gap-4 items-center justify-center text-md">
              <NavLink
                className="hover:text-[#2f9e9c] hover:border-b border-b-purple-600"
                to="/addHabit"
              >
                Add Habit
              </NavLink>
              <NavLink
                className="hover:text-[#2f9e9c] hover:border-b border-b-purple-600"
                to="/myHabits"
              >
                My Habits
              </NavLink>
            </div>
          )}
        </ul>
      </div>

      {!user ? (
        <div className="flex gap-2 items-center justify-end">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            SignUp
          </Link>
        </div>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={user.photoURL || "/profile.webp"}
                alt="User"
                className="object-cover"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-center py-1 font-semibold">
              {user.displayName}
            </li>
            <li className="text-center text-sm text-gray-500">{user.email}</li>
            <div className="divider my-1"></div>
            <li>
              <button
                onClick={handleSignOut}
                className="btn text-red-500 font-semibold"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
