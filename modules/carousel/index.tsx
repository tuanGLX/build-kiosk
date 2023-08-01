"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import {  Pagination,   EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

import "@/styles/globals.css";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
export interface ICarouselProps {
  data: any;
}

export default function Carousel(props: ICarouselProps) {
  const { data } = props;
  const { result } = data;
  return (
    <Swiper
      // install Swiper modules
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      //   slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {result.map((item: any) => (
        <SwiperSlide key={item.id}>
          <Image
            alt={item.name}
            src={item.imageLandscape}
            key={item.id}
            className="w-full h-full"
            width={1360}
            height={450}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
