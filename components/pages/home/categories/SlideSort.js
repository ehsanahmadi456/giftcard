// Icons
import GameO from "@/public/assets/icons/GameO";
import GiftO from "@/public/assets/icons/GiftO";
import HobbyO from "@/public/assets/icons/HobbyO";
import TravelO from "@/public/assets/icons/TravelO";
import SimCardO from "@/public/assets/icons/SimCardO";
import AnimalsO from "@/public/assets/icons/AnimalsO";
import RestaurantO from "@/public/assets/icons/RestaurantO";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

function SlideSort({ swiperRef }) {
  const list = [
    { icon: <GameO />, name: "بازی" },
    { icon: <TravelO />, name: "سفر" },
    { icon: <HobbyO />, name: "سرگرمی" },
    { icon: <GiftO />, name: "هدیه" },
    { icon: <SimCardO />, name: "سیم کارت" },
    { icon: <RestaurantO />, name: "رستوران" },
    { icon: <RestaurantO />, name: "رستوران" },
    { icon: <AnimalsO />, name: "حیوانات خانگی" },
    { icon: <AnimalsO />, name: "حیوانات خانگی" },
    { icon: <SimCardO />, name: "سیم کارت" },
    { icon: <GameO />, name: "بازی" },
    { icon: <TravelO />, name: "سفر" },
    { icon: <HobbyO />, name: "سرگرمی" },
    { icon: <GiftO />, name: "هدیه" },
    { icon: <SimCardO />, name: "سیم کارت" },
    { icon: <RestaurantO />, name: "رستوران" },
    { icon: <RestaurantO />, name: "رستوران" },
    { icon: <AnimalsO />, name: "حیوانات خانگی" },
    { icon: <AnimalsO />, name: "حیوانات خانگی" },
    { icon: <SimCardO />, name: "سیم کارت" },
  ];

  return (
    <div className="mt-[37px]">
      <Swiper
        spaceBetween={27}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"
      >
        {list.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex max-w-[115px] flex-col justify-center items-center gap-[14px] py-[12px] px-[32px] bg-[#FDFDFD] shadow-[0px_0px_25px_0px_rgba(120,_106,_194,_0.09)] rounded-[8px]"
          >
            <div className="w-full mx-auto flex justify-center">
              {item.icon}
            </div>
            <p className="text-[#30275F] text-[14px] font-medium text-nowrap text-center justify-center flex">
              {item.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideSort;
