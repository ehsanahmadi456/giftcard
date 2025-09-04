import DetailImg from "@/public/assets/images/detail.png";
import Image from "next/image";
import Head from "./Head";
import Bottom from "./Bottom";

function About({ data }) {
  const API_URL = process.env.API_URL;

  return (
    <section className="flex flex-col items-center gap-6 mb-16 md:flex-row lg:gap-12">
      <div className="w-full p-8 bg-white rounded-lg lg:p-0 md:bg-transparent lg:w-max">
        <Image
          alt=""
          width={497}
          height={563}
          src={`${API_URL}/prod-images/${data.pid}.jpg`}
          className="mx-auto rounded-[24px] lg:mx-0 w-40 lg:w-[350px] xl:w-[400px] md:w-60 max-w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <Head data={data} />
        <Bottom data={data} />
      </div>
    </section>
  );
}

export default About;
