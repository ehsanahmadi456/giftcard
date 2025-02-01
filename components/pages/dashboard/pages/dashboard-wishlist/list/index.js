import Xbox from "@/public/assets/images/xbox.png";
import Item from "./Item";

function List() {
  const list = [
    {
      img: Xbox,
      name: "گیفت کارت ایکس باکس",
      country: "آمریکا",
      price: "۱۰",
      priceIr: "۱٬۵۶۳٬۰۰۰",
    },
  ];

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
      <h2 className="font-bold hidden md:block">لیست علاقه مندی ها</h2>

      <div className="items-center justify-between text-center gap-4 p-4 hidden md:flex">
        <p className="w-4/12">محصول</p>
        <p className="w-1/12">کشور</p>
        <p className="w-1/12">مقدار</p>
        <p className="w-2/12">مبلغ</p>
        <span className="w-5/12"></span>
      </div>

      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </div>
  );
}

export default List;
