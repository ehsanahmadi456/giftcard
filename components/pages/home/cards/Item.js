import Image from "next/image";
import Link from "next/link";

function Item({ list }) {
  return (
    <article className="flex flex-col items-center justify-center gap-8 overflow-visible swiper--1">
      <div className="flex items-center justify-between w-full">
        <h4 className="text-lg font-bold md:text-xl">گیفت کارت های موزیک</h4>
        <div className="flex items-center justify-center gap-2">
          <a href="#" className="font-medium text-secondary md:text-lg">
            مشاهده همه
          </a>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57 6.43005L3.5 12.5001L9.57 18.5701M20.5 12.5001H3.67"
                stroke="#F69625"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="grid grid-cols-4 md:gap-4">
        {list.map((item, idx) => (
          <Link
            href="#"
            key={idx}
            className="flex-shrink-0 w-2/5 p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md swiper-slide md:w-1/4 md:flex-shrink hover:shadow-md"
          >
            <Image src={item.img} className="rounded-md" alt="" />
            <p className="mt-3 font-medium text-lowgray">{item.name}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}

export default Item;
