"use client";

import HowUse from "./HowUse";
import Comments from "./comments";
import Item from "./Item";

function DropDown() {
  const dropdowns = [
    {
      head: "نحوه استفاده",
      description: <HowUse />,
      class: "flex flex-col border-b-[1px] pb-8 gap-8 w-full group",
    },
    {
      head: "نظرات کاربران",
      description: <Comments />,
      class:
        "swiper--1 overflow-visible flex flex-col gap-8 border-b-[1px] pb-8 w-full group",
    },
  ];

  return (
    <section id="dropdowns" className="flex flex-col gap-6 mb-16">
      {dropdowns.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </section>
  );
}

export default DropDown;
