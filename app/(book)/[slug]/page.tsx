import BookActions from "@/components/book-actions";
import BookAdditionalInfo from "@/components/book-additional-info";
import BookChaptersList from "@/components/book-chapters-list";
import BookImg from "@/components/book-img";
import BookTitle from "@/components/book-title";
import BgLayout from "@/components/ui/bg-layout";

export default function BookPage() {
   return (
      <BgLayout>
         <div className="container mx-auto flex flex-col lg:flex-row gap-3">
            <div className="lg:w-1/12 hidden lg:flex"></div>
            <div className="lg:max-w-1/4 lg:w-1/4 pr-4">
               <BookImg />
               <BookActions />
               <BookAdditionalInfo />
            </div>
            <div className="lg:w-3/5">
               <BookTitle />
               <BookChaptersList />
            </div>
            <div className="lg:w-1/12 hidden lg:flex"></div>
         </div>
      </BgLayout>
   )
}