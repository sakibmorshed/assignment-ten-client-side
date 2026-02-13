import React, { useEffect, useRef } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {
  FaBrain,
  FaBullseye,
  FaChartLine,
  FaQuoteLeft,
  FaSmileBeam,
  FaStar,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import LatestHabits from "../../Components/LatestHabits";
import { Typewriter } from "react-simple-typewriter";
import Container from "../../Components/Container/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from "../../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const latestHabitsPromise = fetch(
  "https://habit-server-app.vercel.app/latestHabits"
).then((res) => res.json());

//framer motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // delay between card animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Home = () => {
  const shouldReduce = useReducedMotion();
  const tableRef = useRef(null);
  const successStoriesRef = useRef(null);

  useEffect(() => {
    // GSAP animations for table rows
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current.querySelectorAll("tbody tr"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // GSAP animations for success stories
    if (successStoriesRef.current) {
      gsap.fromTo(
        successStoriesRef.current.querySelectorAll(".success-card"),
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: successStoriesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <>
      <Container>
        {/* Hero Section with Enhanced Animations */}
        <motion.div 
          className="text-center my-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build Better Habits With{" "}
            <motion.span 
              className="text-primary"
              animate={{ 
                textShadow: [
                  "0 0 0px #3b82f6",
                  "0 0 10px #3b82f6",
                  "0 0 0px #3b82f6"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Typewriter
                words={[
                  "Consistency",
                  "Discipline",
                  "Productivity",
                  "Daily Streaks",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Slider Section */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow-lg my-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <Carousel />
        </motion.div>

        {/* Latest Habits Section with Animation */}
        <motion.div 
          className="py-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-xl font-bold text-center py-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Recent Public Habits
          </motion.h2>

          <LatestHabits latestHabitsPromise={latestHabitsPromise} />
        </motion.div>

        {/* Enhanced Why Build Habit Section */}
        <motion.div 
          className="py-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-xl font-bold text-center py-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why build Habit ?
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Consistent habits shape who we become. Small daily actions lead to
            lasting focus, happiness, and personal success.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6"
            variants={shouldReduce ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              variants={shouldReduce ? {} : itemVariants}
              whileHover={shouldReduce ? {} : { 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body">
                <motion.h2 
                  className="card-title"
                  whileHover={{ color: "#3b82f6" }}
                >
                  Better Focus
                  <motion.div 
                    className="badge badge-secondary"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaBullseye />
                  </motion.div>
                </motion.h2>
                <p className="text-gray-600 text-sm">
                  Building habits trains your mind to concentrate on what
                  matters most and ignore distractions.
                </p>
                <div className="card-actions justify-end">
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                  >
                    Focus
                  </motion.div>
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "white" }}
                  >
                    Productive
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              variants={shouldReduce ? {} : itemVariants}
              whileHover={shouldReduce ? {} : { 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body">
                <motion.h2 
                  className="card-title"
                  whileHover={{ color: "#8b5cf6" }}
                >
                  Strong Mindset
                  <motion.div 
                    className="badge badge-secondary"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaBrain />
                  </motion.div>
                </motion.h2>
                <p className="text-gray-600 text-sm">
                  Good habits strengthen your discipline and help you stay
                  positive even through tough times.
                </p>
                <div className="card-actions justify-end">
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6", color: "white" }}
                  >
                    Deep Work
                  </motion.div>
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#f59e0b", color: "white" }}
                  >
                    Mono Task
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              variants={shouldReduce ? {} : itemVariants}
              whileHover={shouldReduce ? {} : { 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body">
                <motion.h2 
                  className="card-title"
                  whileHover={{ color: "#f59e0b" }}
                >
                  Reduced Stress
                  <motion.div 
                    className="badge badge-secondary"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaSmileBeam />
                  </motion.div>
                </motion.h2>
                <p className="text-gray-600 text-sm">
                  Having structured routines keeps life balanced, reduces chaos,
                  and boosts your mental calmness.
                </p>
                <div className="card-actions justify-end">
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#06b6d4", color: "white" }}
                  >
                    Mindful
                  </motion.div>
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#84cc16", color: "white" }}
                  >
                    Prioritize
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              variants={shouldReduce ? {} : itemVariants}
              whileHover={shouldReduce ? {} : { 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body">
                <motion.h2 
                  className="card-title"
                  whileHover={{ color: "#10b981" }}
                >
                  Continuous Growth
                  <motion.div 
                    className="badge badge-secondary"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaChartLine />
                  </motion.div>
                </motion.h2>
                <p className="text-gray-600 text-sm">
                  Every small habit compounds over time, helping you grow
                  smarter, healthier, and more confident.
                </p>

                <div className="card-actions justify-end">
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#ef4444", color: "white" }}
                  >
                    Pomodoro
                  </motion.div>
                  <motion.div 
                    className="badge badge-outline"
                    whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6", color: "white" }}
                  >
                    Delegate
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced How It Works Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-xl font-bold text-center py-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            "How It Works" – Step-by-Step Guide Section
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Build better habits in just a few simple steps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto rounded-box border border-base-content/6 bg-base-100 my-10">
              <table className="table" ref={tableRef}>
                <motion.thead
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <tr className="border-b-cyan-300">
                    <th>Step</th>
                    <th>Title</th>
                    <th>Short Description</th>
                  </tr>
                </motion.thead>
                <tbody>
                  <motion.tr 
                    className="border-b-cyan-300 hover:border-amber-400 cursor-pointer"
                    whileHover={{ 
                      backgroundColor: "#fef3c7", 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.th
                      whileHover={{ scale: 1.2, color: "#f59e0b" }}
                      transition={{ duration: 0.2 }}
                    >
                      1
                    </motion.th>
                    <td>Set Your Goals</td>
                    <td>Choose what habits you want to improve or track daily.</td>
                  </motion.tr>
                  
                  <motion.tr 
                    className="border-b-cyan-300 hover:border-amber-400 cursor-pointer"
                    whileHover={{ 
                      backgroundColor: "#fef3c7", 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.th
                      whileHover={{ scale: 1.2, color: "#f59e0b" }}
                      transition={{ duration: 0.2 }}
                    >
                      2
                    </motion.th>
                    <td>Track Progress</td>
                    <td>Mark your habits every day and build streaks easily.</td>
                  </motion.tr>
                  
                  <motion.tr 
                    className="border-b-cyan-300 hover:border-amber-400 cursor-pointer"
                    whileHover={{ 
                      backgroundColor: "#fef3c7", 
                      scale: 1.02,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.th
                      whileHover={{ scale: 1.2, color: "#f59e0b" }}
                      transition={{ duration: 0.2 }}
                    >
                      3
                    </motion.th>
                    <td>Stay Consistent</td>
                    <td>Get reminders and stay motivated to never miss a day.</td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Success Stories Section */}
        <motion.section 
          className="py-16 bg-gray-50 my-10 rounded-3xl"
          ref={successStoriesRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how Habit Tracker has helped people stay consistent, focused,
            and reach their goals.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {/* Enhanced Card 1 */}
            <motion.div 
              className="success-card bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform duration-300 relative"
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              </motion.div>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Using Habit Tracker consistently has completely changed how I
                manage my daily tasks. My focus and productivity have
                skyrocketed!
              </motion.p>
              <div className="flex items-center mt-4">
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mr-4 text-xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaStar />
                </motion.div>
                <div>
                  <motion.h4 
                    className="text-lg font-semibold text-gray-800"
                    whileHover={{ color: "#10b981" }}
                  >
                    Sara Ahmed
                  </motion.h4>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Card 2 */}
            <motion.div 
              className="success-card bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform duration-300 relative"
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              </motion.div>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Tracking habits made me more disciplined. Small wins every day
                keep me motivated and stress-free.
              </motion.p>
              <div className="flex items-center mt-4">
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 mr-4 text-xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaStar />
                </motion.div>
                <div>
                  <motion.h4 
                    className="text-lg font-semibold text-gray-800"
                    whileHover={{ color: "#ec4899" }}
                  >
                    Rafi Khan
                  </motion.h4>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Card 3 */}
            <motion.div 
              className="success-card bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform duration-300 relative"
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              </motion.div>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I finally built a routine that sticks! Seeing my streaks grow
                gives me so much confidence and energy.
              </motion.p>
              <div className="flex items-center mt-4">
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mr-4 text-xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaStar />
                </motion.div>
                <div>
                  <motion.h4 
                    className="text-lg font-semibold text-gray-800"
                    whileHover={{ color: "#f59e0b" }}
                  >
                    Tania Roy
                  </motion.h4>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </Container>
    </>
  );
};

export default Home;