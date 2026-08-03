import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getDaysRemaining(deadline: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(deadline);
  deadlineDate.setHours(0, 0, 0, 0);
  const diffTime = deadlineDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getDeadlineStatus(
  deadline: string,
): "expired" | "urgent" | "soon" | "ok" {
  const days = getDaysRemaining(deadline);
  if (days < 0) return "expired";
  if (days <= 3) return "urgent";
  if (days <= 7) return "soon";
  return "ok";
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Job: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    Internship:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    Scholarship:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    "Online Course":
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
    "Remote Work":
      "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
    "Training Program":
      "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    "Volunteer Work":
      "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  );
}

export function getDeadlineBadgeColor(status: string): string {
  const colors: Record<string, string> = {
    expired: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    urgent:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 animate-pulse",
    soon: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    ok: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  };
  return colors[status] || "";
}
