import React, { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import SkeletonCard from "./SkeletonCard/SkeletonCard";

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
      <div className=" max-w-7xl mx-auto my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5 gap-5">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="card bg-base-100 shadow-md 
             rounded-xl overflow-hidden 
             h-full flex flex-col"
          >
            {/* Image */}
            <figure className="h-44 w-full overflow-hidden">
              <img
                src={habit.image}
                alt={habit.habitTitle}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Body */}
            <div className="card-body flex flex-col gap-3 flex-1">
              <h2 className="card-title text-base font-semibold line-clamp-1">
                {habit.habitTitle}
              </h2>

              <p className="text-sm opacity-80 line-clamp-2">
                {habit.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-2 text-xs mt-auto">
                <span className="badge badge-outline">{habit.category}</span>
                <span className="badge badge-outline">
                  {habit.reminderTime}
                </span>
                <span className="badge badge-neutral">{habit.userName}</span>
              </div>

              {/* Button */}
              <Link
                to={`/habitDetails/${habit._id}`}
                className="btn btn-primary btn-sm w-full mt-3"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestHabits;
