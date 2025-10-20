import Articles from "./articles";
import Banner from "./banner";
import BannerSell from "./BannerSell";
import Cards from "./cards";
import Categories from "./categories";
import Purpose from "./Purpose";
import GiftCard from "./GiftCards";
import BestSeller from "./bestSeller";
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import routes from "@/services/routes";

// async function getCategories() {
//   const res = await fetch(
//     `https://gift-card.ir/data.php?op=cat_list`,
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data.data || [];
// }

const HomePage = () => {

  return (
    <main className="w-full">
      <Banner />
      <div className="bg-[#F7F6FB]">
        <Categories />
        {/* <GiftCard /> */}
        <BestSeller />
        <BannerSell />
        <Cards />
        <Articles />
        <Purpose />
      </div>
    </main>
  );
}

export default HomePage;
