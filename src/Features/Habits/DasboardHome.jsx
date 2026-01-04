import { motion } from "framer-motion";
import { Flame, CheckCircle, CalendarDays } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="opacity-70">Track your habits & stay consistent 🚀</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={<Flame />}
          title="Current Streak"
          value="7 Days"
          color="text-orange-500"
        />
        <StatCard
          icon={<CheckCircle />}
          title="Habits Completed"
          value="128"
          color="text-green-500"
        />
        <StatCard
          icon={<CalendarDays />}
          title="Active Habits"
          value="5"
          color="text-blue-500"
        />
      </div>

      {/* Motivation Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="card bg-base-100 shadow-xl rounded-2xl p-6"
      >
        <h3 className="text-xl font-semibold mb-2">💡 Today’s Insight</h3>
        <p className="opacity-80">
          Small daily habits compound into massive long-term success. Focus on
          consistency, not perfection.
        </p>
      </motion.div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="card bg-base-100 shadow-md rounded-2xl p-6 transition"
  >
    <div className={`mb-3 ${color}`}>{icon}</div>
    <h4 className="text-sm opacity-70">{title}</h4>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </motion.div>
);

export default DashboardHome;
