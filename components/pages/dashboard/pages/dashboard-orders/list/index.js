import Head from "./Head";
import Item from "./Item";

function List({ orders }) {
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
      {orders?.length === 0 ? (
        <p className="text-center text-gray-500 py-8">هیچ سفارشی یافت نشد</p>
      ) : (
        orders?.map((item, idx) => (
          <Item key={item.id || idx} data={item} index={idx + 1} />
        ))
      )}
    </div>
  );
}

export default List;
