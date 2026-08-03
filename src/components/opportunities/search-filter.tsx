"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useOpportunityStore } from "@/store/opportunity-store";
import { categories, locations } from "@/data/opportunities";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchFilter() {
  const searchTerm = useOpportunityStore((s) => s.searchTerm);
  const setSearchTerm = useOpportunityStore((s) => s.setSearchTerm);
  const selectedCategory = useOpportunityStore((s) => s.selectedCategory);
  const setSelectedCategory = useOpportunityStore((s) => s.setSelectedCategory);
  const selectedLocation = useOpportunityStore((s) => s.selectedLocation);
  const setSelectedLocation = useOpportunityStore((s) => s.setSelectedLocation);
  const selectedType = useOpportunityStore((s) => s.selectedType);
  const setSelectedType = useOpportunityStore((s) => s.setSelectedType);
  const showFeatured = useOpportunityStore((s) => s.showFeatured);
  const setShowFeatured = useOpportunityStore((s) => s.setShowFeatured);

  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedLocation !== "All" ||
    selectedType !== "All" ||
    showFeatured;

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSelectedType("All");
    setShowFeatured(false);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-400" />
        <input
          type="text"
          placeholder="Search opportunities by title, organization, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 shadow-sm hover:border-gray-300 dark:hover:border-slate-700 transition-all"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all duration-200 ${
            hasActiveFilters
              ? "bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 shadow-sm"
              : "text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-slate-400"
          }`}
          aria-label="Toggle filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-slate-100 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 flex items-center gap-1 font-medium transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear all
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedCategory === cat
                          ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105"
                          : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedLocation === loc
                          ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105"
                          : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {["All", "Remote", "On-site", "Hybrid"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedType === type
                          ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105"
                          : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowFeatured(!showFeatured)}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    showFeatured
                      ? "bg-primary-600"
                      : "bg-gray-300 dark:bg-slate-700"
                  }`}
                  role="switch"
                  aria-checked={showFeatured}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                      showFeatured ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Featured opportunities only
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
