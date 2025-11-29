"use client";
import Item from "./Item";

function List({ data = [] }) {
  if (!data.length) return null;
  console.log('list',data);
  

  return (
    <aside className="p-6 mt-12 lg:px-12 xl:px-24">
      <h6 className="mb-4 font-medium">پربازدیدترین‌ها</h6>
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 sm:max-w-md md:max-w-full">
        {data.map((item) => (
          <Item
            key={item.id}
            data={{
              head: item.name,
              date: item.date,
              view: item.view,
              img: item.image,
            }}
          />
        ))}
      </div>
    </aside>
  );
}

export default List;
