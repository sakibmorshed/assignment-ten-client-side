import { useLoaderData } from "react-router";
import * as Progress from "@radix-ui/react-progress";
import toast from "react-hot-toast";
import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HabitDetails = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(false);

  const completed = data?.completedDaysLast30 || 0;
  const percentage = Math.round((completed / 30) * 100);

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success("Habit completed for today 🌿");
      setLoading(false);
    }, 900);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        {/* ================= HERO ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <img
              src={data.image}
              className="w-full h-[340px] object-cover rounded-3xl shadow-lg transition"
            />

            <div className="grid grid-cols-3 gap-3">
              {data?.images?.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  whileHover={{ scale: 1.08 }}
                  className="h-24 rounded-xl object-cover cursor-pointer"
                />
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex gap-3">
              <span className="px-4 py-1 rounded-full text-sm bg-black text-white">
                {data.category}
              </span>
              <span className="px-4 py-1 rounded-full text-sm bg-gray-200">
                by {data.userName}
              </span>
            </div>

            <h1 className="text-4xl font-bold">{data.habitTitle}</h1>

            <p className="text-gray-600 leading-relaxed">{data.description}</p>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>30 Day Progress</span>
                <span>{percentage}%</span>
              </div>

              <Progress.Root className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <Progress.Indicator
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </Progress.Root>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleComplete}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white hover:shadow-lg transition"
            >
              <CheckCircle size={18} />
              {loading ? "Updating..." : "Mark Complete"}
            </motion.button>
          </motion.div>
        </section>

        {/* ================= INFO ================= */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Duration", value: "30 Days" },
            { title: "Difficulty", value: "Medium" },
            { title: "Consistency Rule", value: "Daily Check-in" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-gray-500 text-sm">{item.title}</h4>
              <p className="text-xl font-semibold mt-2">{item.value}</p>
            </motion.div>
          ))}
        </section>

        {/* ================= REVIEWS ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">User Feedback</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition space-y-3"
              >
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  This habit helped me stay disciplined and focused every day.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= RELATED ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">You May Also Like</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Early Wake Up",
                img: "/detailsPage1.jfif",
              },
              {
                title: "Daily Reading",
                img: "/detailsPage4.avif",
              },
              {
                title: "No Junk Food",
                img: "/detailsPage2.webp",
              },
              {
                title: "Evening Walk",
                img: "/detailsPage3.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Build consistency with simple actions.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default HabitDetails;
