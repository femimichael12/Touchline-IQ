import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-neutral-800 rounded ${className}`} />
  );
};

export const MatchCardSkeleton: React.FC = () => {
  return (
    <div className="bg-neutral-900 border border-neutral-800/60 rounded-lg p-5 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-12" />
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-3 w-1/3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="text-center w-1/3 flex flex-col items-center justify-center">
          <Skeleton className="h-3 w-8 mb-1" />
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex items-center gap-3 w-1/3 justify-end">
          <Skeleton className="h-4 w-16 text-right" />
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
      </div>
      <div className="border-t border-neutral-800/40 pt-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1">
          <Skeleton className="h-8 rounded" />
          <Skeleton className="h-8 rounded" />
          <Skeleton className="h-8 rounded" />
        </div>
      </div>
    </div>
  );
};

export const StatsSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-48" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800/60 space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800/60 space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800/60 space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800/60 space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  );
};

export const ChartSkeleton: React.FC = () => {
  return (
    <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800/60 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-[240px] w-full" />
    </div>
  );
};
