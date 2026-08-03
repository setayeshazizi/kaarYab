"use client";

import { useOpportunityStore } from "@/store/opportunity-store";
import SearchFilter from "@/components/opportunities/search-filter";
import OpportunityCard from "@/components/opportunities/opportunity-card";
import EmptyState from "@/components/ui/empty-state";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function OpportunitiesPage() {
  const getFilteredOpportunities = useOpportunityStore(
    (state) => state.getFilteredOpportunities,
  );
  const opportunities = getFilteredOpportunities();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-5">
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
            All Opportunities
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
            Browse through all available opportunities. Use the filters to find
            exactly what you need.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-10">
          <SearchFilter />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {opportunities.length}
            </span>{" "}
            {opportunities.length === 1 ? "opportunity" : "opportunities"}
          </p>
        </div>

        {/* Grid */}
        {opportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, i) => (
              <OpportunityCard key={opp.id} opportunity={opp} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState type="no-results" />
        )}
      </div>
    </div>
  );
}
