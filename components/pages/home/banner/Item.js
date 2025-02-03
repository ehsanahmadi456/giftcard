import ArrowLeftPur from "@/public/assets/icons/ArrowLeftPur";
import Image from "next/image";
import Link from "next/link";

function Item({ data }) {
  return (
    <li className="bg-[#ECF0F1] gap-[12px] px-[6px] pt-[34px] pb-[16px] flex flex-col justify-center items-center cover-card-home min-w-[190px] relative rounded-[8px]">
      <p className="bg-[#F69625] w-fit absolute left-[6px] top-[6px] rounded-[50px] py-[2px] px-[4px] text-[#FFF] text-[12px] font-normal">
        پیشنهاد ویژه
      </p>
      <Image src={data.img} width={50} height={50} alt="steam" />
      <p className="text-[#2F2F2F] text-[16px] font-medium">{data.name}</p>
      <Link
        href="#"
        className="flex items-center justify-center gap-[5px] text-[#786AC2]"
      >
        مشاهده محصول
        <ArrowLeftPur />
      </Link>
    </li>
  );
}

export default Item;
