import Head from "./Head";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";

// Icons
import GameO from "@/public/assets/icons/GameO";
import GiftO from "@/public/assets/icons/GiftO";
import HobbyO from "@/public/assets/icons/HobbyO";
import TravelO from "@/public/assets/icons/TravelO";
import SimCardO from "@/public/assets/icons/SimCardO";
import AnimalsO from "@/public/assets/icons/AnimalsO";
import RestaurantO from "@/public/assets/icons/RestaurantO";

const IconList = [
  { id: 1, name: "test1", order: 1, pid: 1 },
  { id: 2, name: "test2", order: 2, pid: 2 },
  { id: 3, name: "test3", order: 3, pid: 3 },
  { id: 4, name: "test4", order: 4, pid: 4 },
];
function BestSeller() {
  const [categories, setCategories] = useState(IconList.filter((_, i) => i < 3))
  const [activeCategory, setActiveCategory] = useState(0)
  const [products, setProducts] = useState([
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
    { name: "Aydin" }, { name: "phone" }, { name: "laptop" }, { name: "computer" },
  ])

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    if (activeCategory)
      getProducts()
  }, [activeCategory])

  const getCategories = () => {
    callApi(routes.data.categoryList())
      .then(res => {
        // setCategories()
        // setActiveCategory()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    // .finally(() => {})
  }

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
      id="#bestseller"
      className="p-6 !pb-0 mx-auto mt-0 md:mt-4 lg:mt-12 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Head categories={categories} active={activeCategory} setActive={setActiveCategory} />
      <div className="mt-[24px]">
        <Cards list={products} />
        <Cards list={products} />
      </div>
    </section>
  );
}

export default BestSeller;
