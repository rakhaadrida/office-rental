"use client";

import { Office } from "@/entities/office";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Gallery({ office }: { office: Office }) {
  return (
    <section id="Gallery" className="-mb-[50px]">
      <div className="swiper w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          slidesOffsetAfter={10}
          slidesOffsetBefore={10}
          className="swiper-wrapper"
        >
          {office.images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <Image
                  src={image}
                  alt="thumbnail"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
