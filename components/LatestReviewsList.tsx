import latestReviews from "@/data/latestReviews/latestReviews.json";
import ReviewCard from "./ReviewCard";

export default function LatestReviewsList() {

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {latestReviews.map(el => (
            <ReviewCard el={el} key={el.id}/>
         ))}
      </div>
   )
}