import ArrowBottomHeader from "@/public/assets/icons/ArrowBottomHeader";
import Menu from "@/public/assets/icons/Menu";
import Sort from "@/public/assets/icons/Sort";
import ProductImg from "@/public/assets/images/product.png";
import Item from "./Item";

function Cards({ prods }) {
  return (
    <div className="grid items-start max-w-md grid-cols-2 gap-4 lg:grid-cols-3 md:max-w-xl lg:max-w-full h-max">
      <div className="flex items-center gap-1 text-sm font-medium cursor-pointer mobile-category-btn lg:hidden">
        <Sort />
        <span>دسته بندی ها</span>
      </div>
      <div className="flex items-center gap-1 mb-8 text-sm font-medium cursor-pointer lg:col-span-3">
        <Menu />
        <span>مرتب سازی </span>
        <ArrowBottomHeader />
      </div>
      {prods.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}
    </div>
  );
}

export default Cards;
