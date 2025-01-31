import Item from "./Item";

function Questions() {
  return (
    <section
      id="dropdowns"
      className="flex flex-col gap-8 p-6 mx-auto mt-12 mb-20 max-w-screen-2xl md:mb-24 lg:px-12 xl:px-24"
    >
      <h4 className="text-lg font-bold">پرسش های متداول</h4>
      <Item
        title="چگونه به تراکنش های خود دسترسی داشته باشم؟"
        detail="شما می توانید با رفتن به حساب کاربری و بخش تراکنش ها لیست گزارش های خود
        را مشاهده نمایید."
      />
      <Item
        title="چگونه به تراکنش های خود دسترسی داشته باشم؟"
        detail="شما می توانید با رفتن به حساب کاربری و بخش تراکنش ها لیست گزارش های خود
        را مشاهده نمایید."
      />
    </section>
  );
}

export default Questions;
