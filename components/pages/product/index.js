import React from "react";
import About from "./about";
import DropDown from "./dropdown";
import ProductImg from "@/public/assets/images/product.png";
import Card from "./Card";

function ProductPage({ prod, prods }) {
  const list = [
    { name: "نتفلیکس", img: ProductImg },
    { name: "نتفلیکس", img: ProductImg },
    { name: "نتفلیکس", img: ProductImg },
  ];

  return (
    <main className="w-full p-6 mx-auto mt-8 mb-12 max-w-screen-2xl lg:px-12 xl:px-24">
      <About data={prod} />
      <DropDown />
      <section id="similar" className="overflow-visible swiper--2">
        <h4 className="mb-8 text-lg font-bold">محصولات مشابه</h4>
        <div className="">
          <div className=" swiper-wrapper md:gap-4">
            {prods?.prods?.map((item, idx) => (
              <Card data={item} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
