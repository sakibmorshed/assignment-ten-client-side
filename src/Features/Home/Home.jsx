import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import {
  FaBrain,
  FaBullseye,
  FaChartLine,
  FaQuoteLeft,
  FaSmileBeam,
  FaStar,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        {/* Slider */}
        <div className=" rounded-xl overflow-hidden shadow-lg my-10 ">
          <Carousel />
        </div>

        {/* Slider end */}

        {/* card */}

        <div className="py-10">
          <h2 className="text-xl font-bold text-center py-10">
            Explore Recent Public Habits
          </h2>
        </div>

        {/* card end */}
        {/* build habit section */}
        <div className="py-10">
          <h2 className="text-xl font-bold text-center py-6">
            Why build Habit ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Consistent habits shape who we become. Small daily actions lead to
            lasting focus, happiness, and personal success.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <div className="card bg-base-100 shadow-green-400 hover:shadow-amber-500  w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Better Focus
                  <div className="badge badge-secondary">
                    <FaBullseye />
                  </div>
                </h2>
                <p className="text-gray-600 text-sm">
                  Building habits trains your mind to concentrate on what
                  matters most and ignore distractions.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline ">Focus</div>
                  <div className="badge badge-outline  ">Productive</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-green-400 hover:shadow-amber-500  w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Strong Mindset
                  <div className="badge badge-secondary">
                    {" "}
                    <FaBrain />
                  </div>
                </h2>
                <p className="text-gray-600 text-sm">
                  Good habits strengthen your discipline and help you stay
                  positive even through tough times.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline ">Deep Work</div>
                  <div className="badge badge-outline ">Mono Task</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-green-400 hover:shadow-amber-500  w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Reduced Stress
                  <div className="badge badge-secondary">
                    {" "}
                    <FaSmileBeam />
                  </div>
                </h2>
                <p className="text-gray-600 text-sm">
                  Having structured routines keeps life balanced, reduces chaos,
                  and boosts your mental calmness.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Mindful</div>
                  <div className="badge badge-outline">Prioritize</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-green-400 hover:shadow-amber-500  w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  Continuous Growth
                  <div className="badge badge-secondary">
                    {" "}
                    <FaChartLine />
                  </div>
                </h2>
                <p className="text-gray-600 text-sm">
                  Every small habit compounds over time, helping you grow
                  smarter, healthier, and more confident.
                </p>

                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Pomodoro</div>
                  <div className="badge badge-outline">Delegate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* build habit section end */}

        {/* How it starts section starts ! */}
        <div>
          <h2 className="text-xl font-bold text-center py-6">
            “How It Works” – Step-by-Step Guide Section
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Build better habits in just a few simple steps.
          </p>

          <div>
            <div className="overflow-x-auto rounded-box border border-base-content/6 bg-base-100 my-10">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="border-b-cyan-300">
                    <th>Step</th>
                    <th>Title</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="border-b-cyan-300 hover:border-amber-400">
                    <th>1</th>

                    <td>Set Your Goals</td>
                    <td>
                      Choose what habits you want to improve or track daily.
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-b-cyan-300 hover:border-amber-400">
                    <th>2</th>
                    <td>Track Progress</td>
                    <td>
                      Mark your habits every day and build streaks easily.
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr className="border-b-cyan-300 hover:border-amber-400">
                    <th>3</th>
                    <td>Stay Consistent</td>
                    <td>
                      Get reminders and stay motivated to never miss a day.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* end */}

        {/* Success stories start */}

        <section className="py-16 bg-gray-50 my-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how Habit Tracker has helped people stay consistent, focused,
            and reach their goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {/* Card 1 */}
            <div className="bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 relative">
              <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              <p className="text-gray-700 mb-6">
                Using Habit Tracker consistently has completely changed how I
                manage my daily tasks. My focus and productivity have
                skyrocketed!
              </p>
              <div className="flex items-center mt-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mr-4 text-xl">
                  <FaStar />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Sara Ahmed
                  </h4>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 relative">
              <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              <p className="text-gray-700 mb-6">
                Tracking habits made me more disciplined. Small wins every day
                keep me motivated and stress-free.
              </p>
              <div className="flex items-center mt-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 mr-4 text-xl">
                  <FaStar />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Rafi Khan
                  </h4>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 relative">
              <FaQuoteLeft className="absolute top-5 left-1 text-gray-200 text-3xl" />
              <p className="text-gray-700 mb-6">
                I finally built a routine that sticks! Seeing my streaks grow
                gives me so much confidence and energy.
              </p>
              <div className="flex items-center mt-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mr-4 text-xl">
                  <FaStar />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Tania Roy
                  </h4>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success stories end */}
      </div>
    </>
  );
};

export default Home;
