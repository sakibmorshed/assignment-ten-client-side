import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; // ← fixed import (was "react-router")
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";
import Container from "./Container/Container";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => toast.success("SignOut Successful!"))
      .catch((err) => toast.error(err.message));
  };

  // Navigation links – extracted as array for easier reuse
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/browsePublic", label: "Browse Public Habits" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    ...(user ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <div className="bg-base-100 shadow-sm shadow-green-300 sticky top-0 z-50">
      <Container>
        <div className="navbar min-h-14 px-3 sm:px-4 lg:px-6">
          {/* Left - Logo + Mobile Hamburger */}
          <div className="navbar-start flex items-center gap-2">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="btn btn-ghost btn-sm p-1 min-h-0 h-9 w-9"
                aria-label="Toggle menu"
              >
                <span className="text-2xl leading-none">
                  {open ? "✕" : "☰"}
                </span>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-1.5">
              <img
                src="/logo.jpg"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                alt="Habit Tracker Logo"
              />
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                Habit Tracker
              </h2>
            </div>
          </div>

          {/* Center - Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 lg:gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium"
                        : "hover:text-primary transition-colors"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Auth buttons / Profile */}
          <div className="navbar-end flex items-center gap-2 sm:gap-3">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline btn-xs sm:btn-sm px-4 sm:px-5 min-h-8 h-8 sm:h-10"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-xs sm:btn-sm px-4 sm:px-5 min-h-8 h-8 sm:h-10"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar p-0.5"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img
                      src={user.photoURL || "/profile.webp"}
                      alt="User avatar"
                      className="rounded-full object-cover"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-60"
                >
                  <li className="text-center font-medium px-2 pt-1">
                    {user.displayName || "User"}
                  </li>
                  <li className="text-center text-xs text-base-content/70 pb-2 px-2">
                    {user.email}
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-error justify-center font-medium"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="lg:hidden border-t border-base-300 bg-base-100 px-3 py-4 shadow-md">
            <ul className="menu menu-vertical gap-1.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-base-200"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
