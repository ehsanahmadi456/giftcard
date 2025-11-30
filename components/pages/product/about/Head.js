import Image from "next/image";
import CountryImg from "@/public/assets/images/country.png";
import { FaStar, FaComment, FaChevronLeft } from "react-icons/fa";

function Head({ data }) {
  const rating = parseFloat(data.rate) || 0;
  const reviewCount = parseInt(data.number_comment);

  return (
    <>
      <h2 className="text-lg font-bold">{data.name}</h2>
      <div className="flex gap-4">
        <div className="flex items-center gap-1 text-xs text-lowgray">
          <FaStar className="text-yellow-400" />
          <span>{rating.toFixed(1)} امتیاز</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-lowgray">
          <FaComment className="text-gray-400" />
          <span>{reviewCount} دیدگاه</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs sm:justify-start sm:gap-16">
        <div className="flex items-center gap-2 text-lowgray">
          <Image src={CountryImg} className="w-8 h-5" alt="" />
          <span> کشور: آمریکا </span>
        </div>
        <div className="flex items-center gap-1 text-secondary">
          <a href="#">تغییر کشور</a>
          <FaChevronLeft className="text-xs" />
        </div>
      </div>
      <p className="text-sm leading-loose text-lowgray">{data.help}</p>
    </>
  );
}

export default Head;