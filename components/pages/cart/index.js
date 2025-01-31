import Order from "./order";
import Payment from "./Payment";

function CartPage() {
  return (
    <main className="flex flex-col w-full gap-8 p-6 mx-auto mt-6 mb-12 max-w-screen-2xl lg:px-8 xl:px-24 lg:flex-row">
      <Payment />
      <Order />
      <a
        href=""
        className="sticky w-full p-4 text-center text-white rounded-md bg-primary bottom-5 md:hidden"
      >
        ادامه فرآیند خرید
      </a>
    </main>
  );
}

export default CartPage;
