export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>

          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-900 border-r-orange-500 animate-spin"></div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Loading
          </h2>
          <p className="text-slate-600 text-sm">
            Please wait while we fetch your content...
          </p>
        </div>

        {/* Skeleton Loading Elements */}
        <div className="w-full max-w-md mt-8 space-y-4">
          {/* Skeleton Card 1 */}
          <div className="bg-white rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-slate-100 rounded w-full"></div>
          </div>

          {/* Skeleton Card 2 */}
          <div className="bg-white rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-2/3 mb-3"></div>
            <div className="h-3 bg-slate-100 rounded w-full"></div>
          </div>

          {/* Skeleton Card 3 */}
          <div className="bg-white rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-4/5 mb-3"></div>
            <div className="h-3 bg-slate-100 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
