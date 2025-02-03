import Cards from "./Cards";
import ImgDetail from "./ImgDetail";

function Banner() {
  return (
    <section
      id="hero"
      className="flex items-stretch gap-[20px] justify-between p-6 mx-auto mt-12 mb-20 max-w-screen-2xl md:mb-24 lg:px-12 xl:px-24"
    >
      <ImgDetail />
      <Cards />
    </section>
  );
}

export default Banner;
