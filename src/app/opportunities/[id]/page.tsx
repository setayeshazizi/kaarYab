"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Building2,
  Clock,
  Globe,
  ArrowLeft,
  Heart,
  ExternalLink,
  Share2,
} from "lucide-react";
import { useOpportunityStore } from "@/store/opportunity-store";
import {
  getDaysRemaining,
  getDeadlineStatus,
  getCategoryColor,
  getDeadlineBadgeColor,
  formatDate,
} from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";

export default function OpportunityDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const opportunity = useOpportunityStore((state) =>
    state.getOpportunityById(id),
  );
  const toggleSave = useOpportunityStore((state) => state.toggleSave);
  const saved = useOpportunityStore((state) => state.savedIds.includes(id));

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Opportunity not found
          </p>
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Opportunities
          </Link>
        </div>
      </div>
    );
  }

  const daysRemaining = getDaysRemaining(opportunity.deadline);
  const deadlineStatus = getDeadlineStatus(opportunity.deadline);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: opportunity.title,
        text: opportunity.description,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleSave = () => {
    toggleSave(opportunity.id);
    if (!saved) {
      toast.success("Opportunity saved!");
    } else {
      toast.success("Opportunity removed from saved");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </motion.button>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(opportunity.category)}`}
              >
                {opportunity.category}
              </span>
              {opportunity.isFeatured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                  <span className="text-white">★</span>
                  Featured
                </span>
              )}
              {deadlineStatus !== "ok" && (
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getDeadlineBadgeColor(deadlineStatus)}`}
                >
                  <Clock className="w-3 h-3" />
                  {deadlineStatus === "expired"
                    ? "Expired"
                    : `${daysRemaining} days left`}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={handleSave}
                className={`p-2.5 rounded-xl transition-all ${
                  saved
                    ? "bg-red-50 dark:bg-red-950 text-red-500"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                title={saved ? "Remove from saved" : "Save opportunity"}
              >
                <Heart
                  className={`w-5 h-5 transition-all ${saved ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {opportunity.title}
          </h1>

          {/* Organization */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
            <Building2 className="w-5 h-5" />
            <span className="text-lg font-medium">
              {opportunity.organization}
            </span>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {opportunity.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Type</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {opportunity.type}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Deadline
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {formatDate(opportunity.deadline)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Days Remaining
                </p>
                <p
                  className={`font-medium ${
                    daysRemaining <= 3
                      ? "text-red-500"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {daysRemaining > 0 ? `${daysRemaining} days` : "Expired"}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {opportunity.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Requirements
            </h2>
            <ul className="space-y-2">
              {opportunity.requirements.map((req, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  {req}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {opportunity.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <a
            href={opportunity.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            Apply Now
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
