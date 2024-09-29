import BookActions from "@/components/book-actions";
import BookAdditionalInfo from "@/components/book-additional-info";
import BookImg from "@/components/book-img";
import BgLayout from "@/components/ui/bg-layout";

export default function BookPage() {
   return (
      <BgLayout>
         <div className="container mx-auto flex flex-col lg:flex-row gap-3">
            <div className="lg:max-w-1/4 lg:w-1/4 pr-4">
               <BookImg />
               <BookActions />
               <BookAdditionalInfo />

            </div>
            <div className="lg:w-3/4">
            </div>
         </div>
      </BgLayout>
   )
}