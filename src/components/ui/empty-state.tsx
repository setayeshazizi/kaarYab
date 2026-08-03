import { FileQuestion, FolderOpen, Heart } from "lucide-react";
import Button from "./button";
import Link from "next/link";

interface EmptyStateProps {
  type: "no-results" | "no-saved" | "no-opportunities";
}

export default function EmptyState({ type }: EmptyStateProps) {
  const configs = {
    "no-results": {
      icon: FileQuestion,
      title: "No opportunities found",
      description:
        "Try adjusting your search or filters to find what you are looking for.",
    },
    "no-saved": {
      icon: Heart,
      title: "No saved opportunities",
      description:
        "Start saving opportunities that interest you to view them here later.",
      action: (
        <Link href="/opportunities">
          <Button variant="primary">Browse Opportunities</Button>
        </Link>
      ),
    },
    "no-opportunities": {
      icon: FolderOpen,
      title: "No opportunities yet",
      description: "Be the first to add an opportunity to the platform.",
      action: (
        <Link href="/add-opportunity">
          <Button variant="primary">Add Opportunity</Button>
        </Link>
      ),
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Icon className="w-20 h-20 text-gray-300 dark:text-gray-600 mb-6" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {config.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        {config.description}
      </p>
      {"action" in config && config.action}
    </div>
  );
}
