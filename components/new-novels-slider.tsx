'use client'

import recentSlider from "@/data/recentSlider.json";
import { useMediaQuery } from 'react-responsive';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from "uuid";

import CardItem from "./card-item";

import 'swiper/css';

interface Props {
   slidesPerViewDefault: number;
}


export default function NewNovelsSlider({
   slidesPerViewDefault
}: Props) {
   const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
   const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
   const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

   const getSlidesPerView = () => {
      if (isXlScreen) {
         return slidesPerViewDefault;
      } else if (isLgScreen) {
         return slidesPerViewDefault - 2;
      } else if (isMdScreen) {
         return slidesPerViewDefault + 3;
      } else {
         return 6;
      }
   }

   return (
      <Swiper
         modules={[Autoplay, A11y, Scrollbar]}
         spaceBetween={30}
         slidesPerView={getSlidesPerView()}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         autoplay={{ delay: 4500 }}
      >
         {
            recentSlider.slice(0, 8).map(item => (
               <SwiperSlide key={uuidv4()}>
                  <CardItem item={item} />
               </SwiperSlide>
            ))
         }
      </Swiper>
   )
}