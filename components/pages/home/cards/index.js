import Item from "./Item";
import Product from "@/public/assets/images/product.png";

function Cards() {
  const list = [
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
  ];

  return (
    <section
      id="products"
      className="p-6 !pt-0 mx-auto mt-[48px] max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Item list={list} />
    </section>
  );
}

export default Cards;
