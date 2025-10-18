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
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";
import Link from "next/link";
import CategoryItemComponent from "./item";

const IconList = [
  { Icon: () => <GameO />, value: "game", label: "بازی" },
  { Icon: () => <TravelO />, value: "travel", label: "سفر" },
  { Icon: () => <HobbyO />, value: "hobby", label: "سرگرمی" },
  { Icon: () => <GiftO />, value: "gift", label: "هدیه" },
  { Icon: () => <SimCardO />, value: "simcard", label: "سیم کارت" },
  { Icon: () => <RestaurantO />, value: "restaurant", label: "رستوران" },
  { Icon: () => <RestaurantO />, value: "restaurant", label: "رستوران" },
  { Icon: () => <AnimalsO />, value: "pets", label: "حیوانات خانگی" },
  { Icon: () => <AnimalsO />, value: "pets", label: "حیوانات خانگی" },
  { Icon: () => <SimCardO />, value: "simcard", label: "سیم کارت" },
  { Icon: () => <GameO />, value: "game", label: "بازی" },
  { Icon: () => <TravelO />, value: "travel", label: "سفر" },
  { Icon: () => <HobbyO />, value: "hobby", label: "سرگرمی" },
  { Icon: () => <GiftO />, value: "gift", label: "هدیه" },
  { Icon: () => <SimCardO />, value: "simcard", label: "سیم کارت" },
  { Icon: () => <RestaurantO />, value: "restaurant", label: "رستوران" },
  { Icon: () => <RestaurantO />, value: "restaurant", label: "رستوران" },
  { Icon: () => <AnimalsO />, value: "pets", label: "حیوانات خانگی" },
  { Icon: () => <AnimalsO />, value: "pets", label: "حیوانات خانگی" },
  { Icon: () => <SimCardO />, value: "simcard", label: "سیم کارت" },
];

function SlideSort({ swiperRef }) {
  const [categories, setCategories] = useState(IconList)

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    callApi(routes.data.categoryList())
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    // .finally(() => {})
  }

  return (
    <div className="mt-[37px]">
      <Swiper
        spaceBetween={27}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"

      >
        {categories.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="w-auto"
          >
            <CategoryItemComponent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
}

export default SlideSort;
