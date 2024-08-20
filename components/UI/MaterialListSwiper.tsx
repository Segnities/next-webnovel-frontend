'use client'

import Image from 'next/image';

import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import recentSlider from "@/data/recentSlider.json";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from 'react-responsive'

import 'swiper/css';

export default function MaterialListSwiper() {
   const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' })
   return (
      <Swiper
         modules={[Autoplay, A11y, Scrollbar]}
         spaceBetween={30}
         slidesPerView={isBigScreen ? 8 : 4}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         autoplay={{ delay: 4500 }}
      >
         {
            recentSlider.map(slide => (
               <SwiperSlide key={uuidv4()}>
                  <section className='flex flex-col items-center justify-between text-start'>
                     <div className='relative'>
                        <Image
                           src={slide.img}
                           width={150}
                           height={150}
                           alt={slide.title.slice(0, 15)}
                           style={{
                              width: "144px",
                              height: "178px",
                              borderRadius: "10px"
                           }} />
                     </div>
                     <h3 className='line-clamp-2 leading-tight max-h-14 text-[0.875rem] md:text-[1rem] font-semibold mt-1 dark:text-primary'>{slide.title.slice(0, 32)}</h3>
                     <span className='text-secondary self-start text-[0.75rem] md:text-[0.875rem]'>Україна</span>
                  </section>
               </SwiperSlide>
            ))
         }
      </Swiper>
   );
}