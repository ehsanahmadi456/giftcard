import Cards from "./Cards";
import Head from "./Head";

function BlogSubcatPage({ list }) {
  return (
    <main className="w-full p-6 mx-auto mb-12 max-w-screen-2xl lg:px-12 xl:px-24">
      <Head />
      <Cards list={list} />
      {/* <Navigation /> */}
    </main>
  );
}

export default BlogSubcatPage;
