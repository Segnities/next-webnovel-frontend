import continueReading from "@/data/continueReading.json";
import CardInline from "./card-inline";

export default function ContinueReading() {
   return (
      <div>
         <div className="flex justify-between items-center pb-1 px-1">
            <div className="dark:text-primaryStart text-lg font-semibold">Продовжити читати</div>
            <span className="dark:text-primaryStart text-sm cursor-pointer">очистити</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-6 pt-3 ">
            {
               continueReading.map(book => {
                  let percent = Math.round((book.lastChapter / book.chapters) * 100);
                  return (
                    <CardInline key={book.id} item={book} percent={percent}/>
                  )
               })
            }
         </div>
      </div>
   );
}