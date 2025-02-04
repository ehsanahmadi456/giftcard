import Articles from "./articles";
import Banner from "./banner";
import BannerSell from "./BannerSell";
import BestSeller from "./bestSeller";
import Cards from "./cards";
import Categories from "./categories";
import Purpose from "./Purpose";

function HomePage() {
  return (
    <main className="w-full">
      <Banner />
      <div className="bg-[#F7F6FB]">
        <Categories />
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
