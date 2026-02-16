import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { FiArrowRight, FiCheckCircle, FiUsers, FiAward } from "react-icons/fi"; // add react-icons if not installed

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Build Daily Consistency",
      desc: "Simple daily check-ins with beautiful visualizations — watch your progress grow every day.",
      icon: "🔥",
      color: "from-rose-400 to-pink-500",
    },
    {
      title: "Streak-Based Motivation",
      desc: "Never break the chain. Streaks, reminders & gentle nudges keep discipline fun.",
      icon: "📈",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Community & Inspiration",
      desc: "Discover public habits, follow friends, and get inspired by real people’s journeys.",
      icon: "🌍",
      color: "from-violet-400 to-purple-500",
    },
  ];

  const stats = [
    { value: "4,200+", label: "Active Users", icon: FiUsers },
    { value: "1.3M", label: "Habits Tracked", icon: FiCheckCircle },
    { value: "365+", label: "Longest Streak", icon: FiAward },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden py-16 md:py-24">
      {/* Decorative floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-primary">HabitFlow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-xl mx-auto text-sm sm:text-base opacity-80"
          >
            Turn small daily wins into life-changing habits — with elegant
            tracking, streak power, and real human inspiration.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="card bg-base-100/40 backdrop-blur-xl border border-base-content/10 shadow-2xl rounded-3xl p-8 text-center"
            >
              <stat.icon className="text-5xl mx-auto mb-4 text-primary" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="opacity-70 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative card bg-base-100/30 backdrop-blur-2xl border border-base-content/5 shadow-xl rounded-3xl p-8 overflow-hidden"
            >
              {/* Gradient shine on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="text-5xl mb-6 relative z-10">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="opacity-80 relative z-10 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How it Works / Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How <span className="text-primary">HabitFlow</span> Works
          </h2>

          <div className="space-y-16 md:space-y-24 relative">
            {/* Vertical line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />

            {[
              {
                step: 1,
                title: "Choose or Create a Habit",
                desc: "Pick from thousands of public habits or build your own in seconds.",
              },
              {
                step: 2,
                title: "Track Daily with One Tap",
                desc: "Check in every day — beautiful calendars & streaks appear instantly.",
              },
              {
                step: 3,
                title: "Watch Progress & Stay Motivated",
                desc: "Visual stats, reminders, friends’ encouragement — momentum builds fast.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="card bg-base-100/50 backdrop-blur-xl border border-base-content/10 shadow-2xl rounded-3xl p-8 md:w-5/12 relative z-10">
                  <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-6">{step.title}</h3>
                  <p className="opacity-80">{step.desc}</p>
                </div>

                <div className="hidden md:block w-12 h-12 rounded-full bg-primary/20 backdrop-blur flex-shrink-0 z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build a Better You?
          </h2>
          <button
            onClick={() => navigate("/browsePublic")}
            className="btn btn-primary btn-lg px-12 text-lg gap-3 group hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
          >
            Start Your Journey
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
          </button>
          <p className="mt-6 opacity-70 text-sm">
            Join thousands turning small actions into lasting change — free
            forever.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
