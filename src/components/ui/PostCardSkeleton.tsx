import { Skeleton } from "@/components/ui/skeleton";

export function PostCardSkeleton() {
  return (
    <article className="bg-card border border-border rounded-2xl overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-4 w-20" />
      </div>
    </article>
  );
}
