"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import { useOpportunityStore } from "@/store/opportunity-store";

export default function HomePage() {
  const getStats = useOpportunityStore((state) => state.getStats);
  const stats = getStats();

  const statCards = [
    {
      icon: Briefcase,
      label: "Jobs",
      value: stats.jobs,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: GraduationCap,
      label: "Scholarships",
      value: stats.scholarships,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: Globe,
      label: "Remote",
      value: stats.remote,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
    },
    {
      icon: TrendingUp,
      label: "Training",
      value: stats.internships,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        {/* Floating Orbs*/}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm mb-8 shadow-lg"
            >
              <span>Demo Data - Educational Project</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Your Next
              <br />
              <span className="bg-linear-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                Big Opportunity
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connecting Afghan youth with jobs, internships, scholarships, and
              remote work opportunities. Your future starts here.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="group inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                href="/opportunities"
              >
                <Search className="w-5 h-5" />
                Browse Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all"
                href="/add-opportunity"
              >
                <PlusIcon className="w-5 h-5" />
                Share Opportunity
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-sm"
            >
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-primary-100">
                Trusted by Afghan youth across the country
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-0">
          <svg
            className="block w-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
              fill="currentColor"
              className="text-gray-50 dark:text-slate-950"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section*/}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 -mt-px relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div
                className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div
                suppressHydrationWarning
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Find exactly what you are looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Jobs", icon: Briefcase, color: "bg-blue-500" },
            { label: "Internships", icon: Users, color: "bg-green-500" },
            {
              label: "Scholarships",
              icon: GraduationCap,
              color: "bg-purple-500",
            },
            { label: "Remote Work", icon: Globe, color: "bg-teal-500" },
          ].map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                className="block bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                href={`/opportunities?category=${encodeURIComponent(cat.label)}`}
              >
                <div
                  className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {cat.label}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have an Opportunity to Share?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Help the community grow by sharing jobs, scholarships, or any
            opportunity that can change someone&apos;s life.
          </p>
          <Link
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            href="/add-opportunity"
          >
            Add Opportunity
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}
