import DetailImg from "@/public/assets/images/detail.png";
import Image from "next/image";
import Head from "./Head";
import Bottom from "./Bottom";

function About() {
  return (
    <section className="flex flex-col items-center gap-6 mb-16 md:flex-row lg:gap-12">
      <div className="w-full p-8 bg-white rounded-lg lg:p-0 md:bg-transparent lg:w-max">
        <Image
          alt=""
          src={DetailImg}
          className="mx-auto lg:mx-0 w-40 lg:w-[350px] xl:w-[400px] md:w-60 max-w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <Head />
        <Bottom />
      </div>
    </section>
  );
}

export default About;
