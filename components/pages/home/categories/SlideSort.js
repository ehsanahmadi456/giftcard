// components/categories/SlideSort.jsx  (یا هر مسیری که داری)

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryItemComponent from "./item";

const SlideSort = ({ swiperRef }) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      spaceBetween={12}
      slidesPerView={4}
      breakpoints={{
        640: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 5.5,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 8,
          spaceBetween: 24,
        },
        1536: {
          slidesPerView: 10,
          spaceBetween: 24,
        },
      }}
      grabCursor={true}
      className="w-full !overflow-hidden mt-[20px] md:mt-[28px] lg:mt-[32px]"
    >
      {[
        { id: 1, name: "گیفت کارت", slug: "giftcard" },
        { id: 2, name: "گیمینگ", slug: "gaming" },
        { id: 3, name: "موزیک", slug: "music" },
        { id: 4, name: "فیلم و سریال" },
        { id: 5, name: "آمازون" },
        { id: 6, name: "اپل" },
        { id: 7, name: "گوگل پلی" },
        { id: 8, name: "اسپاتیفای" },
        { id: 9, name: "نتفلیکس" },
        { id: 10, name: "پلی استیشن" },
        { id: 11, name: "ایکس باکس" },
        { id: 12, name: "استیم" },
      ].map((item, index) => (
        <SwiperSlide key={item.id || index}>
          <CategoryItemComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideSort;