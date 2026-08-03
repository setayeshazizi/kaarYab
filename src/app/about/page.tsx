"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Globe, Info } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To connect Afghan youth with life-changing opportunities by centralizing jobs, scholarships, and training programs in one accessible platform.",
    color: "bg-primary-500",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "We serve students, fresh graduates, job seekers, and organizations across Afghanistan, building bridges between talent and opportunity.",
    color: "bg-green-500",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A future where every young Afghan has easy access to opportunities that help them grow, learn, and succeed in their careers.",
    color: "bg-yellow-500",
  },
  {
    icon: Globe,
    title: "Our Reach",
    description:
      "From Kabul to Kandahar, Herat to Mazar-i-Sharif, and beyond to remote online opportunities worldwide.",
    color: "bg-purple-500",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Info className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About KaarYab
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              KaarYab is a modern opportunity finder platform designed to help
              Afghan youth discover jobs, internships, scholarships, remote
              work, and skill-building opportunities in one place.
            </p>
          </motion.div>
        </div>
        {/* Wave*/}
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

      {/* Values*/}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-px">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            What drives us every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Problem & Solution */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Many young people in Afghanistan need better access to
                opportunities such as jobs, internships, scholarships, online
                work, training programs, and career resources.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Information is often scattered across different websites, social
                media pages, and groups. This makes it difficult for students
                and job seekers to find useful opportunities in one place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                KaarYab solves this problem by creating a clean and easy-to-use
                platform where people can browse, search, filter, save, and
                submit opportunities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                One centralized hub for all opportunities - from jobs in Kabul
                to remote scholarships available worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who Is This For?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Designed for the Afghan community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Students",
            "Fresh Graduates",
            "Job Seekers",
            "Women (Remote)",
            "Scholarship Seekers",
            "Organizations",
          ].map((user, i) => (
            <motion.div
              key={user}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-medium text-sm text-gray-900 dark:text-white">
                {user}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
