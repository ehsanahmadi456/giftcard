import Head from "./Head";
import Item from "./Item";

function List() {
  const list = [
    {
      id: 1,
      status: "شارژ",
      color: "text-success-text bg-success-bg",
      price: "۲۰٬۰۰۰",
      date: "۱۴:۲۵:۰۰ - ۱۴۰۰/۰۵/۱۰",
    },
    {
      id: 1,
      status: "شارژ",
      color: "bg-danger-bg text-danger-text",
      price: "۲۰٬۰۰۰",
      date: "۱۴:۲۵:۰۰ - ۱۴۰۰/۰۵/۱۰",
    },
    {
      id: 1,
      status: "شارژ",
      color: "bg-warn-bg text-warn-text",
      price: "۲۰٬۰۰۰",
      date: "۱۴:۲۵:۰۰ - ۱۴۰۰/۰۵/۱۰",
    },
  ];

  return (
    <div className="flex flex-col text-sm md:bg-white px-8 py-4 rounded-md lg:border-[1px] gap-4 w-full">
      <h2 className="font-bold">تاریخچه سفارشات</h2>
      <Head />

      <div className="justify-around items-center text-center gap-4 p-4 hidden md:flex">
        <p className="w-1/12">ردیف</p>
        <p className="w-3/12">وضعیت</p>
        <p className="w-3/12">مبلغ</p>
        <p className="w-3/12">تاریخ</p>
        <p className="w-2/12">فاکتور</p>
      </div>
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </div>
  );
}

export default List;
