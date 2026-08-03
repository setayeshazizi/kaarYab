"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Globe,
  Clock,
  TrendingUp,
  Users,
  Pencil,
  Trash2,
  LayoutDashboard,
} from "lucide-react";
import { useOpportunityStore } from "@/store/opportunity-store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CategoryChart from "@/components/dashboard/category-chart";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const getStats = useOpportunityStore((state) => state.getStats);
  const opportunities = useOpportunityStore((state) => state.opportunities);
  const deleteOpportunity = useOpportunityStore(
    (state) => state.deleteOpportunity,
  );
  const stats = getStats();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleDelete = (id: string, title: string) => {
    if (window.confirm('Are you sure you want to delete "' + title + '"?')) {
      deleteOpportunity(id);
      toast.success("Opportunity deleted");
    }
  };

  const statCards = [
    {
      label: "Total",
      value: stats.total,
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      label: "Jobs",
      value: stats.jobs,
      icon: Briefcase,
      color: "bg-green-500",
    },
    {
      label: "Internships",
      value: stats.internships,
      icon: Users,
      color: "bg-purple-500",
    },
    {
      label: "Scholarships",
      value: stats.scholarships,
      icon: GraduationCap,
      color: "bg-yellow-500",
    },
    { label: "Remote", value: stats.remote, icon: Globe, color: "bg-teal-500" },
    {
      label: "Expiring",
      value: stats.expiringSoon,
      icon: Clock,
      color: "bg-red-500",
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-5">
            <LayoutDashboard className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
            Overview and manage all opportunities in one place
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-lg text-center"
            >
              <div
                className={
                  "w-10 h-10 " +
                  stat.color +
                  " rounded-xl flex items-center justify-center mx-auto mb-2"
                }
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="mb-8">
          <CategoryChart />
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg overflow-x-auto"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Manage Opportunities
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">
                  Title
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  Category
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400 hidden md:table-cell">
                  Deadline
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((opp) => (
                <tr
                  key={opp.id}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                    {opp.title}
                  </td>
                  <td className="py-3 px-4 hidden sm:table-cell">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                      {opp.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400 hidden md:table-cell">
                    {opp.deadline}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          router.push("/edit-opportunity/" + opp.id)
                        }
                        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(opp.id, opp.title)}
                        className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
