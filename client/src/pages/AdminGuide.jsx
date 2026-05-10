import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiUsers,
  FiBook,
  FiRefreshCw,
  FiGrid,
  FiAlertCircle,
  FiEye,
  FiEyeOff,
  FiCopy,
  FiCheck,
  FiArrowRight,
  FiSettings,
  FiTrash2,
  FiEdit2,
  FiDollarSign,
} from "react-icons/fi";

const adminFeatures = [
  {
    icon: FiGrid,
    title: "Dashboard Overview",
    desc: "View real-time stats: total users, books, borrows, active borrows, overdue books, and fines collected.",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: FiBook,
    title: "Manage Books",
    desc: "Add new books with cover image upload to Cloudinary. Edit title, author, category, copies, tags, and more. Delete books from the collection.",
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    icon: FiUsers,
    title: "Manage Users",
    desc: "View all registered users, search by name/email, promote/demote users to Admin role, or delete accounts.",
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    icon: FiRefreshCw,
    title: "All Borrows",
    desc: "Monitor all borrowing activity. Filter by status (borrowed, returned, overdue). See user, book, dates, and fines.",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: FiShield,
    title: "Role Management",
    desc: "Toggle any user's role between 'User' and 'Admin' with one click from the Manage Users panel.",
    color: "bg-orange-500/20 text-orange-400",
  },
  {
    icon: FiDollarSign,
    title: "Fine Tracking",
    desc: "View total fines collected across all borrows. Fines are ₹10/day for overdue returns, auto-calculated on return.",
    color: "bg-yellow-500/20 text-yellow-400",
  },
];

const adminActions = [
  { icon: FiEdit2, label: "Add/Edit/Delete books" },
  { icon: FiUsers, label: "Promote users to admin" },
  { icon: FiTrash2, label: "Delete user accounts" },
  { icon: FiAlertCircle, label: "Monitor overdue returns" },
  { icon: FiDollarSign, label: "Track all fines" },
  { icon: FiSettings, label: "Full system oversight" },
];

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-400 transition-colors"
      title="Copy"
    >
      {copied ? (
        <FiCheck size={14} className="text-green-400" />
      ) : (
        <FiCopy size={14} />
      )}
    </button>
  );
};

const AdminGuide = () => {
  const [showPass, setShowPass] = useState(false);

  const email = "koremanthanp@gmail.com";
  const password = "mk123123";

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-slide-up">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
          <FiShield size={14} />
          Admin Reference
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Admin Panel Guide
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Test admin features using the credentials below. This page documents
          what admins can do in SmartLib.
        </p>
      </div>

      {/* Credentials Card */}
      <div className="card border-2 border-indigo-500/40 bg-indigo-500/5 mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <FiShield className="text-indigo-400" size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              Test Admin Credentials
            </h2>
            <p className="text-gray-400 text-xs">
              Use these to log in as admin
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Email</p>
              <p className="font-mono text-gray-200 font-medium">{email}</p>
            </div>
            <CopyButton text={email} />
          </div>

          <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
            <div className="flex-1">
              <p className="text-xs text-gray-400 mb-0.5">Password</p>
              <p className="font-mono text-gray-200 font-medium">
                {showPass ? password : "••••••••••"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPass(!showPass)}
                className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-400 transition-colors"
              >
                {showPass ? <FiEyeOff size={14} /> : <FiEye size={14} />}
              </button>
              <CopyButton text={password} />
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-indigo-500/20">
          <Link
            to="/login"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm"
          >
            Go to Login <FiArrowRight size={14} />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            ⚠️ After logging in, you'll see a "Dashboard" link in the navbar and
            an admin dropdown option.
          </p>
        </div>
      </div>

      {/* Admin Workflow Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Admin Workflow
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Step-by-step: what to do after logging in as admin
        </p>

        <div className="space-y-4">
          {[
            {
              n: "1",
              title: "Login & Access Dashboard",
              desc: 'After login, click the user avatar in the top-right navbar. You\'ll see "Admin Panel" in the dropdown. Click it, or use the "Dashboard" navbar link.',
              accent: "border-blue-500/30",
            },
            {
              n: "2",
              title: "View System Stats",
              desc: "The Dashboard shows live stats: total users, books, borrows, active borrows, overdue books, and total fines collected. Quick action buttons navigate to each section.",
              accent: "border-indigo-500/30",
            },
            {
              n: "3",
              title: "Add or Edit Books",
              desc: 'Go to Admin → Manage Books. Click "Add New Book" to add a book with title, author, ISBN, category, copies, and optional cover image. Use the edit (pencil) icon to update existing books.',
              accent: "border-purple-500/30",
            },
            {
              n: "4",
              title: "Manage Users",
              desc: "Go to Admin → Manage Users. Search users by name or email. Use the shield icon to toggle a user's role (User ↔ Admin). Use the trash icon to delete a user permanently.",
              accent: "border-green-500/30",
            },
            {
              n: "5",
              title: "Monitor All Borrows",
              desc: "Go to Admin → All Borrows. Filter by status: Borrowed, Returned, or Overdue. See user info, book title, borrow date, due date, current status, and any fines.",
              accent: "border-orange-500/30",
            },
          ].map((step) => (
            <div
              key={step.n}
              className={`card flex gap-4 border-l-4 ${step.accent}`}
            >
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 shrink-0 mt-0.5">
                {step.n}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Features Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Admin Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="card hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${f.color}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions Summary */}
      <div className="card border border-gray-700 bg-gray-900">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <FiSettings className="text-indigo-500" /> Quick Actions Available to
          Admin
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {adminActions.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <Icon className="text-indigo-500 shrink-0" size={14} />
                {a.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
