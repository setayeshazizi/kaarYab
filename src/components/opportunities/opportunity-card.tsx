"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Clock, Heart } from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import {
  getDaysRemaining,
  getDeadlineStatus,
  getCategoryColor,
  getDeadlineBadgeColor,
} from "@/lib/utils";
import { useOpportunityStore } from "@/store/opportunity-store";

interface OpportunityCardProps {
  opportunity: Opportunity;
  index?: number;
}

export default function OpportunityCard({
  opportunity,
  index = 0,
}: OpportunityCardProps) {
  const toggleSave = useOpportunityStore((state) => state.toggleSave);
  const savedIds = useOpportunityStore((state) => state.savedIds);
  const saved = savedIds.includes(opportunity.id);
  const daysRemaining = getDaysRemaining(opportunity.deadline);
  const deadlineStatus = getDeadlineStatus(opportunity.deadline);

  const deadlineLabels = {
    expired: "Expired",
    urgent: `${daysRemaining} days left`,
    soon: `${daysRemaining} days left`,
    ok: `${daysRemaining} days left`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {opportunity.isFeatured && (
        <div className="absolute -top-3.5 left-6 bg-linear-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30 z-20 flex items-center gap-1">
          <span className="text-white/90">★</span>
          Featured
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleSave(opportunity.id);
        }}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-300 dark:text-gray-600 hover:text-red-400 dark:hover:text-red-400 transition-all duration-200 z-10"
        aria-label={saved ? "Remove from saved" : "Save opportunity"}
      >
        <Heart
          className={`w-5 h-5 transition-all duration-200 ${
            saved ? "fill-red-400 text-red-400 scale-110" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div className="space-y-5 flex-1">
        {/* Category & Deadline */}
        <div className="flex items-center gap-2 flex-wrap pr-8">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(opportunity.category)}`}
          >
            {opportunity.category}
          </span>
          {deadlineStatus !== "ok" && (
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getDeadlineBadgeColor(deadlineStatus)}`}
            >
              <Clock className="w-3 h-3" />
              {deadlineLabels[deadlineStatus]}
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/opportunities/${opportunity.id}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 leading-snug mb-2">
            {opportunity.title}
          </h3>
        </Link>

        {/* Organization */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Building2 className="w-4 h-4 shrink-0" />
          <span className="text-sm truncate">{opportunity.organization}</span>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-100 dark:border-gray-700" />

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span>{opportunity.type}</span>
          </div>
        </div>

        {/* Deadline Info */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span>
            {new Date(opportunity.deadline).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-700 transition-all shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 group/btn"
      >
        View Details
      </Link>
    </motion.div>
  );
}
