import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";
import Link from "next/link";
import CategoryItemComponent from "./item";


function SlideSort({ swiperRef }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    callApi(routes.data.categoryList())
      .then(res => {
        if (res.status === '1') {
          setCategories(res.data.cats.sort((a, b) => a.order > b.order ? 1 : -1))
        }
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
