import Item from "./Item";

function List({ transactions = [] }) {
  const getTransactionType = (type) => {
    switch (parseInt(type)) {
      case 1:
        return "خرید";
      case 2:
        return "افزایش موجودی";
      case 3:
        return "انتقال وجه";
      case 4:
        return "برداشت موجودی";
      default:
        return "نامشخص";
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "---";
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("fa-IR");
  };

  const formatPrice = (amount) => {
    if (!amount) return "۰";
    return parseInt(amount).toLocaleString("fa-IR");
  };

  return (
    <div className="flex flex-col text-sm md:bg-white md:px-8 md:py-4 rounded-md lg:border-[1px] gap-4 w-full md:text-xs lg:text-sm">
      <h2 className="font-bold">تاریخچه تراکنش‌ها</h2>
      <div className="items-center justify-between text-center gap-4 p-4 hidden md:flex">
        <p className="w-3/12">تاریخ</p>
        <p className="w-2/12">نوع تراکنش</p>
        <p className="w-2/12">مبلغ (تومان)</p>
        <p className="w-2/12">حساب مبدا</p>
        <p className="w-2/12">حساب مقصد</p>
        <span className="w-1/12">وضعیت</span>
      </div>
      <div className="md:flex md:flex-col md:gap-2 rounded-md shadow-sm md:shadow-none">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <Item
              key={transaction.id}
              data={{
                date: formatDate(transaction.date),
                typePay: getTransactionType(transaction.type),
                price: formatPrice(transaction.amount),
                from: transaction.from,
                to: transaction.to,
                status: true,
                total: formatPrice(transaction.total)
              }}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            هیچ تراکنشی یافت نشد
          </div>
        )}
      </div>
    </div>
  );
}

export default List;