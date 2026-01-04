import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ITEMS_PER_PAGE = 8;

const BrowsePublic = () => {
  const data = useLoaderData();
  const { loading } = useContext(AuthContext);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHabits = data
    .filter((habit) =>
      habit.habitTitle.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(
      (habit) =>
        selectedCategory === "All" || habit.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.habitTitle.localeCompare(b.habitTitle);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredHabits.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHabits = filteredHabits.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Explore Public Habits</h2>
          <p className="text-gray-600">
            Discover habits shared by the community 🌱
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl shadow-sm">
          <input
            type="text"
            placeholder="Search habits..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full"
          />

          <select
            className="select select-bordered w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
          </select>

          <select
            className="select select-bordered w-full"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="title">Title (A–Z)</option>
          </select>

          <button
            onClick={() => {
              setSearchText("");
              setSelectedCategory("All");
              setSortBy("");
            }}
            className="btn btn-outline"
          >
            Reset
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentHabits.map((habit, i) => (
            <motion.div
              key={habit._id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={habit.image}
                  alt={habit.habitTitle}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {habit.habitTitle}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {habit.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mt-auto">
                  <span className="badge badge-outline">{habit.category}</span>
                  <span className="badge badge-outline">
                    {habit.reminderTime}
                  </span>
                </div>

                <span className="badge badge-neutral w-fit">
                  {habit.userName}
                </span>

                <Link
                  to={`/habitDetails/${habit._id}`}
                  className="btn btn-primary btn-sm w-full mt-2"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 pt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn btn-sm ${
                currentPage === i + 1 ? "btn-primary" : "btn-outline"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePublic;
