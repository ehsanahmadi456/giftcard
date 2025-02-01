import MoneyH from "@/public/assets/icons/MoneyH";
import Item from "./Item";
import StarH from "@/public/assets/icons/StarH";
import BuyH from "@/public/assets/icons/BuyH";

function Detail() {
  return (
    <div className="flex items-center text-xs mt-12 lg:hidden justify-around">
      <Item text="موجودی کیف پول" detail="۲۵۶٬۰۰۰ تومان" icon={<MoneyH />} />
      <Item text="موجودی جایزه ها" detail="۱۰٬۰۰۰ تومان" icon={<StarH />} />
      <Item text="تعداد خریدها" detail="۱۲ سفارش" icon={<BuyH />} />
    </div>
  );
}

export default Detail;
