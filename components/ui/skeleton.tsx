import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/50 dark:bg-white/10", className)}
      {...props}
    />
  )
}

function CardSkeleton() {
  return (
    <div className="glass-card p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  )
}

function TestimonialSkeleton() {
  return (
    <div className="glass-card p-8 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-14 w-14 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-5 w-5" />
        ))}
      </div>
    </div>
  )
}

function HeroSkeleton() {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center space-y-6 px-4">
      <Skeleton className="h-16 w-3/4 max-w-2xl" />
      <Skeleton className="h-8 w-2/3 max-w-xl" />
      <div className="flex gap-4 mt-4">
        <Skeleton className="h-12 w-36 rounded-full" />
        <Skeleton className="h-12 w-36 rounded-full" />
      </div>
    </div>
  )
}

export { Skeleton, CardSkeleton, TestimonialSkeleton, HeroSkeleton }
