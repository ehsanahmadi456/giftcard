import Navigation from "@/components/elements/Navigation";
import Aside from "./aside";
import Cards from "./cards";

function ProductsPage() {
  return (
    <main className="w-full p-6 mx-auto max-w-screen-2xl lg:px-12 xl:px-24">
      <section className="flex justify-center gap-4 mt-8 lg:justify-start">
        <Aside />
        <Cards />
      </section>
      <Navigation />
    </main>
  );
}

export default ProductsPage;
