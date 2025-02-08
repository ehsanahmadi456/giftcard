import Articles from "./articles";
import Banner from "./banner";
import BannerSell from "./BannerSell";
import Cards from "./cards";
import Categories from "./categories";
import Purpose from "./Purpose";
import GiftCard from "./GiftCards";
import BestSeller from "./bestSeller";

function HomePage() {
  return (
    <main className="w-full">
      <Banner />
      <div className="bg-[#F7F6FB]">
        <Categories />
        <GiftCard />
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
