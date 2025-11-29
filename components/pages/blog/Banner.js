"use client";
import React from "react";
import Image from "next/image";

function Banner({ data = [] }) {
  if (!data.length) return null;

  return (
    <section
      id="best"
      className="hidden w-full mb-12 max-w-screen-2xl lg:px-12 xl:px-24 mx-auto mt-6 lg:grid grid-cols-4 grid-rows-2 gap-4 rounded-lg text-white lg:h-80 xl:h-96 2xl:h-[430px]"
    >
      {data.slice(0, 5).map((item, idx) => (
        <div
          key={item.id || idx}
          className={`relative overflow-hidden rounded-lg block z-10 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-slate-800 before:from-10% before:opacity-60 before:z-[-5] ${
            idx === 0 ? "col-span-2 row-span-2" : ""
          }`}
          style={{
            backgroundImage: `url(${item.image || "/assets/images/blog.png"})`,
          }}
        >
          <p className="absolute font-medium bottom-4 right-4 text-sm md:text-base lg:text-lg">
            {item.name}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Banner;
