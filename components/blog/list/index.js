import Item from "./Item";
import Xbox from "@/public/assets/images/xbox-red.png";

function List() {
  const items = [
    {
      head: "ساخت مستر کارت در ایران",
      date: "۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
      img: Xbox,
    },
    {
      head: "ساخت مستر کارت در ایران",
      date: "۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
      img: Xbox,
    },
    {
      head: "ساخت مستر کارت در ایران",
      date: "۱۴۰۲/۰۳/۱۶",
      view: "۱۶۲",
      img: Xbox,
    },
  ];

  return (
    <aside className="p-6 mt-12 lg:px-12 xl:px-24">
      <h6 className="mb-4 font-medium">پربازدیدترین ها</h6>
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 sm:max-w-md md:max-w-full">
        {items.map((item, idx) => (
          <Item key={idx} data={item} />
        ))}
      </div>
    </aside>
  );
}

export default List;
