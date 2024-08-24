import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import newBooks from "@/data/nowReading/new.json";
import gainingPopularityBooks from "@/data/nowReading/gainingPopularity.json";
import popularBooks from "@/data/nowReading/popular.json"
import Image from 'next/image';

export default function NowReading() {
   return (
      <section>
         <h2 className='text-xl font-bold dark:text-silver'>Зараз читають <span className="ml-2"><ArrowForwardIcon /></span></h2>
         <div className='grid grid-cols-3 mt-4'>
            <section>
               <h3 className='text-lg font-bold dark:text-secondary'>Нові</h3>
               {
                  newBooks.map((el, idx) => (
                     <div key={el.id} className="grid grid-cols-6 items-center mt-3 gap-3">
                        <span className={`${idx < 3 ? 'text-3xl' : "text-xl"} font-semibold col-span-1`}>{idx + 1}</span>
                        <div className='col-span-1'>
                           <Image
                              src={el.img}
                              alt={el.title}
                              width={80}
                              height={80}
                              style={{
                                 width: "80px",
                                 height: "80px",
                                 borderRadius: "10px"
                              }}
                              quality={90}
                           />
                        </div>
                        <div className='col-span-4 ml-2'>
                           <h4 className="line-clamp-2 leading-tight max-h-14 text-[1rem] lg:text-[0.875rem] font-semibold mt-1 dark:text-primary">{el.title}</h4>
                           <p>{el.country}</p>
                        </div>
                     </div>
                  ))
               }
            </section>
            <section>
               <h3 className='text-lg font-bold dark:text-secondary'>Набирають популярність</h3>
            </section>
            <section>
               <h3 className='text-lg font-bold dark:text-secondary'>Популярні</h3>
            </section>
         </div>
      </section>
   )
}