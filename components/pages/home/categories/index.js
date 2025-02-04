"use client";

import { useRef } from "react";
import Head from "./Head";

// Swiper
import SlideSort from "./SlideSort";

function Categories() {
  const swiperRef = useRef(null);

  return (
    <section
      id="#categories"
      className="p-6 pb-[8px] mx-auto mt-12 mb-[32px] max-w-screen-2xl md:mb-[48px] lg:px-12 xl:px-24"
    >
      <Head swiperRef={swiperRef} />
      <SlideSort swiperRef={swiperRef} />
    </section>
  );
}

export default Categories;
