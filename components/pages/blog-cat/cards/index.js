"use client";
import React from "react";
import CardBlog from "@/components/elements/CardBlog";

function Cards({ data = [] }) {
  if (!Array.isArray(data)) return <div className="p-6 text-center text-red-500">خطا: دیتا به صورت آرایه نیست!</div>;
  if (data.length === 0) return <div className="p-6 text-center text-gray-500">هیچ پستی برای نمایش وجود ندارد</div>;

  return (
    <section className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:px-12 xl:px-24">
      {data.map((item, index) => (
        <CardBlog
          key={item.id || index}
          data={{
            id: item.id,
            head: item.name || item.title || "بدون عنوان",
            text: item.text || item.excerpt || "",
            date: item.date,
            view: item.view || 0,
          }}
        />
      ))}
    </section>
  );
}

export default Cards;
