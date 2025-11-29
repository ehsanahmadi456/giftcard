"use client";
import React from "react";
import CardBlog from "@/components/elements/CardBlog";

function Cards({ data = [] }) {
  console.log('Cards component - data:', data);
  console.log('Cards component - data length:', data?.length);
  console.log('Cards component - data type:', typeof data);
  console.log('Cards component - is array:', Array.isArray(data));
  
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return (
      <div className="p-6 text-center text-red-500">
        خطا: دیتا به صورت آرایه نیست!
      </div>
    );
  }
  
  if (data.length === 0) {
    console.log('No data to display');
    return (
      <div className="p-6 text-center text-gray-500">
        هیچ پستی برای نمایش وجود ندارد
      </div>
    );
  }

  return (
    <section
      id="all-blog"
      className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:px-12 xl:px-24"
    >
      {data.map((item, index) => {
        console.log(`Card ${index}:`, item);
        
        return (
          <CardBlog
            key={item.id || index}
            data={{
              id: item.id,
              head: item.name || item.title || 'بدون عنوان',
              text: item.text || item.excerpt || '',
              date: item.date,
              view: item.view || 0,
            }}
          />
        );
      })}
    </section>
  );
}

export default Cards;