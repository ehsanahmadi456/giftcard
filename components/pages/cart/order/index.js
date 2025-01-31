import Item from "./Item";

function Order() {
  const list = [
    { name: "گیفت کارت ایکس باکس", val: "2", price: "۴۳۶٬۵۰۰" },
    { name: "گیفت کارت ایکس باکس", val: "2", price: "۴۳۶٬۵۰۰" },
  ];

  return (
    <section
      id="cart-items"
      className="mt-8 lg:mt-0 flex flex-col gap-12 lg:order-1 lg:p-8 lg:bg-white lg:border-[1px] rounded-md lg:w-3/5"
    >
      <h4 className="font-medium lg:text-lg">خلاصه سفارش</h4>
      {list.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </section>
  );
}

export default Order;
