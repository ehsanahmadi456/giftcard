import { useEffect, useState } from "react";
import Item from "./Item";
import Product from "@/public/assets/images/product.png";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";

function Cards() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsHandler()
  }, [])

  const getProductsHandler = () => {
    callApi(routes.data.productListByCatID(10))
      .then(res => {
        if (res.status === "1") {
          setProducts(res.data.prods)
        }
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
