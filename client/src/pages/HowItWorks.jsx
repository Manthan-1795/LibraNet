import { Link } from "react-router-dom";
import {
  FiUserPlus,
  FiMail,
  FiBook,
  FiSearch,
  FiBookOpen,
  FiRotateCcw,
  FiStar,
  FiUser,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
} from "react-icons/fi";

const steps = [
  {
    step: "01",
    icon: FiUserPlus,
    title: "Create an Account",
    desc: "Register with your name, email, and a password (min 8 characters). You'll receive a 6-digit OTP to verify your email.",
    color: "bg-indigo-500/20 text-indigo-400",
    accent: "border-indigo-500/30",
  },
  {
    step: "02",
    icon: FiMail,
    title: "Verify Your Email",
    desc: "Enter the 6-digit OTP sent to your email. OTP expires in 10 minutes. Once verified, you're automatically logged in.",
    color: "bg-purple-500/20 text-purple-400",
    accent: "border-purple-500/30",
  },
  {
    step: "03",
    icon: FiSearch,
    title: "Browse & Search Books",
    desc: "Explore our collection. Filter by category (Fiction, Science, History, etc.) or search by title, author, or tags.",
    color: "bg-blue-500/20 text-blue-400",
    accent: "border-blue-500/30",
  },
  {
    step: "04",
    icon: FiBookOpen,
    title: "Borrow a Book",
    desc: "Click on any available book and hit 'Borrow This Book'. Each borrow is for 14 days. You can only borrow one copy of each book at a time.",
    color: "bg-green-500/20 text-green-400",
    accent: "border-green-500/30",
  },
  {
    step: "05",
    icon: FiRotateCcw,
    title: "Return the Book",
    desc: "Go to 'My Borrows', find the book, and click 'Return Book'. If returned after 14 days, a fine of ₹10/day applies.",
    color: "bg-orange-500/20 text-orange-400",
    accent: "border-orange-500/30",
  },
  {
    step: "06",
    icon: FiStar,
    title: "Leave a Review",
    desc: "After reading, visit the book's page and submit a star rating (1–5) with an optional comment. You can delete your own review anytime.",
    color: "bg-yellow-500/20 text-yellow-400",
    accent: "border-yellow-500/30",
  },
];

const features = [
  { icon: FiUser, label: "Update profile name & avatar" },
  { icon: FiBook, label: "Change your password anytime" },
  { icon: FiClock, label: "View full borrow history" },
  { icon: FiAlertCircle, label: "See overdue alerts & fines" },
  { icon: FiCheckCircle, label: "Track returned books" },
  { icon: FiStar, label: "Write & manage your reviews" },
];

const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-slide-up">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
          <FiBook size={14} />
          User Guide
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          How SmartLib Works
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to know to borrow books, manage your account, and
          make the most of SmartLib.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-16">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className={`card flex flex-col sm:flex-row gap-5 border-l-4 ${s.accent} hover:-translate-y-0.5 transition-transform duration-200`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${s.color}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-gray-500 tracking-widest">
                      STEP {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fine Policy */}
      <div className="card border border-red-500/20 bg-red-500/5 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0">
            <FiAlertCircle className="text-red-400" size={18} />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Fine Policy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Books must be returned within{" "}
              <strong className="text-gray-200">14 days</strong>. Overdue
              returns incur a fine of{" "}
              <strong className="text-gray-200">₹10 per day</strong>. Fines are
              shown in your My Borrows page and settled automatically on return.
            </p>
          </div>
        </div>
      </div>

      {/* Account Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          What You Can Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card flex items-center gap-3 p-4">
                <div className="w-9 h-9 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-indigo-400" size={16} />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center glass p-10">
        <h2 className="text-2xl font-bold text-white mb-3">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-6">
          Create your free account and start exploring the library.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/register"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3"
          >
            Get Started <FiArrowRight />
          </Link>
          <Link
            to="/books"
            className="btn-outline inline-flex items-center gap-2 px-8 py-3"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
