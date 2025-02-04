import Product from "@/public/assets/images/product.png";
import Image from "next/image";
import Link from "next/link";
import Head from "./Head";

function BestSeller() {
  const list = [
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
    { img: Product, name: "نتفلیکس" },
  ];

  return (
    <section
      id="#bestseller"
      className="p-6 !pb-0 mx-auto mt-12 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <Head />
      <div className="grid grid-cols-4 md:gap-x-4 md:gap-y-6 mt-[24px]">
        {list.map((item, idx) => (
          <Link
            href="#"
            key={idx}
            className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 md:flex-shrink hover:shadow-md"
          >
            <div className="w-full flex justify-center items-center">
              <Image src={item.img} className="rounded-md" alt="" />
            </div>
            <p className="mt-3 font-medium text-lowgray">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
