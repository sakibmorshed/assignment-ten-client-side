import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">HabitFlow</span>
          </h1>
          <p className="max-w-2xl mx-auto opacity-80">
            HabitFlow helps you build consistency, track progress, and turn
            small daily actions into powerful long-term habits.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Build Daily Consistency",
              desc: "Track habits daily and visualize your progress to stay motivated.",
              icon: "🔥",
            },
            {
              title: "Streak-Based Motivation",
              desc: "Maintain streaks and build discipline through consistency.",
              icon: "📈",
            },
            {
              title: "Community Driven",
              desc: "Explore public habits and get inspired by others.",
              icon: "🌍",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="card bg-base-100 shadow-lg rounded-2xl p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="opacity-80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Start Building Better Habits Today
          </h2>
          <button className="btn btn-primary btn-wide hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
