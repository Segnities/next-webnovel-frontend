'use client'

import { useMediaQuery } from 'react-responsive';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import DiscoverCard from "./discover-card";

import 'swiper/css';
import { DiscoverNovel } from '@/types/discover-novels';

interface Props {
    data: DiscoverNovel[]
    slidesPerViewDefault: number;
}


export default function DiscoverNovels({ slidesPerViewDefault, data }: Props) {
    const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
    console.log(data);
    

    const getSlidesPerView = () => {
        if (isXlScreen) {
            return slidesPerViewDefault;
        } else if (isLgScreen) {
            return slidesPerViewDefault - 2;
        } else if (isMdScreen) {
            return slidesPerViewDefault - 4;
        } else {
            return 4;
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
                data.map((item:DiscoverNovel) => (
                    <SwiperSlide key={item.id}>
                        <DiscoverCard item={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}