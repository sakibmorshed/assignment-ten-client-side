import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base opacity-80">
            Have questions, feedback, or ideas? We’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold">
              Contact Information
            </h2>

            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Whether you need support, have suggestions, or want to
              collaborate, feel free to reach out. Our team is always ready to
              help.
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <span>support@habitflow.app</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">⏰</span>
                <span>Support: 9 AM – 8 PM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card bg-base-100 shadow-xl rounded-2xl p-6 sm:p-8"
          >
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full text-sm sm:text-base"
              />

              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-28 sm:h-36 text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-full text-sm sm:text-base hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
