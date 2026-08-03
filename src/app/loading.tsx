export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-slate-950 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 animate-spin rounded-full border-4 border-primary-200 dark:border-primary-900 border-t-primary-600 dark:border-t-primary-400" />
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
