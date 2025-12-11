import { BasicURL } from "@/components/utils/path";
import Link from "next/link";
import GiftO from "@/public/assets/icons/GiftO";
import Image from "next/image";

const CategoryItemComponent = ({ item }) => {
  const categoryLink = `/prod-id-name/${item.id}`;

  return (
    <Link
      href={categoryLink}
      className="flex max-w-[115px] flex-col justify-center items-center gap-[4px] md:gap-[9px] lg:gap-[14px] py-[5px] md:py-[9px] lg:py-[12px] px-[17px] md:px-[24px] lg:px-[32px] bg-[#FDFDFD] shadow-[0px_0px_25px_0px_rgba(120,_106,_194,_0.09)] rounded-[8px]"
    >
      {item.id ? (
        <Image
          src={`${BasicURL}/prod-images/${item.id}.jpg`}
          width={50}
          height={50}
          alt={item.name}
          className="
            w-[40px] h-[40px] max-w-[40px] max-h-[40px]
            md:w-[45px] md:h-[45px] md:max-w-[45px] md:max-h-[45px]
            lg:w-[50px] lg:h-[50px] lg:max-w-[50px] lg:max-h-[50px]
            rounded
          "
        />
      ) : (
        <div className="w-full mx-auto flex justify-center">
          <GiftO />
        </div>
      )}

      <p className="text-[#30275F] text-[12px] lg:text-[14px] leading-[24px] font-medium text-nowrap text-center justify-center flex">
        {item.name}
      </p>
    </Link>
  );
};

export default CategoryItemComponent;
