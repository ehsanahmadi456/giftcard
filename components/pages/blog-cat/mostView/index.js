"use client";
import CardBlog from "@/components/elements/CardBlog";

function MostView({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
      {data.map((item, idx) => (
        <CardBlog
          data={{
            id: item.id,
            head: item.name || item.title,
            text: item.text || item.excerpt,
            date: item.date,
            view: item.view,
          }}
          key={item.id || idx}
        />
      ))}
    </div>
  );
}

export default MostView;
