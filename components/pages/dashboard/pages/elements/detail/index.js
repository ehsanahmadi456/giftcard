import MoneyH from "@/public/assets/icons/MoneyH";
import Item from "./Item";
import StarH from "@/public/assets/icons/StarH";
import BuyH from "@/public/assets/icons/BuyH";

function Detail() {
  return (
    <div className="hidden items-center text-xs lg:flex justify-around mb-4">
      <Item text="موجودی کیف پول" detail="۲۵۶٬۰۰۰ تومان" icon={<MoneyH />} />
      <Item text="موجودی جایزه ها" detail="۱۰٬۰۰۰ تومان" icon={<StarH />} />
      <Item text="تعداد خریدها" detail="۱۲ سفارش" icon={<BuyH />} />
    </div>
  );
}

export default Detail;
