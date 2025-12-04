import Image from "next/image";
import Link from "next/link";
import { BasicURL } from "@/components/utils/path";

function Cards({ list }) {
  return (
    <div className="flex gap-x-3 md:gap-x-4 md:gap-y-6 w-full overflow-x-auto hidden-scroll">
      {list?.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="flex-shrink-0 w-[43%] min-w-[23%] lg:!min-w-[25%] p-[10px] bg-white rounded-md hover:shadow-md transition-all"
        >
          <Image
            src={`${BasicURL}/prod-images${item.imgpath}`}
            width={200}
            height={200}
            className="w-full h-[165px] object-contain rounded-md"
            alt={item.name}
          />
          <p className="text-[#2F2F2F] mt-2 font-medium">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
