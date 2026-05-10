import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FiBookOpen,
  FiShield,
  FiArrowRight,
  FiStar,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    icon: FiBookOpen,
    title: "Vast Collection",
    desc: "Browse thousands of books across all genres with powerful search and filtering.",
    color:
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
  },
  {
    icon: FiClock,
    title: "Easy Borrowing",
    desc: "Borrow books in one click with 14-day lending periods and automatic reminders.",
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    icon: FiStar,
    title: "Reviews & Ratings",
    desc: "Read and write reviews, rate books, and help the community discover great reads.",
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
  },
  {
    icon: FiShield,
    title: "Secure Access",
    desc: "JWT-protected accounts with OTP verification and role-based access control.",
    color:
      "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
  },
];

const stats = [
  { label: "Books Available", value: "1000+" },
  { label: "Active Members", value: "500+" },
  { label: "Categories", value: "10+" },
  { label: "Daily Borrows", value: "50+" },
];

const Home = () => {
  const { isAuthenticated } = useSelector((s) => s.auth);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/40 dark:via-gray-950 dark:to-purple-950/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl dark:bg-indigo-600/8" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl dark:bg-purple-600/8" />

        <div className="relative max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-700 dark:bg-indigo-600/10 dark:border-indigo-500/20 dark:text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <FiBookOpen size={14} />
            Smart Library Management System
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Your Digital{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Library
            </span>{" "}
            Awaits
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover, borrow, and manage books effortlessly. A modern library
            experience built for the digital age with smart features and
            beautiful design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/books"
              className="btn-primary flex items-center gap-2 text-base px-8 py-3.5"
            >
              Browse Books <FiArrowRight />
            </Link>
            {!isAuthenticated && (
              <Link
                to="/register"
                className="btn-outline flex items-center gap-2 text-base px-8 py-3.5"
              >
                Get Started Free
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-gray-200 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                SmartLib?
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Everything you need for a modern library experience, all in one
              place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${f.color}`}
                >
                  <f.icon className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {!isAuthenticated && (
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center glass p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start reading?
            </h2>
            <p className="text-gray-500 mb-8">
              Join thousands of readers already using SmartLib.
            </p>
            <Link
              to="/register"
              className="btn-primary px-10 py-3.5 text-base inline-flex items-center gap-2"
            >
              Create Free Account <FiArrowRight />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
