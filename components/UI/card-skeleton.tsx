import { Skeleton } from "./skeleton";

export function CardItemSkeleton() {
   return (
      <div className="flex flex-col items-center space-x-3">
         <Skeleton className="w-20 h-36 md:w-24 md:h-40 lg:w-32 lg:h-48 rounded-lg overflow-hidden" />
         <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[80px]" />
         </div>
      </div>
   )
}