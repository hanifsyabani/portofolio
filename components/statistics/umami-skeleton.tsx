export default function UmamiSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900" />
        ))}
      </div>
      <div className="h-[350px] w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 md:h-[400px]" />
    </div>
  );
}
