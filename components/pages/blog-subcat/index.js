import Navigation from "@/components/elements/Navigation";
import Cards from "./Cards";
import Head from "./Head";

function BlogSubcatPage() {
  return (
    <main className="w-full p-6 mx-auto mb-12 max-w-screen-2xl lg:px-12 xl:px-24">
      <Head />
      <Cards />
      <Navigation />
    </main>
  );
}

export default BlogSubcatPage;
