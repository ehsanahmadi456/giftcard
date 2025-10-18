import Image from "next/image";
import Link from "next/link";
import testImg from "@/public/assets/images/banner-home.png"


function Cards({ list }) {
  return (
    <div className="w-full max-w-full overflow-x-auto hidden-scroll !m-0">
      <div className="flex gap-x-3 md:gap-x-4 md:gap-y-6">
        {list.map((item, idx) => (
          <Link
            href="#"
            key={idx}
            className="flex-shrink-0 w-[43%] min-w-[23%] lg:!min-w-[25%] p-[7px] md:p-[10px] lg:p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md md:w-1/4 md:flex-shrink hover:shadow-md"
          >
            <div className="w-full flex justify-center items-center">
              <Image
                src={testImg}
                // src={`${API_URL}/prod-images/${item.pid}.jpg`}
                width={273}
                height={165}
                className="rounded-md w-full max-h-[165px] object-contain"
                alt=""
              />
            </div>
            <p className="mt-[7px] md:mt-[10px] lg:mt-3 font-medium text-[#2F2F2F]">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
