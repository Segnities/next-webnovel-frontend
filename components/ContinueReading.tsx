import continueReading from "@/data/continueReading.json";
import Image from "next/image";
import MUIBorderLinearProgress from "./UI/MUIBorderLinearProgress";

export default function ContinueReading() {
   return (
      <div>
         <div className="flex justify-between items-center p-1">
            <div className="dark:text-primary text-lg font-semibold">Продовжити читати</div>
            <span className="dark:text-primary text-sm">очистити</span>
         </div>
         <div className="grid grid-cols-3 gap-4 py-3">
            {
               continueReading.map(book => {
                  let percent = Math.round((book.lastChapter / book.chapters) * 100);
                  return (
                     <section key={book.id} className="flex items-center justify-between p-2 gap-4 rounded-md bg-ghostWhite shadow-sm dark:bg-charcoal">
                        <Image
                           src={book.img}
                           alt={book.title}
                           width={56}
                           height={78}
                           style={{
                              width: "56px",
                              height: "79px",
                              borderRadius: "5px"
                           }}
                        />
                        <div className="flex flex-col gap-1">
                           <h3 className="line-clamp-2 leading-tight max-h-14 text-[0.875rem] md:text-[1rem] font-semibold mt-1 dark:text-primary">{book.title}</h3>
                           <span className="dark:dark:text-primary text-secondary text-sm cursor-pointer">Глава {book.lastChapter} - {percent}%</span>
                           <div className="max-w-[95%]">
                              <MUIBorderLinearProgress variant="determinate" value={percent} />
                           </div>
                        </div>
                     </section>
                  )
               })
            }
         </div>
      </div>
   );
}