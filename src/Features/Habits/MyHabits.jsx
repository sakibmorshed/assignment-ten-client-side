import React, { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { fadeInUp, staggerContainer, staggerItem, hoverLift, tapScale } from "../../utils/animations";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [myHabits, setMyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    fetch(`https://habit-server-app.vercel.app/myHabits?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyHabits(data);
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    // GSAP loading animation
    if (loadingRef.current && loading) {
      gsap.to(loadingRef.current.children, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "none",
        stagger: 0.2
      });
    }

    // GSAP table animation when data loads
    if (tableRef.current && !loading && myHabits.length > 0) {
      gsap.fromTo(
        tableRef.current.querySelectorAll("tbody tr"),
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  }, [loading, myHabits]);

  if (loading) {
    return (
      <motion.div 
        className="flex justify-center items-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div ref={loadingRef} className="flex gap-4">
          <motion.span 
            className="loading loading-spinner text-primary w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.span 
            className="loading loading-spinner text-secondary w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.2 }}
          />
          <motion.span 
            className="loading loading-spinner text-accent w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.4 }}
          />
        </div>
      </motion.div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: 'animate__animated animate__zoomIn',
        confirmButton: 'animate__animated animate__pulse'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://habit-server-app.vercel.app/allHabits/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your habit has been deleted.",
              icon: "success",
              customClass: {
                popup: 'animate__animated animate__fadeInDown'
              }
            });
            setMyHabits(myHabits.filter((habit) => habit._id !== id));
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto my-10 p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-2xl font-bold mb-5 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Habits
      </motion.h1>

      <AnimatePresence mode="wait">
        {myHabits.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl mb-4"
            >
              📝
            </motion.div>
            <p className="text-gray-500 text-lg">
              You haven't added any habits yet. Please add your habits
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link 
                to="/dashboard/addHabit" 
                className="btn btn-primary btn-lg"
              >
                Add Your First Habit
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="table"
            className="overflow-x-auto shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <table className="table w-full text-sm sm:text-base" ref={tableRef}>
              <motion.thead 
                className="bg-base-200 text-center text-xs sm:text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Current Streak</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </motion.thead>

              <tbody className="text-center">
                <AnimatePresence>
                  {myHabits.map((habit, index) => (
                    <motion.tr 
                      key={habit._id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ 
                        backgroundColor: "#f3f4f6", 
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                      className="cursor-pointer"
                    >
                      <motion.td 
                        className="font-semibold p-3"
                        whileHover={{ color: "#3b82f6" }}
                      >
                        {habit.habitTitle}
                      </motion.td>
                      <td>
                        <motion.span 
                          className="badge badge-outline"
                          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                        >
                          {habit.category}
                        </motion.span>
                      </td>
                      <td>
                        <motion.span 
                          className="badge badge-success"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current streak
                        </motion.span>
                      </td>
                      <td>
                        {habit.createdAt
                          ? new Date(habit.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="flex flex-col sm:flex-row gap-2 space-x-2">
                        <motion.div whileHover={hoverLift} whileTap={tapScale}>
                          <Link
                            to={`/updateHabit/${habit._id}`}
                            className="btn btn-xs sm:btn-sm btn-info text-white"
                          >
                            Update
                          </Link>
                        </motion.div>

                        <motion.button
                          onClick={() => handleDelete(habit._id)}
                          className="btn btn-xs sm:btn-sm btn-error text-white"
                          whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(239, 68, 68, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Delete
                        </motion.button>

                        <motion.button 
                          className="btn btn-xs sm:btn-sm btn-success text-white"
                          whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(34, 197, 94, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(34, 197, 94, 0.3)",
                              "0 0 20px rgba(34, 197, 94, 0.3)",
                              "0 0 0px rgba(34, 197, 94, 0.3)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Mark Complete
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyHabits;