import Cards from "./Cards";
import ImgDetail from "./ImgDetail";

function Banner() {
  return (
    <section id="hero" className="bg-[#FAFAFE] p-6 !pb-[48px]">
      <div className="flex items-stretch gap-[20px] justify-between mx-auto mt-12 max-w-screen-2xl lg:px-12 xl:px-24">
        <ImgDetail />
        <Cards />
      </div>
    </section>
  );
}

export default Banner;
