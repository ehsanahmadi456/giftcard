import ArrowLeftPur from "@/public/assets/icons/ArrowLeftPur";
import Image from "next/image";
import Link from "next/link";
import testImg from "@/public/assets/images/banner-home.png"
import { BasicURL } from "@/components/utils/path";

function Item({ data }) {
  return (
    <li
      className="bg-[#ECF0F1] gap-[4px] md:gap-[8px] lg:gap-[12px] px-[6px] pt-[31px] md:pt-[33px] lg:pt-[34px] pb-[16px] flex flex-col 
    justify-center items-center cover-card-home lg:min-w-[190px] relative rounded-[8px]"
    >
      <p className="bg-[#F69625] w-fit absolute left-[6px] top-[6px] rounded-[50px] py-[2px] px-[4px] text-[#FFF] text-[11px] md:text-[12px] font-normal">
        پیشنهاد ویژه
      </p>
      <Image
        src={`${BasicURL}/prod-images${data.imgpath}`}
        width={50}
        height={50}
        alt="steam"
        className="
          w-[40px] h-[40px] max-w-[40px] max-h-[40px]
          md:w-[45px] md:h-[45px] md:max-w-[45px] md:max-h-[45px]
          lg:w-[50px] lg:h-[50px] lg:max-w-[50px] lg:max-h-[50px]
         "
      />
      <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium">
        {data.name}
      </p>
      <Link
        href={`/product/${data.id}`}
        className="flex items-center justify-center gap-[5px] text-[#786AC2]"
      >
        مشاهده محصول
        <ArrowLeftPur />
      </Link>
    </li>
  );
}

export default Item;
