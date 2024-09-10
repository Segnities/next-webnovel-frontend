import gainingPopularityBooks from "@/data/nowReading/gainingPopularity.json";
import newBooks from "@/data/nowReading/new.json";
import popularBooks from "@/data/nowReading/popular.json";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RatingCard from './RaitingCard';

export default function NowReading() {
   return (
      <section>
         <h2 className='text-xl font-medium dark:text-silver'>
            Зараз читають <span className="ml-2"><ArrowForwardIcon /></span>
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-1 mt-6'>
            <section className="w-full">
               <h3 className='text-lg font-bold dark:text-secondaryStart'>Нові</h3>
               {newBooks.map((el, idx) => (
                  <RatingCard el={el} idx={idx} key={el.id} />
               ))}
            </section>
            <section className="w-full">
               <h3 className='text-lg font-bold dark:text-secondaryStart'>Набирають популярність</h3>
               {gainingPopularityBooks.map((el, idx) => (
                  <RatingCard el={el} idx={idx} key={el.id} />
               ))}
            </section>
            <section className="w-full md:col-start-1 md:col-end-3 lg:col-auto md:w-1/2 lg:w-full md:mx-auto">
               <h3 className='text-lg font-bold dark:text-secondaryStart text-start md:text-center lg:text-start'>Популярні</h3>
               {popularBooks.map((el, idx) => (
                  <RatingCard el={el} idx={idx} key={el.id} />
               ))}
            </section>
         </div>
      </section>
   )
}