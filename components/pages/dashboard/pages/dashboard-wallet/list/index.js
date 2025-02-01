import Item from "./Item";

function List() {
  const list = [
    {
      status: true,
      date: "۱۴:۲۵:۰۰ - ۱۴۰۰/۰۵/۱۰",
      typePay: "واریز شتابی",
      price: "۵۴۳٬۰۰۰",
      trackingNumber: "502229107590758200000000",
    },
    {
      status: false,
      date: "۱۴:۲۵:۰۰ - ۱۴۰۰/۰۵/۱۰",
      typePay: "واریز شتابی",
      price: "۵۴۳٬۰۰۰",
      trackingNumber: "502229107590758200000000",
    },
  ];

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
      <h2 className="font-bold">تاریخچه واریزها</h2>
      <div className="items-center justify-between text-center gap-4 p-4 hidden md:flex">
        <p className="w-3/12">تاریخ</p>
        <p className="w-1/12">نوع واریز</p>
        <p className="w-2/12">مقدار واریزی (تومان)</p>
        <p className="w-2/12">وضعیت</p>
        <span className="w-4/12">شماره پیگیری</span>
      </div>
      <div className="md:flex md:flex-col md:gap-2 rounded-md shadow-sm md:shadow-none">
        {list.map((item, idx) => (
          <Item data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default List;
