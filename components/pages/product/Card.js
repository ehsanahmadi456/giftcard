import { BasicURL } from "@/components/utils/path";
import Image from "next/image";
import Link from "next/link";

const API_URL = BasicURL;

function Card({ data }) {
  return (
    <Link
      href={`/product/${data.id}`}
      className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 hover:shadow-md"
    >
      <Image
        src={`${API_URL}/prod-images/${data.pid}.jpg`}
        width={273}
        height={165}
        className="rounded-md w-full max-h-[165px] object-contain"
        alt=""
      />
      <p className="mt-3 font-medium text-lowgray">{data.name}</p>
    </Link>
  );
}

export default Card;
