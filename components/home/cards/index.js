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
      className="p-6 mx-auto mt-20 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Item list={list} />
      <Item list={list} />
      <Item list={list} />
    </section>
  );
}

export default Cards;
