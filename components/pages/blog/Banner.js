"use client";
import React from "react";
import Link from "next/link";

function Banner({ data = [] }) {
  if (!data.length) return null;

  return (
    <section
      id="best"
      className="hidden w-full mb-12 max-w-screen-2xl lg:px-12 xl:px-24 mx-auto mt-6 lg:grid grid-cols-4 grid-rows-2 gap-4 rounded-lg text-white lg:h-80 xl:h-96 2xl:h-[430px]"
    >
      {data.slice(0, 5).map((item, idx) => (
        <Link
          key={item.id}
          href={`/blog/category/${item.id}`}
          className={`relative overflow-hidden rounded-lg block bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-800 before:opacity-60 ${
            idx === 0 ? "col-span-2 row-span-2" : ""
          }`}
          style={{
            backgroundImage: `url(${item.image || "/assets/images/blog.png"})`,
          }}
        >
          <p className="absolute font-medium bottom-4 right-4 text-sm md:text-base lg:text-lg">
            {item.name}
          </p>
        </Link>
      ))}
    </section>
  );
}

export default Banner;
