import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Pages/MainLayout.jsx";
import Home from "./Features/Home/Home.jsx";
import BrowsePublic from "./Features/Habits/BrowsePublic.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Register from "./Features/Auth/Register.jsx";
import { ToastContainer } from "react-toastify";
import Login from "./Features/Auth/Login.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";
import AddHabit from "./Features/Habits/AddHabit.jsx";
import MyHabits from "./Features/Habits/MyHabits.jsx";
import HabitDetails from "./Features/Habits/HabitDetails.jsx";
import UpdateHabit from "./Features/Habits/UpdateHabit.jsx";
import About from "./Features/About/About.jsx";
import { Toaster } from "react-hot-toast";
import Contact from "./Features/Contact/Contact.jsx";
import DashboardLayout from "./Pages/DashboardLayout.jsx";
import DashboardHome from "./Features/Habits/DasboardHome.jsx";

<Toaster position="top-center" reverseOrder={false} />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browsePublic",
        element: <BrowsePublic />,
        loader: () => fetch("https://habit-server-app.vercel.app/allHabits"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardHome /> },

          { path: "addHabit", element: <AddHabit /> },
          { path: "myHabits", element: <MyHabits /> },
        ],
      },

      {
        path: "habitDetails/:id",
        element: <HabitDetails />,
        loader: ({ params }) =>
          fetch(`https://habit-server-app.vercel.app/allHabits/${params.id}`),
      },
      {
        path: "updateHabit/:id",
        element: (
          <PrivateRoute>
            <UpdateHabit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://habit-server-app.vercel.app/allHabits/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
