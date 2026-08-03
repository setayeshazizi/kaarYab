"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center bg-gray-50 dark:bg-slate-950">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Something went wrong!
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg"
      >
        Try again
      </button>
    </div>
  );
}
