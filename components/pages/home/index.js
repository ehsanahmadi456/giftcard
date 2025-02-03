import Articles from "./articles";
import Banner from "./banner";
import Cards from "./cards";
import Comments from "./comments";
import Purpose from "./Purpose";
import Questions from "./questions";

function HomePage() {
  return (
    <main className="w-full">
      <Banner />
      <Categories />
      <Purpose />
      <Cards />
      <Articles />
      <Comments />
      <Questions />
    </main>
  );
}

export default HomePage;
