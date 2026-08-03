"use client";

import Link from "next/link";
import { Briefcase, MapPin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto">
      {/* Top Gradient Line */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* cols on desktop */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-linear-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                KaarYab
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 max-w-sm">
              Connecting Afghan youth with jobs, internships, scholarships, and
              remote opportunities — all in one place.
            </p>
            {/* Mini Contact Info */}
            <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                contact@kaaryab.af
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                Kabul, Afghanistan
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/opportunities"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                >
                  Opportunities
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/saved"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Saved
                </Link>
              </li>
              <li>
                <Link
                  href="/add-opportunity"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Add Opportunity
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {[
                "Jobs",
                "Internships",
                "Scholarships",
                "Remote Work",
                "Training",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/opportunities?category=${encodeURIComponent(cat)}`}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Back to Top - Desktop */}
            <button
              onClick={scrollToTop}
              className="mt-6 hidden lg:inline-flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowUpRight className="w-3 h-3 -rotate-45" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {currentYear} KaarYab Afghanistan</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full font-medium">
              Demo Project
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with love for Afghanistan</span>
          </div>
        </div>

        {/* Back to Top - Mobile */}
        <button
          onClick={scrollToTop}
          className="mt-4 w-full lg:hidden text-center text-xs text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
