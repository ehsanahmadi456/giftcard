import Banner from "./Banner";
import Cards from "./cards";
import MostView from "./mostView";

function BlogCatPage() {
  return (
    <main className="w-full mx-auto mb-12 max-w-screen-2xl">
      <Banner />
      <Cards />

      <section id="new-cat" className="p-6 mt-8 lg:px-12 xl:px-24">
        <h4 className="mb-8 text-lg font-medium text-lowgray">
          پربازدید ترین های تکنولوژی
        </h4>
        <MostView />
      </section>
    </main>
  );
}

export default BlogCatPage;
