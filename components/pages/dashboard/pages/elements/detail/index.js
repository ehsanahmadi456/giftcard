import Item from "./Item";

function formatNumber(num) {
  if (!num && num !== 0) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Detail({ stats }) {
  return (
    <div className="hidden items-center text-xs lg:flex justify-around mb-4">
      <Item
        text="موجودی کیف پول"
        detail={`${formatNumber(stats?.wallet || 0)} تومان`}
      />
      <Item
        text="موجودی جایزه‌ها"
        detail={`${formatNumber(stats?.rewards || 0)} تومان`}
      />
      <Item
        text="تعداد خریدها"
        detail={`${stats?.totalOrders || 0} سفارش`}
      />
    </div>
  );
}


export default Detail;
