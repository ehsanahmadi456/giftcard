import Head from "./Head";
import Cards from "./Cards";

function BestSeller({ products }) {
  return (
    <section
      id="#bestseller"
      className="p-6 !pb-0 mx-auto mt-0 md:mt-4 lg:mt-12 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Head />
      <div className="mt-[24px]">
        <Cards list={products} />
        <Cards list={products} />
      </div>
    </section>
  );
}

export default BestSeller;
