import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-slate-950">
      {/* 404 Number */}
      <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved to
        another URL.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          <Search className="w-5 h-5" />
          Browse Opportunities
        </Link>
      </div>
    </div>
  );
}
