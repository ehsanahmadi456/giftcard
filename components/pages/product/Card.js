import Image from "next/image";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link
      href="#"
      className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 hover:shadow-md"
    >
      <Image src={data.img} className="rounded-md" alt="" />
      <p className="mt-3 font-medium text-lowgray">{data.name}</p>
    </Link>
  );
}

export default Card;
