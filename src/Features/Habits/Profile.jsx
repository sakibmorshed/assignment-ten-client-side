import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="opacity-70">Manage your personal information</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="card bg-base-100 shadow-xl rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src=""
            alt="User"
            className="w-28 h-28 rounded-full object-cover border"
          />

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">Sakib Morshed</h2>
            <p className="opacity-70">sakib@example.com</p>

            <span className="badge badge-primary mt-2">Active User</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="opacity-70">Joined</p>
            <p className="font-medium">Jan 2025</p>
          </div>
          <div>
            <p className="opacity-70">Total Habits</p>
            <p className="font-medium">12</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
