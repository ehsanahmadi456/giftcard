import { useEffect, useState } from "react";
import Item from "./Item";
import Product from "@/public/assets/images/product.png";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";

function Cards({ cat }) {
  const [products, setProducts] = useState([
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
  ])

  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = () => {
    callApi(routes.data.product)
      .then(res => {
        // setProducts()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    // .finally(() => {})
  }
  return (
    <section
      id="products"
      className="p-6 !pb-0 md:!pb-2 lg:!pb-6 !pt-0 mx-auto mt-[24px] md:mt-[36px] lg:mt-[48px] max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Item list={products} />
    </section>
  );
}

export default Cards;
