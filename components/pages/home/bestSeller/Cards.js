import Image from "next/image";
import Link from "next/link";
import { BasicURL } from "@/components/utils/path";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Cards({ list }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={12}     
      slidesPerView={2.3} 
      breakpoints={{
        640: {
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4.2, 
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
      }}
      loop={list?.length > 5}
      grabCursor={true}
      className="w-full !pb-4"
    >
      {list?.map((item, index) => (
        <SwiperSlide key={item.id || index}>
          <Link
            href={`/prod-id-name/${item.id || index}`}
            className="flex flex-col p-[10px] bg-white rounded-md transition-all h-full"
          >
            <Image
              src={`${BasicURL}/prod-images${item.imgpath || "/placeholder.jpg"}`}
              width={200}
              height={200}
              className="w-full h-[165px] object-contain rounded-md"
              alt={item.name || "محصول"}
            />
            <p className="text-[#2F2F2F] mt-2 font-medium text-center">
              {item.name}
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cards;