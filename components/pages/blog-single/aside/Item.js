import { formatJalaliDate } from "@/helper";
import XboxRed from "@/public/assets/images/xbox-red.png";
import Image from "next/image";

function Item({ data }) {
  return (
    <article className="flex items-center px-3 py-4 transition-all duration-100 bg-white rounded-md gap-4 cursor-pointer hover:shadow-md">
      <Image src={XboxRed} className="w-20 rounded-md lg:w-24" alt="" />
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium">{data.name}</h4>
        <div className="flex gap-2 md:gap-4">
          <span className="flex items-center gap-1 text-[10px] text-lowgray">
            <img src="../public/assets/images/calendar.svg" alt="" />
            تاریخ انتشار: {formatJalaliDate(data.date)}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-lowgray">
            <img src="../public/assets/images/calendar.svg" alt="" />
            تعداد بازدید:
          </span>
        </div>
      </div>
    </article>
  );
}

export default Item;
