import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

function OrderSummary({ items, totals, isLoading }) {
  return (
    <section className="flex flex-col gap-6 lg:p-8 lg:bg-white lg:border rounded-md lg:w-3/5">
      <h4 className="font-medium lg:text-lg">خلاصه سفارش</h4>
      
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <FaShoppingCart className="w-16 h-16 mb-4" />
          <p>سبد خرید شما خالی است</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <CartItem key={item.id} {...item.props} />
            ))}
          </div>

          <div className="border-t pt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">تعداد محصولات:</span>
              <span className="font-medium">{totals.totalCount} عدد</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>مجموع:</span>
              <span className="text-primary">{totals.totalPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default OrderSummary