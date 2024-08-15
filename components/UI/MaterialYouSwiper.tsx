'use client'

import { useTheme } from '@mui/material';

import 'swiper/css';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
   {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide",
      bgColor: "#E3F2FD",
   },
   {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide",
      bgColor: "#FFCDD2",
   },
   {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 4,
      title: "Slide 4",
      description: "This is the second slide",
      bgColor: "#FFCDD2",
   },
   {
      id: 5,
      title: "Slide 5",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 6,
      title: "Slide 6",
      description: "This is the second slide",
      bgColor: "#FFCDD2",
   },
   {
      id: 7,
      title: "Slide 7",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 8,
      title: "Slide 8",
      description: "This is the second slide",
      bgColor: "#FFCDD2",
   },
   {
      id: 9,
      title: "Slide 9",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 10,
      title: "Slide 10",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 11,
      title: "Slide 11",
      description: "This is the second slide",
      bgColor: "#FFCDD2",
   },
   {
      id: 12,
      title: "Slide 12",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
   {
      id: 13,
      title: "Slide 13",
      description: "This is the third slide",
      bgColor: "#C8E6C9",
   },
];

export default function MaterialYouSwiper() {
   const theme = useTheme();
   return (
      <Swiper
         modules={[Autoplay, A11y, Scrollbar]}
         spaceBetween={30}
         slidesPerView={7}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         autoplay={{delay: 4500}}
         pagination={{
            type: "progressbar"
         }}
      >
         {
            slides.map(slide => (
               <SwiperSlide key={slide.id}>{slide.title}</SwiperSlide>
            ))
         }
      </Swiper>
   );
}