import React, { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, hoverLift, tapScale } from "../utils/animations";

const LatestHabits = ({ latestHabitsPromise }) => {
  const habits = use(latestHabitsPromise);
  const { loading, setLoading } = useContext(AuthContext);
  console.log(habits);

  if (loading) {
    return (
      <div
        className="max-w-7xl mx-auto my-10 grid gap-6 
                    sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  return (
    <>
      <motion.div 
        className="max-w-7xl mx-auto my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {habits.map((habit, index) => (
          <motion.div
            key={habit._id}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden h-full flex flex-col"
            variants={staggerItem}
            whileHover={hoverLift}
            whileTap={tapScale}
            custom={index}
          >
            {/* Image */}
            <motion.figure 
              className="h-44 w-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={habit.image}
                alt={habit.habitTitle}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.figure>

            {/* Body */}
            <div className="card-body flex flex-col gap-3 flex-1">
              <motion.h2 
                className="card-title text-base font-semibold line-clamp-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {habit.habitTitle}
              </motion.h2>

              <motion.p 
                className="text-sm opacity-80 line-clamp-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {habit.description}
              </motion.p>

              {/* Meta Info */}
              <motion.div 
                className="flex flex-wrap gap-2 text-xs mt-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <motion.span 
                  className="badge badge-outline"
                  whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  {habit.category}
                </motion.span>
                <motion.span 
                  className="badge badge-outline"
                  whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  {habit.reminderTime}
                </motion.span>
                <motion.span 
                  className="badge badge-neutral"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {habit.userName}
                </motion.span>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={`/habitDetails/${habit._id}`}
                  className="btn btn-primary btn-sm w-full mt-3"
                >
                  View Details
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default LatestHabits;
