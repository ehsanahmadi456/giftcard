import Cards from "./cards";
import Navigation from "../../elements/Navigation";
import List from "./list";
import Banner from "./Banner";

function BlogPage() {
  return (
    <main className="w-full mx-auto mb-12 max-w-screen-2xl">
      <Banner />
      <Cards />
      <Navigation />
      <List />
    </main>
  );
}

export default BlogPage;
