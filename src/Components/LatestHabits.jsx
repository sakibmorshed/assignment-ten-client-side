import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  // hoverLift, tapScale — আমি এখানে কম ব্যবহার করছি যাতে height বেশি না বাড়ে
} from "../utils/animations";

const LatestHabits = ({ latestHabitsPromise }) => {
  const [habits, setHabits] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    let mounted = true;
    if (latestHabitsPromise && typeof latestHabitsPromise.then === "function") {
      latestHabitsPromise
        .then((data) => {
          if (mounted) setHabits(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          if (mounted) setHabits([]);
        });
    } else {
      fetch("https://habit-server-app.vercel.app/latestHabits")
        .then((res) => res.json())
        .then((data) => {
          if (mounted) setHabits(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          if (mounted) setHabits([]);
        });
    }
    return () => {
      mounted = false;
    };
  }, [latestHabitsPromise]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto my-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (habits.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No public habits found right now...
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {habits.map((habit, index) => (
        <motion.div
          key={habit._id}
          className="group relative bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-400 hover:shadow-xl"
          variants={staggerItem}
          whileHover={{
            y: -8,
            scale: 1.025,
            boxShadow: "0 20px 50px -12px rgba(0,0,0,0.18)",
          }}
          custom={index}
        >
          {/* Compact image */}
          <div className="relative h-38 overflow-hidden">
            <motion.img
              src={habit.image}
              alt={habit.habitTitle}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
          </div>

          {/* Compact content */}
          <div className="flex flex-col flex-1 p-4 gap-3">
            <motion.h2
              className="text-base font-semibold text-gray-900 line-clamp-1 leading-tight group-hover:text-blue-700 transition-colors"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.2 }}
            >
              {habit.habitTitle}
            </motion.h2>

            <motion.p
              className="text-xs text-gray-600 line-clamp-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.28 }}
            >
              {habit.description}
            </motion.p>

            {/* Compact meta */}
            <motion.div
              className="flex flex-wrap gap-2 text-[0.68rem] mt-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.36 }}
            >
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50/80 text-blue-700 text-xs border border-blue-200/60">
                {habit.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50/80 text-emerald-700 text-xs border border-emerald-200/60">
                {habit.reminderTime || "—"}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100/80 text-gray-600 text-xs border border-gray-200/60">
                @{habit.userName}
              </span>
            </motion.div>

            {/* Smaller button */}
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.44 }}
            >
              <Link
                to={`/habitDetails/${habit._id}`}
                className="block w-full py-2 px-4 text-center text-white text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Details
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LatestHabits;
