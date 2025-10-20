import { useEffect, useState } from "react";
import Cards from "./Cards";
import ImgDetail from "./ImgDetail";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";

function Banner() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsHandler()
  }, [])

  const getProductsHandler = () => {
    callApi(routes.data.productListByCatID(1))
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
      id="hero"
      className="bg-[#FAFAFE] px-0 lg:p-6 !pb-[0] lg:!pb-[48px]"
    >
      <div className="flex items-stretch gap-[20px] justify-between mx-auto mt-12 max-w-screen-2xl lg:px-12 xl:px-24">
        <ImgDetail />
        <Cards products={products} />
      </div>
    </section>
  );
}

export default Banner;
