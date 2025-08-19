import Articles from "./articles";
import Banner from "./banner";
import BannerSell from "./BannerSell";
import Cards from "./cards";
import Categories from "./categories";
import Purpose from "./Purpose";
import GiftCard from "./GiftCards";
import BestSeller from "./bestSeller";

async function getCategories() {
  const res = await fetch(
    `https://gift-card.ir/data.php?op=cat_list`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data || [];
}

async function HomePage({ products }) {
  const categories = await getCategories();

  return (
    <main className="w-full">
      <Banner cat={categories} />
      <div className="bg-[#F7F6FB]">
        <Categories />
        <GiftCard />
        <BestSeller products={products} />
        <BannerSell />
        <Cards cat={categories} />
        <Articles />
        <Purpose />
      </div>
    </main>
  );
}

export default HomePage;
