"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function CenterSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-background p-8">
      {/* HEADER SKELETON */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-14 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="flex flex-col text-center md:text-start gap-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <Skeleton className="h-10 w-32 rounded-md" />
      </header>

      {/* HERO SKELETON */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-12 items-center">
        <div className="flex flex-col space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-10 w-1/2 rounded-md" />
        </div>

        <div className="flex items-center justify-end">
          <Skeleton className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-lg" />
        </div>
      </section>

      {/* SERVICES SKELETON */}
      <div className="mt-12 md:mt-24 space-y-10 flex flex-col items-center">
        <Skeleton className="h-8 w-56 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col p-6 border rounded-xl shadow-sm bg-card space-y-3 w-full"
            >
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-6 w-full " />
              <Skeleton className="h-4 w-full " />
              <Skeleton className="h-10 w-full rounded " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
